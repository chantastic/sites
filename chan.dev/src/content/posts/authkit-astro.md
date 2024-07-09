---
title: AuthKit with Astro
date: 2024-07-08
references:
  - https://workos.com/docs/user-management/1-configure-your-project/configure-a-redirect-uri
---

These instructions are a step-by-step guide to setting up AuthKit with Astro.  
There are steps that may feel abitrary. This is intentional to make debugging your experience easier.

## Install WorkOS Node SDK

```bash
npm i @workos-inc/node
```

## Add secrets to local environment

```txt title=".env.local"
WORKOS_API_KEY=#COPY FROM WORKOS DASHBOARD
WORKOS_CLIENT_ID=#COPY FROM WORKOS DASHBOARD
WORKOS_REDIRECT_URI=#LOCAL PATH TO AUTH CALLBACK ENDPOINT
WORKOS_COOKIE_PASSWORD=#32 RANDOM CHARACTER PASSWORD
```

## Direct sign-ins to Hosted AuthKit

### Create sign-in redirect endpoint

```ts title="src/pages/sign-in.ts"
import type {APIRoute} from 'astro'

export const GET: APIRoute = async () => {
	return new Response(
		'/sign-in redirect endpoint. Not Implemented.'
	)
}

// disable prerendering in 'hyrbrid' mode
export const prerender = false
```

### Request authorization URL

```diff lang="ts" title="src/pages/sign-in.js"
import type {APIRoute} from 'astro'
+import {WorkOS} from '@workos-inc/node'

+const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
+const client_id = import.meta.env.WORKOS_CLIENT_ID

export const GET: APIRoute = async () => {
+	const authorizationUrl =
+		workos.userManagement.getAuthorizationUrl({
+			provider: 'authkit',
+			redirectUri: import.meta.env.WORKOS_REDIRECT_URI,
+			clientId: client_id,
+		})

	return new Response(
-		'/sign-in redirect endpoint. Not Implemented.',
+		authorizationUrl,
	)
}
```

### Redirect to authorization URL

```ts title="src/pages/sign-in.ts" ins=/{redirect}/ del={9} ins={10}
export const GET: APIRoute = async ({redirect}) => {
	const authorizationUrl =
		workos.userManagement.getAuthorizationUrl({
			provider: 'authkit',
			redirectUri: import.meta.env.WORKOS_REDIRECT_URI,
			clientId,
		})

	return new Response(authorizationUrl)
	return redirect(authorizationUrl, 302)
}
```

### Final sign-in redirect endpoint

```ts title="src/pages/sign-in.ts"
import {WorkOS} from '@workos-inc/node'
import type {APIRoute} from 'astro'

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

export const GET: APIRoute = async ({redirect}) => {
	const authorizationUrl =
		workos.userManagement.getAuthorizationUrl({
			provider: 'authkit',
			redirectUri: import.meta.env.WORKOS_REDIRECT_URI,
			clientId,
		})

	return redirect(authorizationUrl, 302)
}

// disable prerendering in 'hyrbrid' mode
export const prerender = false
```

---

## Create an auth callback endpoint

```ts title="src/pages/auth/callback.ts"
import type {APIRoute} from 'astro'

export const GET: APIRoute = async ({}) => {
	return new Response(
		'Auth callback endpoint. Not implemented.'
	)
}
```

### Extract authentication token from the request

```ts title="src/pages/auth/callback.ts" ins=/{request}/ del={7} ins={8}
export const GET: APIRoute = async ({request}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)

	return new Response(
		'Auth callback endpoint. Not implemented.'
		code
	)
}
```

### Exchange aunthentication token for a user object

````diff lang="ts" title="src/pages/auth/callback.ts"
import type {APIRoute} from 'astro'
+ import {WorkOS} from '@workos-inc/node'

+const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
+const clientId = import.meta.env.WORKOS_CLIENT_ID

export const GET: APIRoute = async ({request}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)
+	const session =
+		await workos.userManagement.authenticateWithCode({
+			code,
+			clientId,
+		})

-	return new Response(code)
+	return new Response(JSON.stringify(session))
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
````

## encrypt session and set cookie

```diff lang="ts" title="src/pages/auth/callback.ts"

import type {APIRoute} from 'astro'
import {WorkOS} from '@workos-inc/node'
+import {sealData} from 'iron-session'

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)
const clientId = import.meta.env.WORKOS_CLIENT_ID

export const GET: APIRoute = async ({request}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)
	const session =
		await workos.userManagement.authenticateWithCode({
			code,
			clientId,
		})

+	const encryptedSession = await sealData(session, {
+		password: import.meta.env.WORKOS_COOKIE_PASSWORD,
+	})

-	return new Response(session)
+	return new Response(encryptedSession)
}
```

