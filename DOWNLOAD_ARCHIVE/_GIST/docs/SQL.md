# Visual Representation of SQL Joins

> This article describes SQL Joins in a visual manner, and also the most efficient way to write the visualized Joins.

This is just a simple article visually explaining SQL JOINs. In this article I am going to discuss seven different ways you can return data from two relational tables. The seven Joins I will discuss are: Inner JOIN, Left JOIN, Right JOIN, Outer JOIN, Left Excluding JOIN, Right Excluding JOIN, Outer Excluding JOIN, while providing examples of each.

- [Download Visual SQL JOINs examples - 1.09 KB](https://www.codeproject.com/KB/database/Visual_SQL_Joins/visual_sql_joins.zip)
- [Download Visual SQL JOINs cheat sheet - 143 KB](https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_orig.jpg)

## Background

I’m a pretty visual person. Things seem to make more sense as a picture. I looked all over the Internet for a good graphical representation of SQL `JOIN`s, but I couldn’t find any to my liking. Some had good diagrams but lacked completeness (they didn’t have all the possible JOINs), and some were just plain terrible. So, I decided to create my own and write an article about it.

## Using the code

I am going to discuss seven different ways you can return data from two relational tables. I will be excluding cross Joins and self referencing Joins. The seven Joins I will discuss are shown below:

1.  `INNER JOIN`
2.  `LEFT JOIN`
3.  `RIGHT JOIN`
4.  `OUTER JOIN`
5.  `LEFT JOIN EXCLUDING INNER JOIN`
6.  `RIGHT JOIN EXCLUDING INNER JOIN`
7.  `OUTER JOIN EXCLUDING INNER JOIN`

For the sake of this article, I’ll refer to 5, 6, and 7 as `LEFT EXCLUDING JOIN`, `RIGHT EXCLUDING JOIN`, and `OUTER EXCLUDING JOIN`, respectively. Some may argue that 5, 6, and 7 are not really joining the two tables, but for simplicity, I will still refer to these as Joins because you use a SQL Join in each of these queries (but exclude some records with a `WHERE` clause).

#### Inner JOIN

INNER_JOIN.png

![Visual_SQL_Joins/INNER_JOIN.png](https://www.codeproject.com/KB/database/Visual_SQL_Joins/INNER_JOIN.png)

This is the simplest, most understood Join and is the most common. This query will return all of the records in the left table (table A) that have a matching record in the right table (table B). This Join is written as follows:

SELECT _&lt;select_list&gt;_ FROM Table_A A INNER JOIN Table_B B ON A.Key = B.Key

#### Left JOIN

![Visual_SQL_Joins/LEFT_JOIN.png](https://www.codeproject.com/KB/database/Visual_SQL_Joins/LEFT_JOIN.png)

This query will return all of the records in the left table (table A) regardless if any of those records have a match in the right table (table B). It will also return any matching records from the right table. This Join is written as follows:

SELECT _&lt;select_list&gt;_ FROM Table_A A LEFT JOIN Table_B B ON A.Key = B.Key

#### Right JOIN

![Visual_SQL_Joins/RIGHT_JOIN.png](https://www.codeproject.com/KB/database/Visual_SQL_Joins/RIGHT_JOIN.png)

This query will return all of the records in the right table (table B) regardless if any of those records have a match in the left table (table A). It will also return any matching records from the left table. This Join is written as follows:

SELECT _&lt;select_list&gt;_ FROM Table_A A RIGHT JOIN Table_B B ON A.Key = B.Key

#### Outer JOIN

![Visual_SQL_Joins/FULL_OUTER_JOIN.png](https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins/FULL_OUTER_JOIN.png)

This Join can also be referred to as a `FULL OUTER JOIN` or a `FULL JOIN`. This query will return all of the records from both tables, joining records from the left table (table A) that match records from the right table (table B). This Join is written as follows:

SELECT _&lt;select_list&gt;_ FROM Table_A A FULL OUTER JOIN Table_B B ON A.Key = B.Key

#### Left Excluding JOIN

![Visual_SQL_Joins/LEFT_EXCLUDING_JOIN.png](https://www.codeproject.com/KB/database/Visual_SQL_Joins/LEFT_EXCLUDING_JOIN.png)

This query will return all of the records in the left table (table A) that do not match any records in the right table (table B). This Join is written as follows:

SELECT _&lt;select_list&gt;_ FROM Table_A A LEFT JOIN Table_B B ON A.Key = B.Key WHERE B.Key IS NULL

#### Right Excluding JOIN

![Visual_SQL_Joins/RIGHT_EXCLUDING_JOIN.png](https://www.codeproject.com/KB/database/Visual_SQL_Joins/RIGHT_EXCLUDING_JOIN.png)

This query will return all of the records in the right table (table B) that do not match any records in the left table (table A). This Join is written as follows:

SELECT _&lt;select_list&gt;_ FROM Table_A A RIGHT JOIN Table_B B ON A.Key = B.Key WHERE A.Key IS NULL

#### Outer Excluding JOIN

![Visual_SQL_Joins/OUTER_EXCLUDING_JOIN.png](https://www.codeproject.com/KB/database/Visual_SQL_Joins/OUTER_EXCLUDING_JOIN.png)

This query will return all of the records in the left table (table A) and all of the records in the right table (table B) that do not match. I have yet to have a need for using this type of Join, but all of the others, I use quite frequently. This Join is written as follows:

SELECT _&lt;select_list&gt;_ FROM Table_A A FULL OUTER JOIN Table_B B ON A.Key = B.Key WHERE A.Key IS NULL OR B.Key IS NULL

#### Examples

Suppose we have two tables, _Table_A_ and _Table_B_. The data in these tables are shown below:

**TABLE_A** PK Value —- ———- 1 FOX 2 COP 3 TAXI 6 WASHINGTON 7 DELL 5 ARIZONA 4 LINCOLN 10 LUCENT

**TABLE_B** PK Value —- ———- 1 TROT 2 CAR 3 CAB 6 MONUMENT 7 PC 8 MICROSOFT 9 APPLE 11 SCOTCH

The results of the seven Joins are shown below:

**-- INNER JOIN** SELECT A.PK AS A_PK, A.Value AS A_Value, B.Value AS B_Value, B.PK AS B_PK FROM Table_A A INNER JOIN Table_B B ON A.PK = B.PK

<table><thead><tr class="header"><th>A_PK</th><th style="text-align: center;">A_Value</th><th style="text-align: right;">B_Value</th><th style="text-align: right;">B_PK</th></tr></thead><tbody><tr class="odd"><td>1</td><td style="text-align: center;">FOX</td><td style="text-align: right;">TROT</td><td style="text-align: right;">1</td></tr><tr class="even"><td>2</td><td style="text-align: center;">COP</td><td style="text-align: right;">CAR</td><td style="text-align: right;">2</td></tr><tr class="odd"><td>3</td><td style="text-align: center;">TAXI</td><td style="text-align: right;">CAB</td><td style="text-align: right;">3</td></tr><tr class="even"><td>6</td><td style="text-align: center;">WASHINGTON</td><td style="text-align: right;">MONUMENT</td><td style="text-align: right;">6</td></tr><tr class="odd"><td>7</td><td style="text-align: center;">DELL</td><td style="text-align: right;">PC</td><td style="text-align: right;">7</td></tr></tbody></table>

(5 row(s) affected)

**-- LEFT JOIN** SELECT A.PK AS A_PK, A.Value AS A_Value, B.Value AS B_Value, B.PK AS B_PK FROM Table_A A LEFT JOIN Table_B B ON A.PK = B.PK

<table><thead><tr class="header"><th>A_PK</th><th style="text-align: center;">A_Value</th><th style="text-align: right;">B_Value</th><th style="text-align: right;">B_PK</th></tr></thead><tbody><tr class="odd"><td>1</td><td style="text-align: center;">FOX</td><td style="text-align: right;">TROT</td><td style="text-align: right;">1</td></tr><tr class="even"><td>2</td><td style="text-align: center;">COP</td><td style="text-align: right;">CAR</td><td style="text-align: right;">2</td></tr><tr class="odd"><td>3</td><td style="text-align: center;">TAXI</td><td style="text-align: right;">CAB</td><td style="text-align: right;">3</td></tr><tr class="even"><td>4</td><td style="text-align: center;">LINCOLN</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="odd"><td>5</td><td style="text-align: center;">ARIZONA</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="even"><td>6</td><td style="text-align: center;">WASHINGTON</td><td style="text-align: right;">MONUMENT</td><td style="text-align: right;">6</td></tr><tr class="odd"><td>7</td><td style="text-align: center;">DELL</td><td style="text-align: right;">PC</td><td style="text-align: right;">7</td></tr><tr class="even"><td>10</td><td style="text-align: center;">LUCENT</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr></tbody></table>

(8 row(s) affected)

**-- RIGHT JOIN** SELECT A.PK AS A_PK, A.Value AS A_Value, B.Value AS B_Value, B.PK AS B_PK FROM Table_A A RIGHT JOIN Table_B B ON A.PK = B.PK

<table><thead><tr class="header"><th>A_PK</th><th style="text-align: center;">A_Value</th><th style="text-align: right;">B_Value</th><th style="text-align: right;">B_PK</th></tr></thead><tbody><tr class="odd"><td>1</td><td style="text-align: center;">FOX</td><td style="text-align: right;">TROT</td><td style="text-align: right;">1</td></tr><tr class="even"><td>2</td><td style="text-align: center;">COP</td><td style="text-align: right;">CAR</td><td style="text-align: right;">2</td></tr><tr class="odd"><td>3</td><td style="text-align: center;">TAXI</td><td style="text-align: right;">CAB</td><td style="text-align: right;">3</td></tr><tr class="even"><td>6</td><td style="text-align: center;">WASHINGTON</td><td style="text-align: right;">MONUMENT</td><td style="text-align: right;">6</td></tr><tr class="odd"><td>7</td><td style="text-align: center;">DELL</td><td style="text-align: right;">PC</td><td style="text-align: right;">7</td></tr><tr class="even"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">MICROSOFT</td><td style="text-align: right;">8</td></tr><tr class="odd"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">APPLE</td><td style="text-align: right;">9</td></tr><tr class="even"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">SCOTCH</td><td style="text-align: right;">11</td></tr></tbody></table>

(8 row(s) affected)

**-- OUTER JOIN** SELECT A.PK AS A_PK, A.Value AS A_Value, B.Value AS B_Value, B.PK AS B_PK FROM Table_A A FULL OUTER JOIN Table_B B ON A.PK = B.PK

<table><thead><tr class="header"><th>A_PK</th><th style="text-align: center;">A_Value</th><th style="text-align: right;">B_Value</th><th style="text-align: right;">B_PK</th></tr></thead><tbody><tr class="odd"><td>1</td><td style="text-align: center;">FOX</td><td style="text-align: right;">TROT</td><td style="text-align: right;">1</td></tr><tr class="even"><td>2</td><td style="text-align: center;">COP</td><td style="text-align: right;">CAR</td><td style="text-align: right;">2</td></tr><tr class="odd"><td>3</td><td style="text-align: center;">TAXI</td><td style="text-align: right;">CAB</td><td style="text-align: right;">3</td></tr><tr class="even"><td>6</td><td style="text-align: center;">WASHINGTON</td><td style="text-align: right;">MONUMENT</td><td style="text-align: right;">6</td></tr><tr class="odd"><td>7</td><td style="text-align: center;">DELL</td><td style="text-align: right;">PC</td><td style="text-align: right;">7</td></tr><tr class="even"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">MICROSOFT</td><td style="text-align: right;">8</td></tr><tr class="odd"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">APPLE</td><td style="text-align: right;">9</td></tr><tr class="even"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">SCOTCH</td><td style="text-align: right;">11</td></tr><tr class="odd"><td>5</td><td style="text-align: center;">ARIZONA</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="even"><td>4</td><td style="text-align: center;">LINCOLN</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="odd"><td>10</td><td style="text-align: center;">LUCENT</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr></tbody></table>

(11 row(s) affected)

**-- LEFT EXCLUDING JOIN** SELECT A.PK AS A_PK, A.Value AS A_Value, B.Value AS B_Value, B.PK AS B_PK FROM Table_A A LEFT JOIN Table_B B ON A.PK = B.PK WHERE B.PK IS NULL

<table><thead><tr class="header"><th>A_PK</th><th style="text-align: center;">A_Value</th><th style="text-align: right;">B_Value</th><th style="text-align: right;">B_PK</th></tr></thead><tbody><tr class="odd"><td>4</td><td style="text-align: center;">LINCOLN</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="even"><td>5</td><td style="text-align: center;">ARIZONA</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="odd"><td>10</td><td style="text-align: center;">LUCENT</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="even"><td>(3 ro</td><td style="text-align: center;">w(s) affect</td><td style="text-align: right;">ed)</td><td style="text-align: right;"></td></tr></tbody></table>

**-- RIGHT EXCLUDING JOIN** SELECT A.PK AS A_PK, A.Value AS A_Value, B.Value AS B_Value, B.PK AS B_PK FROM Table_A A RIGHT JOIN Table_B B ON A.PK = B.PK WHERE A.PK IS NULL

<table><thead><tr class="header"><th>A_PK</th><th style="text-align: center;">A_Value</th><th style="text-align: right;">B_Value</th><th style="text-align: right;">B_PK</th></tr></thead><tbody><tr class="odd"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">MICROSOFT</td><td style="text-align: right;">8</td></tr><tr class="even"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">APPLE</td><td style="text-align: right;">9</td></tr><tr class="odd"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">SCOTCH</td><td style="text-align: right;">11</td></tr></tbody></table>

(3 row(s) affected)

**-- OUTER EXCLUDING JOIN** SELECT A.PK AS A_PK, A.Value AS A_Value, B.Value AS B_Value, B.PK AS B_PK FROM Table_A A FULL OUTER JOIN Table_B B ON A.PK = B.PK WHERE A.PK IS NULL OR B.PK IS NULL

<table><thead><tr class="header"><th>A_PK</th><th style="text-align: center;">A_Value</th><th style="text-align: right;">B_Value</th><th style="text-align: right;">B_PK</th></tr></thead><tbody><tr class="odd"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">MICROSOFT</td><td style="text-align: right;">8</td></tr><tr class="even"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">APPLE</td><td style="text-align: right;">9</td></tr><tr class="odd"><td>NULL</td><td style="text-align: center;">NULL</td><td style="text-align: right;">SCOTCH</td><td style="text-align: right;">11</td></tr><tr class="even"><td>5</td><td style="text-align: center;">ARIZONA</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="odd"><td>4</td><td style="text-align: center;">LINCOLN</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr><tr class="even"><td>10</td><td style="text-align: center;">LUCENT</td><td style="text-align: right;">NULL</td><td style="text-align: right;">NULL</td></tr></tbody></table>

(6 row(s) affected)

Note on the `OUTER JOIN` that the inner joined records are returned first, followed by the right joined records, and then finally the left joined records (at least, that’s how my Microsoft SQL Server did it; this, of course, is without using any `ORDER BY` statement).

You can visit the Wikipedia article for more info [here](http://en.wikipedia.org/wiki/Sql_join "Wikipedia Entry for SQL Joins") (however, the entry is not graphical).

I’ve also created a cheat sheet that you can print out if needed. If you right click on the image below and select “Save Target As…”, you will download the full size image.

[![Image 8](https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_V2.png)](https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_orig.jpg "Click to enlarge")
