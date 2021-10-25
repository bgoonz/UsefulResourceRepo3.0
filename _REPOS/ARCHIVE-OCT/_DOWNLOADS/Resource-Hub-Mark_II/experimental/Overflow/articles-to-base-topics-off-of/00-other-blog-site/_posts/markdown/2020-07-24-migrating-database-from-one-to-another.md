<!--


---
 Migrating database from one to another
excerpt: Migrating database from one to another
date: 2020-07-24 00:05:00 IST
updated: 2020-07-24 00:05:00 IST
categories: database
tags: database
---
Recently I came into a situation where I want to migrate one database to another.
Once from sqlite to PostgreSQL & another from MariaDB (MySQL) to PostgreSQL. Both were not production level apps.

Taking a database dump and importing it into others won't work because of data type issues & various syntax errors.

The only way it worked for me is by using the `sequel` gem. It will work in just 2 commands if the data is simple.


```shell
gem install sequel pg sqlite3
sequel -CE sqlite:~/code/data.db postgres://<db_username>:<db_password>@<db_host>/<db_name>
```

Unfortunately, my second migration was not that simple. It had some blob and hit with [encoding issue](https://stackoverflow.com/a/28633839).
I tried to fix this by changing the Postgres configuration `postgresql.conf`.

```conf
bytea_output = 'escape'                 # hex, escape
```

It didn't work for me. So I have to write a small script to remove the escape sequence & update it back in MySQL.

```ruby
require "sequel"

DB = Sequel.connect "mysql2://root:root@localhost/<db_name>"

co = DB[:table_name]

co.each do | ob |
    if (ob[:field_name])
        co.where(id: ob[:id]).update(field_name: ob[:field_name].gsub("\\,", ""))
    end
end
```

With this updated data, sequel import worked fine.

```
gem install sequel pg mysql2
sequel -CE mysql2://root:root@localhost/<db_name> postgres://<db_username>:<db_password>@<db_host>/<db_name>
```

I used `sequel` because I had a ruby development environment already set up on my machine.
If you are a python dev, you can take a look into [pgloader](https://pgloader.readthedocs.io/en/latest/) for the same.

If you have found any other way or found any issue on migrating, please let me know via comments.