### Set cookie with encrypted session

```diff lang="ts" title="src/pages/auth/callback.ts"
export const GET: APIRoute = async ({
	request,
+	cookies,
}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)
	const session =
		await workos.userManagement.authenticateWithCode({
			code,
			clientId,
		})

	const encryptedSession = await sealData(session, {
		password: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})

+	cookies.set('wos-session', encryptedSession, {
+		path: '/',
+		httpOnly: true,
+		secure: true,
+		sameSite: 'lax',
+	})

	return new Response(encryptedSession)
}
```

### Redirect to authenticated page

```diff lang="ts" title="src/pages/auth/callback.ts"
export const GET: APIRoute = async ({
	request,
+	redirect,
	cookies,
}) => {
	const code = String(
		new URL(request.url).searchParams.get('code')
	)
	const session =
		await workos.userManagement.authenticateWithCode({
			code,
			clientId,
		})

	const encryptedSession = await sealData(session, {
		password: import.meta.env.WORKOS_COOKIE_PASSWORD,
	})

	cookies.set('wos-session', encryptedSession, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
	})

-	return new Response(encryptedSession)
+	return redirect('/dashboard')
}
```

---

## Create single protected page

```astro title="src/pages/dashboard.astro"
---
// disable prerendering in 'hyrbrid' mode
export const prerender = false
---

<pre><code>{JSON.stringify('Not implemented.', null, '\t')}</code></pre>
```

### Get encrypted session from cookie and redirect to sign-in if not present

```astro title="src/pages/dashboard.astro" ins={5-9} del=/"Not implemented"/ ins=/"(cookie),/
---
// disable prerendering in 'hyrbrid' mode
export const prerender = false

const cookie = Astro.cookies.get('wos-session')

if (!cookie) {
	return Astro.redirect('/sign-in')
}
---
<pre><code>{JSON.stringify("Not implemented"cookie, null, '\t')}</code></pre>
```

### Unseal session from cookie

```astro title="src/pages/dashboard.astro" ins={2, 13-15} del=/(cookie)session/ ins=/cookie(session)/
---
import {unsealData} from 'iron-session'

// disable prerendering in 'hyrbrid' mode
export const prerender = false

const cookie = Astro.cookies.get('wos-session')

if (!cookie) {
	return Astro.redirect('/sign-in')
}

const session = await unsealData(cookie.value, {
	password: import.meta.env.WORKOS_COOKIE_PASSWORD,
})
---
<pre><code>{JSON.stringify(cookiesession, null, '\t')}</code></pre>
```

### Verify the session

```diff lang="astro" title="src/pages/dashboard.astro" del=/(session)verifiedSession/ ins=/session(verifiedSession)/
---
+import {WorkOS} from '@workos-inc/node'
+import {createRemoteJWKSet, jwtVerify} from 'jose'

import {unsealData} from 'iron-session'

const cookie = Astro.cookies.get('wos-session')

if (!cookie) {
	return Astro.redirect('/sign-in')
}

const session = await unsealData(cookie.value, {
	password: import.meta.env.WORKOS_COOKIE_PASSWORD,
})

const workos = new WorkOS(import.meta.env.WORKOS_API_KEY)

+const JWKS = createRemoteJWKSet(
+	new URL(
+		workos.userManagement.getJwksUrl(
+			import.meta.env.WORKOS_CLIENT_ID
+		)
+	)
+)

+let verifiedSession = await jwtVerify(session.accessToken, JWKS)

export const prerender = false
---

<pre><code>{JSON.stringify(sessionverifiedSession, null, '\t')}</code></pre>

```

### Redirect to sign-in if session is invalid

```diff lang="ts" title="src/pages/dashboard.astro"
-let verifiedSession = await jwtVerify(session.accessToken, JWKS)
+let verifiedSession
+
+try {
+	verifiedSession = await jwtVerify(session.accessToken, JWKS)
+} catch (e) {
+	return Astro.redirect('/sign-in')
+}
```

### Display session data

```diff lang="astro" title="src/pages/dashboard.astro"
---
// hidden implementation for brevity
---
-<pre><code>{JSON.stringify(verifiedSession, null, '\t')}</code></pre>
+<h1>Hello {session.user.lastName}!</h1>
```
