-- Created database for my e-commerce store
CREATE DATABASE e_commerce_store;
USE e_commerce_store;

-- created the products table
CREATE TABLE products (
	product_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(250) NOT NULL,
	image BLOB,
	unit_price INT NOT NULL,
    stock_level INT NOT NULL,
    status VARCHAR(20) NOT NULL,
	PRIMARY KEY (product_id)
);

-- Created the categories table
CREATE TABLE categories (
	category_name VARCHAR(20) NOT NULL,
	category_id INT,
	PRIMARY KEY (category_name),
	FOREIGN KEY (category_id) REFERENCES products (product_id) ON DELETE CASCADE
);

-- Created the customers table
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	email_address VARCHAR(40) NOT NULL,
	password VARCHAR(15) NOT NULL,
	PRIMARY KEY (id)
);

-- Created the customer addresses table
CREATE TABLE customer_addresses (
	customer_id INT,
	street_address VARCHAR(100) NOT NULL,
	city VARCHAR(20) NOT NULL,
	state VARCHAR(20) NOT NULL,
	zip_code INT,
	country VARCHAR(20) NOT NULL,
	phone_number BIGINT NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
);

-- Created the orders table
CREATE TABLE orders (
	order_id INT NOT NULL AUTO_INCREMENT,
	customer_orders INT,
	order_amount DECIMAL(7,2) NOT NULL,
	order_created_at DATETIME,
	PRIMARY KEY (order_id),
	FOREIGN KEY (customer_orders) REFERENCES customers (id) ON DELETE CASCADE
);
-- Auto increment count is set to start from 100
ALTER TABLE orders AUTO_INCREMENT = 100;

-- Created the order items table
CREATE TABLE order_items (
	order_id INT,
	product_id INT,
	quantity INT NOT NULL,
	unit_price INT NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
	FOREIGN KEY (order_id) REFERENCES orders (order_id) ON DELETE CASCADE,
	FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE
);

-- Created the admins table
CREATE TABLE admins (
	admin_id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(15) NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	PRIMARY KEY (admin_id),
	FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE
);

-- Inserted values into the products table
INSERT INTO products (name, description, image, unit_price, stock_level, status)
VALUES ('blue white collar tee shirt', 'This is a quality shirt you can put on all day', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\shirts.png'), '250', '70', 'in stock'),
('play station 5 console', 'awesome game console that guarantees amazing gaming experience', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\Capture3.jpg'), '700', '400', 'in stock'),
('PSG Nike Kit 20/21 Season', 'brand new quality jerseys for the new season', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\Capture2.jpg'), '50', '10', 'low stock'),
('Nike-Jordan Mercurial Boots', 'perfect soccer boots', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\Jordan-x-PSG-x-Nike-PhantomVSN.jpg'), '350', '0', 'out of stock');

-- Inserted values into the categories table
INSERT INTO categories (category_id, category_name)
VALUES (2, 'game console'),
(1, 'Mens-shirt'),
(4, 'soccer boots'),
(3, 'club jerseys');

-- Inserted values into the customers table
INSERT INTO customers (first_name, last_name, email_address, password)
VALUES ('precious', 'aienobe', 'presh@gmail.com', 'wordpass'),
('charity', 'asekharen', 'charnobe@gmail.com', 'password'),
('jennifer', 'aienobe', 'jenniferaienobe@gmail.com', 'jennyfresh');

-- Inserted values into the customer addresses table
INSERT INTO customer_addresses (customer_id, street_address, city, state, zip_code, country, phone_number)
VALUES (1, '36 utagban street', 'benin', 'edo', '300121', 'nigeria', '+2349057558198'),
(2, '23 bdpa ugbowo', 'benin', 'edo', '300240', 'nigeria', '+2347055582253'),
(3, '4 alumini drive', 'port harcourt', 'rivers', '500272', 'nigeria', '+2348137327259');

-- Inserted values into the orders table
INSERT INTO orders (customer_orders, order_amount, order_created_at)
VALUES (1, 3000.00, now()),
(2, 10000.00, now()),
(3, 4000.00, now());

-- Inserted values into the order items table
INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_amount) 
VALUES (100, 1, 33, 250, 8250.00),
(101, 2, 40, 700, 28000.00),
(102, 3, 230, 50, 11500.00);

-- Inserted values into the admins table
INSERT INTO admins (product_id, name, email, password, phone_number) 
VALUES (1, 'victor aienobe', 'viktornobe@gmail.com', 'smoke&mirrors', +2348108088144),
(2, 'benedit ejike', 'ben@gmail.com', 'thanos', +2349025725272),
(3, 'chidi okpala', 'chidi@gmail.com', 'drstrange', +2347026372527),
(4, 'simon alvin peters', 'alvinpeters@gmail.com', 'aryastark', +2348025745262);
