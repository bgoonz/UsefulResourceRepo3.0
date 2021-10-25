#### Partial Index

# Finding Unused Short URLs

The short URL table includes a field `hits` that keeps track of the number of times a short URL was used.

To find unused short URLs, issue the following command to execute the query and produce an execution plan:

```
EXPLAIN (ANALYZE, TIMING) SELECT * FROM shorturl WHERE hits = 0;
```

To find short URLs with no hits, the database scanned the entire table. The timing may vary, but it should be around 2--3 ms.

To try to speed up access to unused short URLs, issue the following command to create an index on the field:

```
CREATE INDEX shorturl_hits_ix ON shorturl (hits);
```

The command creates a B-Tree index on the `hits` column of the `shorturl` table.

To see how the presence of an index affects the execution plan, produce an execution plan and timing for the same query again.

```
EXPLAIN (ANALYZE, TIMING) SELECT * FROM shorturl WHERE hits = 0;
```

The execution plan should now be different. Instead of scanning the entire table, the database now uses the new index to find rows with no hits. The timing should also be much lower at ~0.2 ms.

Before you move on, issue the following query to check how many unused short URLs there are:

```
SELECT count(*) FROM shorturl WHERE hits = 0;
```

According to the query results, there are less than 100 unused short URLs in the table---a very small portion of the table. Our index is indexing all the rows in the table, but we really only use a small part of it.

PostgreSQL provides a way to index only a portion of the table, which can result in a smaller and more efficient index.

To create an index on just the part of the table we need, issue the following command:

```
CREATE INDEX shorturl_unused_part_ix ON shorturl (id) WHERE hits = 0;
```

Adding a `WHERE` clause to the `CREATE INDEX` creates a *partial index*. The partial index only includes short URLs where `hits` equal 0. The partial index can be used by queries that use a similar predicate.

Execute the query again to see if the partial index is being used:

```
EXPLAIN (ANALYZE, TIMING) SELECT * FROM shorturl WHERE hits = 0;
```

The output shows that the partial index is used!

The main benefit of partial indexes is that depending on what portion of the table they are indexing, they can be significantly smaller than full indexes.

To check the sizes of both indexes you created, issue the following command:

```
\di+ shorturl_*_ix
```

The command displays details about indexes starting with "shorturl\_" and ending with "\_ix", and it should include both the full index and the partial index.

In the output you can see that the partial index `shorturl_unused_part_ix` is much smaller than the full index `shorturl_hits_ix`. On big tables, indexes can become pretty big as well. Partial indexes are a great way to balance speed with space savings.

In the next step, you are going to use a similar approach to optimize a different query on the short URL table.
