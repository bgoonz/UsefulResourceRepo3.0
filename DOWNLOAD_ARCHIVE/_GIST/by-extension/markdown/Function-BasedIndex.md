#### Function-Based Index

# Finding URLS by Domain

From time to time, it might be interesting to see which domains the users of your URL shortener system are linking to. Links can contain many pieces of information such as query params, paths, and hash fragments. You most likely don't care about all of that...you just care about the domain.

To find short URLs referencing the domain "hakibenita.com", execute the following query:

```
SELECT *
FROM shorturl
WHERE substring(url from '.*://([^/]+)') = 'hakibenita.com'
LIMIT 10;
```

In the results, you should see several rows referencing different pages on the domain "hakibenita.com".

The query uses the function `substring`, which accepts a column, `url`, and a regular expression pattern to extract the domain.

To inspect how the database executes the query and how long it takes, issue the following command:

```
EXPLAIN (ANALYZE, TIMING) SELECT *
FROM shorturl
WHERE substring(url from '.*://([^/]+)') = 'hakibenita.com';
```

The execution plan shows that the database is scanning the entire table and applies the function to each row to find a match. The query is now also very slow compared to other queries you executed in previous steps that also performed full table scans. You should see timing of roughly ~50 ms.

If you use an expression very often, you can index it!

Issue the following command to create an index on the expression to extract the domain from the URL:

```
CREATE INDEX shorturl_domain_ix ON shorturl(substring(url FROM '.*://([^/]+)'));
```

The command creates a function-based index using the exact same expression you used in the query.

To see how the function-based index affects the execution plan, issue the following command:

```
EXPLAIN (ANALYZE, TIMING) SELECT *
FROM shorturl
WHERE substring(url from '.*://([^/]+)') = 'hakibenita.com';
```

The execution plan should now indicate that the index was used. In addition to that, the query should be significantly faster (up to 50 times faster, in fact!).

When you have an expression that is often used in queries, it might be a good idea to add a calculated column. However, if you have an existing application that you can't control or change, function-based indexes can come in very handy!
