Installation
------------

1.  Install Postgres and a simple UI

        brew install postgresql
        # https://youtu.be/xaWlS9HtWYw?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN&t=192
        brew cask install psequel

2.  Start Postgres

        brew services start postgresql

3.  Initialize the database

        createdb sample_db
        psql sample_db

Creating the first table
------------------------

https://youtu.be/w4HEVY\_GjqY?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN&t=317

[Postgres Dataype Table](https://www.postgresql.org/docs/9.5/static/datatype.html#DATATYPE-TABLE)

    VARCHAR(N) /*Where n is maximum amount of characters that will be stored in the field*/

Delete a table
--------------

    DROP TABLE people

Populate data
-------------

https://youtu.be/fA0jpjwi4J8?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN

It is possible to insert data with or without fieldnames.

    INSERT INTO people VALUES (3, 'Dave')
    INSERT INTO people (id, name) VALUES (3, 'Dave')

SELECT DATA
-----------

https://youtu.be/-FPVPcq28r4?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN&t=68

### Get all data

    SELECT * from poeple

### Get specific columns

    SELECT first_name, age from poeple

### Multiple condition where statement

    SELECT * FROM PEOPLEs
    WHERE last_name = 'Backstrom'
    AND age < 37

### ORDER BY

    SELECT * FROM PEOPLE
    WHERE age < 35
    ORDER BY age;

The order will be ascending by default. To revert the order add the `DESC` keyword at the end of the `ORDER BY` statement, like so:

    SELECT * FROM PEOPLE
    WHERE age < 35
    ORDER BY age DESC;

SELECT \* FROM PEOPLE WHERE age &lt; 35 ORDER BY Last\_name, first\_name;

### Update

    UPDATE people
    SET age=37
    WHERE first_name = 'Joakim'

### DELETE

    DELETE FROM people
    WHERE first_name = 'Joakim'
