---
title: AuthKit Roles and Permissions
publishDate: 2024-07-12
references:
  - https://workos.com/docs/user-management/roles-and-permissions
  - https://workos.com/changelog/role-based-access-control-for-authkit
  - https://www.youtube.com/watch?v=FErRN9EsKTo
description: Unlock the power of Role-Based Access Control (RBAC) with AuthKit's new permissions feature. Learn how to implement and manage user roles, create custom permissions, and secure your application with ease. Perfect for developers looking to streamline authentication in their next.js projects.
og:
  title: 'Mastering RBAC with AuthKit: A Complete Guide to Roles and Permissions | chan.dev'
  image: 'https://i.ytimg.com/vi/FErRN9EsKTo/maxresdefault.jpg'
tags:
  - AuthKit
  - RBAC
  - Permissions
  - Web Security
  - Next.js
  - WorkOS
  - User Management
  - Access Control
  - Web Development
  - JavaScript
---

AuthKit now has permissions — completing the RBAC feature set.

This is everything you need to know to start implementing authorization in your applications.

## Video tutorial

<div data-responsive-youtube-container>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FErRN9EsKTo?si=7SE3Hf3KG-bx6F7b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Chapters:

- [Set up the example app (Next.js)](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=14s)
- [Permissions exist on sessions](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=25s)
- [Create new permissions in WorkOS](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=49s)
- [Add permissions to roles](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=120s)
- [Understand session duration](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=154s)
- [Create and assign permissions to roles](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=175s)
- [Implement permission checks in your app](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=212s)
- [Where to learn more…](https://www.youtube.com/watch?v=FErRN9EsKTo&feature=shared&t=225s)

---

## Setup

For this lesson, we're using the latest [next-authkit-example](https://github.com/workos-inc/next-authkit-example) app.

![GitHub repo: WorkOs/next-authkit-example](./authkit-roles-and-permissions/authkit-roles-and-permissions-1.png)

## Sessions include `permissions`

Permissions are available on AuthKit session object.

Opening the next-authkit-example, we see that `permissions` is an array of strings.
And that the property is parallel to the `user` and `role` properties.

![src/app/account/page.tsx file. permissions are destructured from the user session.](./authkit-roles-and-permissions/authkit-roles-and-permissions-4.png)

Running the app, we can sign in to see a few session details but no permissions.

![next-authkit-exapmle app, logged in, showing session user and role details but no permissions.](./authkit-roles-and-permissions/authkit-roles-and-permissions-2.png)

This property is empty, when no permissions are assigned.
So, let's add couple permissions in the WorkOS Dashboard.

## Add permissions is the WorkOS Dashboard

![WorkOS create permissions form. Example shows a post:view permission.](./authkit-roles-and-permissions/authkit-roles-and-permissions-3.png)

Navigate to the Roles tab (in the WorkOS Dashboard).

Create a new permission with:

- `Name`: A colloquial name.
- `Slug`: The value that will be stored on the session and used for authorization.
- `Description`: An optional field for additional permission details and instructions.

I'll add two permissions:

- `posts:read`
- `posts:all`

The firt for read-only and the second for full CRUD.

_Note that the slugs can't be changed after creation._

![WorkOS edit permissions form, showing that permission slug is not editable.](./authkit-roles-and-permissions/authkit-roles-and-permissions-5.png)

## Assign permissions to roles

Permissions cannot be directly assigned to users.  
They're applied to users thru roles.

By default, every user in AuthKit gets a `Member` role.
Let's update the `Member` role to include compose the `posts:read` permission.

Back in our app, let's sign out and back in again to see the updated permissions.

![Permissions shown in next-authkit-example app account page.](./authkit-roles-and-permissions/authkit-roles-and-permissions-7.png)

_Note: We're logging out to force a fresh session. The access token duration setting dictates the rate at which a session is refreshed. This is set in Authentication > Sessions)._

![Permissions will refresh based on your Access token duration time (set in Authentication > Sessions).](./authkit-roles-and-permissions/authkit-roles-and-permissions-6.png)

## Assign a new role to a user

Back in our WorkOS dashboard, let's create an Admin role, and assign the `posts:all` permission to it.

![Create Admin Role with posts:all permissions.](./authkit-roles-and-permissions/authkit-roles-and-permissions-8.png)

Then change our user's role from `Member` to `Admin`.

![Change user role from Member to Admin.](./authkit-roles-and-permissions/authkit-roles-and-permissions-9.png)

Log out and back in again to force a session refresh.  
And see both the new role and permissions!

![next-auth-example app, logged in, showing details with Admin role and posts:all permissions.](./authkit-roles-and-permissions/authkit-roles-and-permissions-10.png)

## A couple things to note

- You need to upgrade to the latest version of the WorkOS SDK for the update User type.
- Our doc on [Roles and Permissions](https://workos.com/docs/user-management/roles-and-permissions) includes a number of best practices for your projects. Including suggestions for role assignment for SCIM integrations.
