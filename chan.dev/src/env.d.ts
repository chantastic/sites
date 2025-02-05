/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="sanitize-html" />

import type {User} from '@workos-inc/node'

declare global {
	namespace App {
		interface Locals {
			user: User
		}
	}
}

interface ImportMetaEnv {
  readonly WORKOS_API_KEY: string
  readonly WORKOS_CLIENT_ID: string
  readonly WORKOS_REDIRECT_URI?: string
  readonly WORKOS_COOKIE_PASSWORD: string
  readonly ANTHROPIC_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
