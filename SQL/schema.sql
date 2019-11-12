DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;
DROP TABLE IF EXISTS products;
CREATE TABLE products (
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
	price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL
);
