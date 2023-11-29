---
title: SQLite
order: 0
date: 2023-11-29
references:
  - https://flaviocopes.com/sqlite-how-to-install/
---

## A Complete SQLite experince

- Already installed on macs.
  - (I don't know windows)
- Run `sqlite3` to run the sqlite program.
- `.help` to see all commands
- `.save test.db|sqlite` to save the current in-memory db
- `.connect test.db|sqlite` to save the current in-memory db
- start and create db at same time `sqlite3 tutorial.db`
- `.schema users`
- only single quoates for strings
- can pass in `null` to `PRIMARY KEY` for auto increment, when using `VALUES`
- Hit <kbd>ctrl-C</kbd> _twice_ to terminate the program.
- `.show` to show settings and database

```sql
-- yup, formatting works
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
)
```
