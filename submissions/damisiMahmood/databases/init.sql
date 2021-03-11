CREATE DATABASE idamsels_shop;
USE idamsels_shop;


-- USER ADMINS TABLE
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email_address VARCHAR(100) NOT NULL,
password VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id)
); 

-- PRODUCT CATEGORIES TABLE
CREATE TABLE categories (
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- PRODUCTS TABLE
CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
description VARCHAR(250) NOT NULL,
image BLOB NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
category_id INT NOT NULL,
admin_id INT NOT NULL,
stock_level INT NOT NULL,
status ENUM('in stock', 'out of stock', 'low stock') NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES categories (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);

-- CUSTOMERS TABLE
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email_address VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id)
);

-- CUSTOMERS CONTACT ADDRESSES TABLE
CREATE TABLE customers_addresses (
id INT NOT NULL AUTO_INCREMENT,
customers_id INT NOT NULL,
street_address VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL,
state VARCHAR(50) NOT NULL,
zipcode VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (customers_id) REFERENCES customers (id)
);

-- ORDERS TABLE
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
customers_id INT NOT NULL,
order_amount DECIMAL(10,2) NOT NULL,
order_date DATE,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (customers_id) REFERENCES customers (id)
);

-- ORDER ITEMS
CREATE TABLE order_items (
id INT NOT NULL AUTO_INCREMENT,
orders_id INT NOT NULL,
products_id INT NOT NULL,
quantity INT NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
total_amount DECIMAL(10,2) NOT NULL,

PRIMARY KEY (id),
FOREIGN KEY (orders_id) REFERENCES orders (id),
FOREIGN KEY (products_id) REFERENCES products (id)
);

