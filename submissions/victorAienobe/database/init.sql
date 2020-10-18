-- Created database for my e-commerce store
CREATE DATABASE e_commerce_store;
USE e_commerce_store;

-- created the products table
CREATE TABLE products (
	product_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(250) NOT NULL,
	image BLOB,
    category_id INT,
    admin_id INT,
	unit_price INT NOT NULL,
    stock_level INT NOT NULL,
    status VARCHAR(20) NOT NULL,
	PRIMARY KEY (product_id),
    FOREIGN KEY (category_id) REFERENCES categories (category_id) ON DELETE CASCADE,
    FOREIGN KEY (admin_id) REFERENCES admins (admin_id) ON DELETE CASCADE
);

-- Created the categories table
CREATE TABLE categories (
	category_id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(20) NOT NULL,
	PRIMARY KEY (category_id)
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
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(15) NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	PRIMARY KEY (admin_id)
);
drop table admins;
select * from admin;
-- Inserted values into the products table
INSERT INTO products (name, description, image, category_id, admin_id, unit_price, stock_level, status)
VALUES ('blue white collar tee shirt', 'This is a quality shirt you can put on all day', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\shirts.png'), 2, 1, '250', '70', 'in stock'),
('play station 5 console', 'awesome game console that guarantees amazing gaming experience', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\Capture3.jpg'), 1, 2, '700', '400', 'in stock'),
('PSG Nike Kit 20/21 Season', 'brand new quality jerseys for the new season', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\Capture2.jpg'), 4, 3, '50', '10', 'low stock'),
('Nike-Jordan Mercurial Boots', 'perfect soccer boots', LOAD_FILE('C:\Users\Aienobe\Desktop\Dufuna-CodeCamp20\submissions\victorAienobe\html\images\Jordan-x-PSG-x-Nike-PhantomVSN.jpg'), 3, 4, '350', '0', 'out of stock');

-- Inserted values into the categories table
INSERT INTO categories (category_name)
VALUES ('game console'),
('Mens-shirt'),
('soccer boots'),
('club jerseys');

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
INSERT INTO admins (name, email, password, phone_number) 
VALUES ('victor aienobe', 'viktornobe@gmail.com', 'smoke&mirrors', +2348108088144),
('benedit ejike', 'ben@gmail.com', 'thanos', +2349025725272),
('chidi okpala', 'chidi@gmail.com', 'drstrange', +2347026372527),
('simon alvin peters', 'alvinpeters@gmail.com', 'aryastark', +2348025745262);
