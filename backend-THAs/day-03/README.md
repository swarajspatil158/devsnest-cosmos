# Features of postgres:
	- It is object relational database.
	- It handles concurrency better than MySQL.
	- It implements Multiversion Concurrency Control (MVCC) without read locks.
	- It protects data integrity at transaction level.
	- Less vulnerable to data corruption.
	- Supports parallel query plan that can use multiple CPU/cores.
	- It can create partial indexes.
	- It can create indexes in non-blocking way.
	- Allows us to add our own datatypes, operators and index types.
	- Capable of writing large amounts of data more efficiently.
	- It supports table inheritance.

# Disadvantages of postgres:
	- Slow for read-heavy oprations compared to MySQL.
	- It forks a new process for each new client connection which allocates a non-trivial amount of memory (about 10 MB).
#
------------------------------------------------------------------------------------------

# PostgreSQL server and database objects:
	1. Server service
	2. Databases - container of objects like tables, views, functions, indexes.
	3. Tables - Stores actual data. Belongs to a database.
	4. Schema - Logical container of table and other objects.
	5. Tablespaces - place where data is stored physically
		|_ Provides 2 default tablespaces: 1) pg_default - for storing user data
						   2) pg_global - for storing system data
	6. Views - views are named queries stored in the database.
	7. Functions
	8. Operators
	9. Casts - to convert one datatype to another.
	10. Sequence - used to manage auto-increment columns in a table.

#
------------------------------------------------------------------------------------------

# Evaluation order in Queries:

	FROM --> WHERE --> SELECT --> ORDER BY

#
------------------------------------------------------------------------------------------

	IN 		- Returns true if a value matches any value in the list
	BETWEEN 	- Return true if a value is between a range of values ex. BETWEEN 3 AND 5
	LIKE		- Return true if a value matches a pattern ex. LIKE 'Aud%' means match string starting with 'Aud'. Notation (~~)
	ILIKE		- Same as LIKE but case insensitive pattern matching. Notation (~~*)
	OFFSET 		- Skip a number of rows before returning the resultset 
	LIMIT		- To constrain the number of rows returned by a query (not a SQl standard)
	FETCH		- Same as LIMIT and it a SQL standard. Syntax -> FETCH {FIRST|NEXT} row_cnt {ROW|ROWS} ONLY
	LEFT(s, n) 	- Extracts first n characters from s 
	ALL		- We can use the word ALL to allow >= or > or < or <= to act over a list ex. on result of select subquery 

	ORDER BY	- Sort thr column in ASC or DESC order
	GROUP BY	- Functions such as SUM and COUNT are applied to groups of items sharing values.ex."GROUP BY continent" ,the result is only one row for each different value of continent. All 			the other columns must be "aggregated" by one of SUM, COUNT etc.
	WHERE		- filters the rows before aggregation operation
	HAVING		- filters after the agregation

#
------------------------------------------------------------------------------------------
# Aggregation Commands:

	1. ROUND(val, len, fxn): 
		- val: value that is to be rounded
		- len: if +ve int then round val to number of decimal point specified as len
		       if -ve int then round val to left side of decimal point i.e -1 for rounding to nearest 10, -2 for rounding to nearest 100 and so on.
		- fxn: should be of int type, if given anything other than 0 then val will be truncated e.x ROUND(248.6759, 0, 1) = 248


#
------------------------------------------------------------------------------------------

# Some important psql commands:

	1. sudo -u <role name> psql 	--> switched to <role name> and starts psql command prompt
	2. \c dbname username 		--> switch connection to new database (dbname) under a user specified by <username>
	3. \l				--> list all available databases
	4. \dt				--> list all tables in current database
	5. \d table_name		--> describe a table
	6. \dn				--> list all Schemas of current database
	7. \df				--> list all functions of current database
	8. \dv				--> list all Views of current database
	9. \du				--> list all users and their assigned roles

	10. \s				--> to display command history
	11. \g				--> to execute previous command
	12. \i filename			--> to execute psql commands from a file 
	13. \timing			--> to turn ON/OFF query execution time:w
	14. \e				--> to write command in default editor(vim/nano)
	15. \q				--> to quit psql


#
------------------------------------------------------------------------------------------

# Indexes:
	It is a data structure --> B-Tree that speeds up the data retrieval on a table at the cost of additional writes and storage to maintain it.

	CREATE INDEX index_name ON table_name [USING method]
	(
	    column_name [ASC | DESC] [NULLS {FIRST | LAST }],
	    ...
	);

	- Method in above syntax can be "btree", "hash", "gist(Generalized Search Tree)", "gin"(Generalized INverted index), "brin(Block Range INdex)"
	- EXPLAIN keyword before a query will show if index is being used or not for the query
	- list all indexes of a table --> SELECT * FROm pf_index WHERE tablename = "table_name";
