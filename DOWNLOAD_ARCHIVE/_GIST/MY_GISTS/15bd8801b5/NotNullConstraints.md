#### Not Null Constraints

# "Required" Columns

To identify a URL in the table you use the key, but it is currently possible to insert rows without a key.

Execute the following command to add a constraint that makes the `key` column required:

```
ALTER TABLE shorturl ALTER COLUMN key SET NOT NULL;
```

💡 TIP: Using `psql`, you can hit `<tab>` for auto-complete.

`NULL` in SQL is used to indicate "no value". By adding a "not null" constraint on a column, you make sure it must have a value.

To inspect the changes to the table, execute the following command in the terminal:

```
\d shorturl
```

Notice that now both the primary key `id` and the column `key` are marked as "not null" in the "Nullable" column.

To test the new constraint, try to insert a row without providing a key:

```
INSERT INTO shorturl (url) VALUES ('https://www.postgresql.org');
```

As expected, the command fails because you did not provide a key. Next, try to provide "NULL" key:

```
INSERT INTO shorturl (url, key) VALUES ('https://www.postgresql.org', NULL);
```

This also fails because `key` cannot be NULL.

In addition to `key`, all the other fields in the table must have a value. To enforce that, execute the following command to add "not null" constraints on the other fields in the table:

```
ALTER TABLE shorturl ALTER COLUMN url SET NOT NULL;
ALTER TABLE shorturl ALTER COLUMN hits SET NOT NULL;
ALTER TABLE shorturl ALTER COLUMN created_at SET NOT NULL;
```

Execute the following command in the terminal to inspect the new constraints:

```
\d shorturl
```

Notice the column titled "Nullable" in the output; all fields are now marked as "not null".

📚 The relevant documentation on NOT NULL constraints can be found [here](https://www.postgresql.org/docs/13/ddl-constraints.html#id-1.5.4.6.6).

Now that all the fields in the table are required, you are going to make it easier to insert new short URLs to the table.
