#### URL Shortener Table

# Short URL Table

To experiment with our URL shortener system, we preloaded 10,000 rows into the table.

To get a sense of the data, issue the following command to view the first 10 rows in the table:

```
SELECT * FROM shorturl LIMIT 10;
```

In the output you should see 10 rows with the following columns:

- `id`: A unique identifier for each row. This is the primary key of the table.
- `key`: A short unique text that is used to identify the full URL from the short URL.
- `url`: The full URL to redirect to.
- `hits`: The number of times the short URL was used.
- `created_at`: When the short URL was created.

In the next step, you are going to improve performance of several queries on this table.
