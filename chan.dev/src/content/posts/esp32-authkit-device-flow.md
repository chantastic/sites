---
title: "Authenticate an ESP32 with WorkOS AuthKit's Device Flow"
publishDate: 2026-08-12
description: "Authenticate an ESP32 with WorkOS AuthKit’s OAuth device flow using the correct endpoints, polling behavior, token refresh, TLS, and secure token storage."
tags: [workos, auth, tutorial]
mermaid: true
references:
  - https://workos.com/docs/authkit/cli-auth
  - https://workos.com/docs/reference/authkit/cli-auth
  - https://workos.com/docs/authkit/connect/oauth
  - https://www.rfc-editor.org/rfc/rfc8628
  - https://docs.espressif.com/projects/esp-idf/en/latest/esp32/security/flash-encryption.html
  - https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/storage/nvs_encryption.html
---

> 🚧 This started as an AI-generated implementation plan from Google. The protocol choice was right. Several details were not.

Google got the architecture right and the endpoint pair wrong.

That isn't a cosmetic mistake. Mixing WorkOS AuthKit and WorkOS Connect endpoints leaves you with a flow that cannot complete.

Here's the corrected plan.

## What needed correction

| The original plan said… | The correction |
| --- | --- |
| Start at `https://api.workos.com/authorize/device`. | First-party AuthKit uses `https://api.workos.com/user_management/authorize/device`. |
| Poll `https://api.workos.com/oauth2/token`. | First-party AuthKit polls `https://api.workos.com/user_management/authenticate`. |
| Configure the client as a Public Application and request `openid profile email`. | That language belongs to WorkOS Connect. The documented first-party AuthKit request only sends its `client_id`. |
| The complete verification URI fills in the device code. | It carries the short `user_code`. The long `device_code` stays private on the ESP32. |
| Scanning the QR code removes the code step. | It removes typing. The user should still compare and confirm the code shown in the browser and on the ESP32. |
| The user grants consent. | First-party AuthKit asks the user to confirm the device. Explicit OAuth consent applies to third-party Connect applications. |
| Keep polling until pending becomes success. | Also handle `slow_down`, `access_denied`, `expired_token`, malformed requests, and network failures. |
| Store the tokens and reuse the access token forever. | Access tokens expire. Refresh tokens may rotate and must replace the previous value atomically. |
| Send the access token with every outbound request. | Send it only to a resource server that accepts this token. A WorkOS access token is not a universal API credential. |
| Flash Encryption makes token storage secure. | Use encrypted NVS, Flash Encryption in Release mode, and Secure Boot. This reduces risk; it does not make a captured device invulnerable. |

## Pick one WorkOS flow

WorkOS exposes two device-flow endpoint pairs.

Do not mix them.

| Use case | Device authorization | Token polling |
| --- | --- | --- |
| An ESP32 signing into **your own AuthKit application** | `https://api.workos.com/user_management/authorize/device` | `https://api.workos.com/user_management/authenticate` |
| An ESP32 acting as a **WorkOS Connect OAuth client** | `https://<authkit_domain>/oauth2/device_authorization` | `https://<authkit_domain>/oauth2/token` |

The rest of this plan uses first-party AuthKit.

## The corrected flow

<pre class="mermaid not-prose">
sequenceDiagram
    participant ESP32
    participant WorkOS
    participant Browser

    ESP32->>WorkOS: POST /user_management/authorize/device
    WorkOS-->>ESP32: device_code, user_code, URIs, expiry, interval
    ESP32->>ESP32: Render QR, user_code, and fallback URI
    Browser->>WorkOS: Open verification_uri_complete
    WorkOS-->>Browser: Sign in and confirm user_code

    loop No more often than interval allows
        ESP32->>WorkOS: POST /user_management/authenticate
        WorkOS-->>ESP32: pending, slow_down, terminal error, or tokens
    end
</pre>

The phone talks to WorkOS.

It does not talk directly to the ESP32. Polling is how the ESP32 learns that authentication finished.

## Before authentication

The ESP32 needs:

- the AuthKit application's `client_id`
- a QR encoder and enough display resolution for the returned URL
- a bounded JSON parser
- a trusted CA bundle for `api.workos.com`
- a correct clock, usually synchronized with SNTP before TLS begins
- encrypted NVS configured for token storage

A client ID is public configuration.

A WorkOS API key or client secret is not. Never ship either in firmware.

And don't call `WiFiClientSecure::setInsecure()`. HTTPS without certificate verification is costume security.

## 1. Request device authorization

Send a form-encoded HTTPS request:

```http
POST /user_management/authorize/device HTTP/1.1
Host: api.workos.com
Content-Type: application/x-www-form-urlencoded

client_id=client_123456789
```

The documented AuthKit request does not include OIDC scopes.

A successful response looks like this:

