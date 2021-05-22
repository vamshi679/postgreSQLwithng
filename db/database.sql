CREATE DATABASE postgreswithng;

-- Replace (order1) with [desired-name] and for the columns as well

--creating table query
CREATE TABLE orders1(
    orderno INT,
    orderdate VARCHAR,
    name VARCHAR,
    address VARCHAR,
    phone numeric,
    totalvalue numeric
);
-- Inserting query data to table-columns
"INSERT INTO orders1 (
        orderno,
        orderdate,
        name,
        address,
        phone,
        totalvalue
    )
VALUES ($1, $2, $3, $4, $5, $6) ", [orderno, orderdate, name, address, phone, totalvalue];

-- Update query
"UPDATE orders1 SET (orderdate, name, address, phone, totalvalue) = ($1,$2,$3,$4,$5) 
WHERE orderno = $6",[orderdate, name, address, phone, totalvalue,id]


-- Reading data from tables
SELECT * FROM orders1

-- Deleting query 
"DELETE FROM orders1 WHERE orderno = $1",[id]