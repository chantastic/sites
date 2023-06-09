---
title: "SQL Stuff (WIP)"
dateCreated: 2022-01-28
---

## PlanetScale

So, at the moment, I'm most interested in PlanetScale.
So, this will be from the perspective of their CLI.
But I expect to learn a lot of things general to SQL.

I found sqlzoo.com as a reference yor the sql stuff.

## Basec setup

- `pscale auth login`
- `pscale database create trash-fire`

ok. i can only have one db on my free account. cool.
but it can have 3 branches.
so lets try to do some exploration in a branch.

- `pscale branch list chantastic`
- `pscale branch create chantastic trash-fire`

ok. let's add like a first name or something.

- `create table names (id int not null primary key, name varchar(40));`
- `pscale shell chantastic trash-fire`
- `insert into names(id,name) values(1, "Michael");`
- `select * from names`

### Questions

What's the whole browser DB thing?
IndexedDB

SQLite is on the mac by default.
`> sqlite3`

Some things:
- https://developer.chrome.com/docs/devtools/storage/indexeddb/#refresh
- https://stackoverflow.com/questions/12247380/offline-access-sqlite-or-indexed-db#12247517
- https://softwareengineering.stackexchange.com/questions/219953/how-is-localstorage-different-from-indexeddb

*SQLite stuff*

- https://www.tutorialspoint.com/sqlite/sqlite_commands.htm
- https://www.sqlitetutorial.net/sqlite-tutorial/sqlite-show-tables/
- https://flaviocopes.com/sqlite-how-to-install/

### Insights

A lot of these tutorials start from the position of selecting stuff.
None of them show you how to get around.
The `cd` and `ls` of the SQL.

I need that sweet visibility.