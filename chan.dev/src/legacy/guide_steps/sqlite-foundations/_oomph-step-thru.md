## Create DB

```sh
sqlite3

.open _oomph.db
```

## Create table

```sql
CREATE TABLE habits(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    recurrance_pattern TEXT
);
```

## Alter table

```sql
ALTER TABLE habits
ADD COLUMN owner TEXT NOT NULL;
```

## Rename column (mispelled)

```sql
ALTER TABLE habits
RENAME COLUMN recurrance_pattern
TO recurrence_pattern;
```

## Insert values

```sql
INSERT INTO habits (title, recurrence_pattern, owner)
VALUES ('Cold shower', '1111111', 'Chan');
```

## Update values

```sql
UPDATE habits
SET recurrence_pattern = '0100011'
WHERE id = 9;
```

_Why it's important to have `id`s. Text is not guaranteed to update intended row_

## Select with filter

```sql
SELECT * FROM  habits
WHERE owner='Chan';
```

## Count select

```sql
SELECT COUNT(*) FROM  "habits";
SELECT COUNT(*) AS count FROM  "habits"; -- as variable name
```
