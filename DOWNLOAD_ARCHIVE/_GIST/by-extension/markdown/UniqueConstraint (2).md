#### Unique Constraint

# Ensuring Data Uniqueness

To identify the full URL, you use a key. To make sure you identify at most *one* URL for a given key, you want to make sure the keys are unique. In other words, you want to make sure there are not two similar keys in the table.

Execute the following command in the terminal to alter the table and add a unique constraint on the key column:

```
ALTER TABLE shorturl ADD CONSTRAINT shorturl_key_unique UNIQUE(key);
```

Using a unique constraint, it's not possible to have multiple rows with the same key in the table.

Execute the following command in the terminal to inspect the changes to the table:

```
\d shorturl
```

Notice in the output the new index `shorturl_key_unique` under "Indexes". This index is used by the database to enforce the unique constraint.

📚 You can find the relevant documentation on unique constraints [here](https://www.postgresql.org/docs/13/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS).

Now that you can uniquely identify a short URL, you are ready to move on to the other columns.
