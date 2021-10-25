#### URL Shortener

A URL shortener provides short URLs that redirect to longer URLs, and keeps track of the number of clicks:

![Figure-1](https://www.katacoda.com/embed/orm-haki-benita/postgres-getting-started-btree/assets/url-shortener.png)

For example, a short URL like `https://sho.rt/jdj23d` can redirect to a longer URL like `https://www.oreilly.com/attend/`.

Short URLs usually have a very short domain like `https://sho.rt`, and a short random part at the end we call a "key" (for example, `jdj23d`). Using the short unique key, the application identifies the full URL and redirects to it.

URL shorteners are very common in text-constrained platforms such as SMS messages and tweets. URL shorteners are also very useful for keeping track of the numbers of clicks in digital campaigns and other types of promotions.

In the next step, you are going to optimize queries of a short URL application using several features of B-Tree indexes.
