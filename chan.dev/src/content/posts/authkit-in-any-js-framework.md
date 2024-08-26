---
title: AuthKit in Any JS Framework
---

## Create a new app

## Add WorkOS environment variables

## Install @workos-inc/node sdk

## Ensure that rendering strategy is server or hybrid

## Create /sign-in endpoint/route

## Redirect to AuthKit authorization url

## Create /auth/callback endpoint/route

## Parse code from /auth/callback request

## Exchange authorization code for user session

## Take sealedSession from authentication response

## Catch authentication errors

## Set cookie with sealedSession

## Redirect to protected route

## Redirect (from protected route) back to /sign-in in no session cookie

## Attempt authentication with session cookie. render error if failed.

## Redirect when authentication fails with `invalid_jwt`

## Attempt token refresh when authorization is expired. Respond with error if refresh fails.

## Delete cookie and redirect when refresh token fails

## Set 'wos-session' with refreshed session

## Get session user from cookie and render it

## (Consolidate conditional view logic to user assignment)

## Add /sign-out endpoint

## Get 'wos-session' cookie; redirect in none

## `getLogoutURLFromSessionCookie`

## Delete the `wos-session` cookie

## Redirect to authkit logout url

## Add middleware boilerplate

## Restrict middleware from running, save for protected routes

## Extract `withAuth` middleware function

## Extend global context with WorkOS `User` type
