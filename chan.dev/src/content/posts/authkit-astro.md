---
title: AuthKit withAstro
date: 2024-07-08
references:
  - https://workos.com/docs/user-management/1-configure-your-project/configure-a-redirect-uri
---

## install `@workos-inc/node`

## add secrets

- `WORKOS_API_KEY` to `.env`(.local)
- `WORKOS_CLIENT_ID` to `.env`(.local)
- (will also need to add to hosting provider)

## add redirect endpoint.

```js
export async function GET({params, redirect}) {
	return redirect('https://workos.com', 302)
}
```

## return the url (not working yet)

```js
import {WorkOS} from '@workos-inc/node'
// import type {APIRoute} from 'astro'

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const client_id = import.meta.env.WORKOS_CLIENT_ID

export async function GET({params, redirect}) {
	const authorizationUrl =
		workos.userManagement.getAuthorizationUrl({
			provider: 'authkit',
			redirectUri: import.meta.env.WORKOS_REDIRECT_URI,
			clientId: client_id,
		})

	return new Response(authorizationUrl)
	// return redirect(authorizationUrl, 302)
}
```

## redirect to url

```diff
-	return new Response(authorizationUrl)
+   return redirect(authorizationUrl, 302)
```

## create callback endpoint

create dynamic route that recieve authentication token

```js
import {WorkOS} from '@workos-inc/node'

export const prerender = false

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

export async function GET({params, request}) {
	const code = new URL(request.url).searchParams.get('code')

	return new Response(code)
}
```

## exchange code for user object

```js
import {WorkOS} from '@workos-inc/node'

export const prerender = false

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

export async function GET({request, redirect}) {
	const code = new URL(request.url).searchParams
		.get('code')
		?.toString()

	const {user} =
		await workos.userManagement.authenticateWithCode({
			code,
			clientId,
		})

	console.log(user)

	return new Response(JSON.stringify(user))
	// return redirect('/')
}
```

## encrypt session and set cookie

```js
import {WorkOS} from '@workos-inc/node'
import {sealData /_, unsealData_/} from 'iron-session'

export const prerender = false

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

export async function GET({request, redirect, cookies}) {
const code = new URL(request.url).searchParams
.get('code')
?.toString()

    const {user, accessToken, refreshToken, impersonator} =
    	await workos.userManagement.authenticateWithCode({
    		code,
    		clientId,
    	})

    const encryptedSession = await sealData(
    	{accessToken, refreshToken, user, impersonator},
    	{password: import.meta.env.WORKOS_COOKIE_PASSWORD}
    )

    cookies.set('wos-session', encryptedSession, {
    	path: '/',
    	httpOnly: true,
    	secure: true,
    	sameSite: 'lax',
    })

    return redirect('/user')

}
```

## Read session in single view

```astro
---
import {unsealData} from 'iron-session'

export const prerender = false

const cookie = Astro.cookies.get('wos-session')

if (!cookie) {
	return Astro.redirect('/auth')
}

const session = await unsealData(cookie.value, {
	password: import.meta.env.WORKOS_COOKIE_PASSWORD,
})
---

<pre><code>{JSON.stringify(session, null, '\t')}</code></pre>
```

## verify session in single view

```js
const JWKS = createRemoteJWKSet(
	new URL(
		workos.userManagement.getJwksUrl(
			import.meta.env.WORKOS_CLIENT_ID
		)
	)
)

try {
	await jwtVerify(session.accessToken, JWKS)
} catch (e) {
	console.warn('Failed to verify session:', e)
	return Astro.redirect('/auth')
}
```