```json
{
  "device_code": "CVE2wOfIFK4vhmiDBntpX9s8KT2f0qngpWYL0LGy9HxYgBRXUKIUkZB9BgIFho5h",
  "user_code": "BCDF-GHJK",
  "verification_uri": "https://example.authkit.app/device",
  "verification_uri_complete": "https://example.authkit.app/device?user_code=BCDF-GHJK",
  "expires_in": 300,
  "interval": 5
}
```

Keep the entire response in RAM only as long as the flow needs it.

`device_code` is a credential. Do not display it, write it to serial logs, or put it in a QR code.

## 2. Render the instructions

Show three things:

1. A QR code containing `verification_uri_complete` exactly as WorkOS returned it.
2. The `user_code` in large, readable text.
3. The plain `verification_uri` as a fallback when practical.

The complete URI contains the **user code**, not the device code.

Scanning the QR code saves typing. It should not skip comparison. WorkOS shows the code in the browser so the user can confirm that the phone and ESP32 are participating in the same flow.

Choose a QR library that fits the ESP32 framework you're actually using—Arduino or ESP-IDF—and test the physical screen. A theoretically valid QR code is useless when the modules are too small for a phone camera.

## 3. Let AuthKit authenticate the user

The phone opens the hosted AuthKit UI.

AuthKit applies the authentication methods and organization policies configured for the application. That may include SSO, social login, passkeys, MFA, or email and password.

After signing in, the user confirms the code.

This is not necessarily an OAuth consent screen. For first-party AuthKit, it is device confirmation.

## 4. Poll without hammering WorkOS

Poll the AuthKit authentication endpoint with the temporary `device_code`:

```http
POST /user_management/authenticate HTTP/1.1
Host: api.workos.com
Content-Type: application/x-www-form-urlencoded

grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Adevice_code&device_code=DEVICE_CODE&client_id=client_123456789
```

Use `interval` as the **minimum** delay between requests. If WorkOS omits it, RFC 8628 says to use five seconds.

Treat the polling loop as a small state machine:

| Result | Action |
| --- | --- |
| `authorization_pending` | Wait for the current interval, then poll again. |
| `slow_down` | Add at least five seconds to the interval, then continue. |
| `access_denied` | Stop and tell the user the request was denied. |
| `expired_token` | Stop. Clear the screen and start a new flow only when the user asks. |
| Other OAuth error | Stop. Log a sanitized error, not credentials. |
| Timeout or network failure | Back off exponentially. Never retry faster than the current interval. |
| Success | Stop polling and process the token response. |

Stop when `expires_in` elapses even if the network never returns a clean `expired_token` response.

"Non-blocking" and "sleep" are not the same design. Schedule polls with a timer or put the flow in its own FreeRTOS task. Do not freeze the display loop, starve the watchdog, or make the login screen look dead.

## 5. Use and refresh the tokens

A successful first-party AuthKit response includes the user, an access token, and a refresh token. It may also include an organization ID and authentication metadata.

Now the ESP32 can show the user's actual name from the response—not a hard-coded `Welcome, User!`.

The access token is a short-lived JWT. Send it as a bearer token only to your API or another resource server designed to accept it:

```http
Authorization: Bearer ACCESS_TOKEN
```

That server must validate the signature and relevant claims, including expiration, issuer, and application context. The ESP32 should not treat "I have a JWT-shaped string" as proof of anything.

When the access token expires, exchange the refresh token for a new token pair using the public-client form of the AuthKit authentication endpoint:

```http
POST /user_management/authenticate HTTP/1.1
Host: api.workos.com
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&client_id=client_123456789&refresh_token=REFRESH_TOKEN
```

Do not add a client secret to make this work.

WorkOS may rotate the refresh token. Persist the replacement before discarding the previous value. If refresh fails because the session expired or was revoked, erase the local tokens and restart device authorization.

## Store less, protect what remains

Keep the access token in RAM when possible. Persist the refresh token only when the product needs to survive a reboot without another login.

For production ESP32 devices:

- enable Flash Encryption in **Release** mode
- enable Secure Boot
- store the refresh token in encrypted NVS, not a plaintext file or unencrypted partition
- provision unique encryption material per device
- remove token values from serial logs, crash dumps, and telemetry
- erase local tokens during sign-out or factory reset

These controls protect against casual flash extraction and unauthorized firmware.

They do not fully protect a running, physically captured device. If that threat matters, add hardware-backed key protection or keep the long-lived credential behind a backend token broker.

## If this is actually a Connect client

Then the original plan was closer—but still used the wrong host and authorization path.

Configure a WorkOS Connect OAuth application as **Public**, then use:

```text
POST https://<authkit_domain>/oauth2/device_authorization
POST https://<authkit_domain>/oauth2/token
```

The authorization request may include space-separated scopes such as:

```text
openid profile email offline_access
```

`offline_access` requests a refresh token. Third-party Connect applications show consent. First-party Connect applications do not.

Connect returns an OAuth token response that can include `access_token`, `id_token`, `refresh_token`, `expires_in`, and `token_type`. Do not assume it has the same shape as the first-party AuthKit response.

Same protocol.

Different product surface. Different endpoints.
