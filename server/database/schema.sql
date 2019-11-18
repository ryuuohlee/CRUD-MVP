DROP DATABASE IF EXISTS collection;
CREATE DATABASE collection;

\c collection;

CREATE TABLE FunkoPops (
id INT PRIMARY KEY,
name VARCHAR(20),
item_number INT PRIMARY KEY,
category VARCHAR(20),
collection VARCHAR(50),
release_date DATE,
price INT,
collection_value INT,
where_to_buy VARCHAR(30)
);

CREATE TABLE collection (
  id INT,
  item_number INT REFERENCES FunkoPops(item_number),
  purchase_price INT,

)