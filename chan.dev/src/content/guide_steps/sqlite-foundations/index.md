---
title: SQLite foundations
---

## Open sqlite repl

```sh
sqlite3
```

Output:

```
SQLite version 3.45.1 2024-01-30 16:01:20
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite>
```

_All commands after this assume that you an in the sqlite repl._

## Quit sqlite repl

```sh
.quit
```

## Open (or create) database in repl

```sh
.open mydata
```

## Open sqlite database in repl (one command)

```sh
sqlite3 mydatabas.db
```

## List connection

```sh
.connection
```

Output:

```
ACTIVE 0: mydata.db
```

## List databases

```sh
.databases
```

Output:

```
main: /Users/chan/Code/oomph/mydata.db r/w
```

## Create table

```sql
CREATE TABLE habits();
```

Output:

```
Parse error: near ")": syntax error
  CREATE TABLE FUN ( ) ;
                     ^--- error here
```

```sql
CREATE TABLE habits(
    title TEXT,
);
```

## List tables

```sh
.tables
```

Output:

```
habits
```

## Output current database structure ("dump")

```sh
.dump
```

## Output current database structure ("dump")

```sh
.dump
```

## Get sub command help

```sh
.help dump
```

Output:

```
.dump ?OBJECTS?          Render database content as SQL
   Options:
     --data-only            Output only INSERT statements
     --newlines             Allow unescaped newline characters in output
     --nosys                Omit system tables (ex: "sqlite_stat1")
     --preserve-rowids      Include ROWID values in the output
   OBJECTS is a LIKE pattern for tables, indexes, triggers or views to dump
   Additional LIKE patterns can be given in subsequent arguments
```

## Insert full table record (with positional values)

```sql
INSERT INTO habits VALUES('brush teeth');
```

## Insert explicit table record

```sql
INSERT INTO habits (title) VALUES('drink coffee');
```

## Read explicit columns from table records

```sql
SELECT title FROM habits;
```

## You can't meaningfully materially alter a table once it's been created

```sql
ALTER TABLE habits ADD COLUMN id INT PRIMARY KEY NOT NULL;
```

Output:

```
Parse error: Cannot add a PRIMARY KEY column
```

Asternative:

```sql
CREATE TABLE habits_copy(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT);
INSERT INTO habits_copy(title) SELECT title FROM habits;
DROP table habits;
ALTER TABLE habits_copy RENAME TO habits;
```

Reference: https://stackoverflow.com/a/36852775

## Use begin and commit to treat transaction as atomic

```sql
BEGIN; -- or BEGIN TRANSACTION;
CREATE TABLE habits_copy(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT);
INSERT INTO habits_copy(title) SELECT title FROM habits;
DROP table habits;
ALTER TABLE habits_copy RENAME TO habits;
COMMIT; -- or END TRANSACTION;
```

## Read full table record

```sql
SELECT * FROM habits;
```

## Insert to table with autoincrementing id

```sql
INSERT INTO habits (title) VALUES('push ups');
```

You can omit the id.

## Create table with foreign key

```sql
CREATE TABLE habit_completions(
    id INTEGER PRIMARY KEY,
    habit_id INTEGER,
    FOREIGN KEY (habit_id) REFERENCES habit(id)
);
```

Note: you can't add a foriegn key constraint (just as with primary keys). https://stackoverflow.com/a/1884841

## Insert to table with foreign key

```sql
INSERT INTO habit_completions (habit_id) VALUES(2);
```

## Read data with foreign keys

```sql
-- flat
SELECT * from habit_completions;
```

```sql
-- inner join
SELECT title -- just the title, no id's
FROM habit_completions
INNER JOIN habits
ON habit_completions.habit_id = habits.id; -- join condition
-- ensures that only records with matching foreign keys are
```

The query can be achieved in reverse (thru `habits`).

```sql
SELECT title
FROM habit
INNER JOIN habits_completions
ON habits.id = habit_completions.habit_id ;
```

_Note: fancy syntax when column names match._

```sql
INNER JOIN artists USING(ArtistId);
```

I don't think this is worth it, personally. Because it requires calcifying the table name into the column. And, should the query every change, it has to be decomposed to use a different keyword. Both bad, imo.

(possible article id: "USING considered harmful")

https://www.sqlitetutorial.net/sqlite-join/

## Add date column

_Note:_
How to decide which format to use

References:

- https://sqlite.org/datatype3.html
- https://www.sqlitetutorial.net/sqlite-date/
- https://stackoverflow.com/questions/11631390/how-to-add-a-date-column-to-a-table-with-current-date-as-default-value

can't be done with ALTER TABLE

```sql
CREATE TABLE habits_copy(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, datetime TEXT default current_timestamp);

INSERT INTO habits_copy (title) VALUES('test')

SELECT * FROM habits_copy;
```

_Output:_

```
1|test|2024-02-11 19:59:31
```

---

## TODO: NEXT STEP: Add date to habit_completions.

## Other notes

### `autoincrement` option creates an `sqlite_sequence` table (automatically)

https://stackoverflow.com/a/77234217

### I think maybe we should ALTER table with a simpler addition earlier on. Maybe description/details/reps.

### INNER JOIN vs OUTER JOIN

### Naming conventions and best practice

https://stackoverflow.com/a/7724
https://stackoverflow.com/a/2118567

### Best practices

- To use column prefixes or not. There's actually nice refactor potential on both sides, depending on your long-term needs. https://stackoverflow.com/a/7289746
- i think i prefer snake_case. i find it most readable and it works nicely with the convention for capital keywords SELECT id habit_id FROM habit_completions
