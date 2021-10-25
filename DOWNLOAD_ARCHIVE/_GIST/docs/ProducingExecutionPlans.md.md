#### Producing Execution Plans

When you execute a query in the database, the query goes through the query optimizer, which produces an execution plan. The execution plan then instructs the database _how_ to execute the query. The optimizer, for example, determines whether a query will use an index or scan the entire table.

In this scenario you are going to inspect and evaluate execution plans.

To produce the execution plan for a query that fetches all short URLs, issue the following command:

```

EXPLAIN SELECT * FROM shorturl;

```

Adding the `EXPLAIN` command before a query produces the execution plan. The plan in this case is pretty simple: it includes just one step.

The first row of the execution plan says "Seq Scan on shorturl". This line means that the optimizer instructs the database to sequentially scan the entire table. This type of operation is also known as a "full table scan."

For a slightly more complicated execution plan, issue the following command:

```

EXPLAIN SELECT * FROM shorturl WHERE id = 10;

```

The output now shows the execution plan for a query to fetch a single `shorturl` with `id = 10`.

In this case the optimizer found that there is an index on the `id` field and decided to use it. The execution plan shows that the database will scan the index `shorturl_pkey` and apply the condition `(id = 10)`.

When using `EXPLAIN` to produce an execution plan, the database will not execute the query; it will just produce an execution plan. It is sometimes useful to execute a query and produce the actual execution plan that was used, along with some timing information.

To execute a query, time it, and produce an execution plan, issue the following command:

```

EXPLAIN (ANALYZE, TIMING) SELECT * FROM shorturl WHERE id = 10;

```

Using `EXPLAIN` with the `ANALYZE` and `TIMING` options, the database will execute and time the query. Notice the output now includes both the execution plan, and how long the query took to execute.

In the next steps you are going to use `EXPLAIN` to evaluate query performance.
