#### Inclusive Index

# Resolving a Key to a Full URL

One of the most common tasks in a URL shortener system is to find the URL for a given key. A query to find a URL for a key can look like this:

```
SELECT url FROM shorturl WHERE key = 'key123';
```

Issue the following command to produce an execution plan for a query to find the URL for a key:

```
EXPLAIN (ANALYZE, TIMING) SELECT url FROM shorturl WHERE key = 'key123';
```

According to the output, the database used the index `shorturl_key_key` on the `key` column to find a matching row. After finding a matching row, the database needs to access the table to get the URL from the row.

This query is executed so many times that it may be worth trying to optimize it even more. Since the query is already using an index, the only thing we can do to save time is avoid having to access the table to get the URL. One way to do this is to keep the URL for each key *in the index*.

PostgreSQL provides a way to include additional columns in an index, without indexing them.

To create an index on `key` that also includes the value of `url`, issue the following command:

```
CREATE UNIQUE INDEX shorturl_key_including_url_ix ON shorturl(key) INCLUDE (url);
```

The command above creates an *inclusive index*. The index indexes the `key` column, and includes the `url` columns without indexing it.

To see how the inclusive index affected the execution plan, issue the following command to produce an execution plan:

```
EXPLAIN (ANALYZE, TIMING) SELECT url FROM shorturl WHERE key = 'key123';
```

Notice that the execution plan now performs an "Index Only Scan" using the inclusive index `shorturl_key_including_url_ix`. This means the database was able to satisfy the query without ever accessing the table (or in other words, by only using the index).

Inclusive indexes are a good way to speed up very frequent queries that use only a limited number of different columns. Note, however, that inclusive indexes tend to be very large in size, so use with caution.

In the next step, you are going to use this approach to optimize yet another common query on the short URL table.
