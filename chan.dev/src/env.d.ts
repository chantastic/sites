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
