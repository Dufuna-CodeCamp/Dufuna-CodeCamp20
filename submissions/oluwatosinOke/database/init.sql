-- Create database
CREATE DATABASE my_favorite_online_store;
USE my_favorite_online_store;

-- Create table named categories
CREATE TABLE categories (
id INT NOT NULL AUTO_INCREMENT,
category_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

-- Insert values into table named categories
INSERT INTO categories (category_name)
VALUES ('Phones'),
('Phone Accessories'),
('Computers'),
('Computer Accessories');

-- Create table named admins
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
NAME VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL,
PASSWORD VARCHAR(30) NOT NULL,
phone_number VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

-- INSERT values into Table named admins
INSERT INTO admins (NAME, email, PASSWORD, phone_number)
VALUES ('Tosin Oke', 'tosinoke@gmail.com', 'codecCamp', '12345678'),
('Barrack Obama', 'barrackobama@gmail.com', 'success', '12345679');


-- Create table named products
CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
description VARCHAR(250) NOT NULL,
image BLOB,
category_id INT NOT NULL,
admin_id INT NOT NULL,
unit_price DECIMAL(6.0) NOT NULL,
stock_level INT NOT NULL,
STATUS VARCHAR(30) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES categories (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);

-- Insert values into table named products
INSERT INTO products (product_name, description, image, category_id, admin_id, unit_price, stock_level, STATUS)
VALUES ('Galaxy A20', 'This new samsung has a 6.4" LCD display, 32GB Storage,4GB RAM, 13MP front and rear Camera', '../html/images/samsung-galaxy-a20.jpg', '1', '2', '75000', '24', 'IN STOCK'),
('iphone-11', 'Powered by 3110 mAh non-removable battery. Runs iOS 13 and equipped with A13 Bionic chip. 4GB of RAM + 64GB internal storage; 4GB of RAM + 128GB internal storage; 4GB of RAM + 256GB internal storage.', '../html/images/iPhone-11.jpg', '1', '1', '120000', '2', 'LOW STOCK'),
('Nokia 6.2', 'Processor: Qualcomm SDM636 Snapdragon 636 Octa-core 1.8 GHz Kryo 260 · RAM: 3 GB, 4 GB · Storage: 32 GB, 64 GB, 128 GB · Display: 6.3 inches.', '../html/images//Nokia-6.2.jpg', '1', '2', '90000', '0', 'OUT OF STOCK'),
('Infinix Zero 8', 'TOS: Android 10 with XOS 7. Display: 6.85" full HD+ with 90Hz refresh rate and 180Hz touch sampling rate. CPU: Octa-core MediaTek Helio G90T SoC. RAM: 8 GB. Internal storage: 128 GB. Battery: 4,500 mAh', '../html/images/Infinix-Zero-8.jpg', '1', '2', '10000', '14', 'IN STOCK');

-- Create table named customers
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
email_address VARCHAR(30) NOT NULL,
PASSWORD VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

-- INSERT values into Table named customers
INSERT INTO customers (first_name, last_name, email_address, PASSWORD)
VALUES ('Aliko', 'Dangote', 'alikodangote@gmail.com', 'spagetti'),
('Meghan', 'Markle', 'merganmarkle@gmail.comn', 'princess'),
('Kim', 'Kardasian', 'kimk@gmail.comn', 'northwest'),
('David', 'Adeleke','davidomusic@gmail.com', 'goodtime');


-- CREATE TABLE named customers_address
CREATE TABLE customers_address (
id INT NOT NULL AUTO_INCREMENT,
customer_id INT NOT NULL,
street_address VARCHAR(150) NOT NULL,
city VARCHAR(30) NOT NULL,
state VARCHAR(30) NOT NULL,
zip_code INT,
country VARCHAR(30) NOT NULL,
phone_number VARCHAR(30) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (customer_id) REFERENCES customers (id)
);

-- INSERT values into Table named customers_address
INSERT INTO customers_address (customer_id, street_address, city , state, zip_code, country, phone_number)
VALUES ('1', 'Dangote close', 'Ikeja', 'Lagos', '2020', 'Nigeria', '2347676'),
('2', '13th Street. 47 W 13th Street', 'New York', 'NY', '10011', 'USA', '08132420'),
('3', '20 Cooper Square', 'NEW YORK', 'NY', '10003', 'USA', '012983772'),
('4', 'plot 302 Asokoro Extention', 'Abuja', 'FCT', '2090', 'Nigeria', '070373626');


-- CREATE TABLE named orders
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
customer_orders INT NOT NULL,
order_amount INT NOT NULL,
ordercreated_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (customer_orders) REFERENCES customers (id)
);

-- INSERT values into Table named orders
INSERT INTO orders (customer_orders, order_amount, ordercreated_at)
VALUES ('1', '400000', NOW()),
('2', '90000', NOW()),
('3', '240000', NOW()),
('4', '750000', NOW());


-- CREATE TABLE named other_items
CREATE TABLE other_items(
id INT NOT NULL AUTO_INCREMENT,
order_id INT NOT NULL,
product_id INT NOT NULL,
quantity INT NOT NULL,
unit_price INT NOT NULL,
total_amount INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (order_id) REFERENCES orders (id),
FOREIGN KEY (product_id) REFERENCES products (id)
);

-- INSERT values into Table named other_items
INSERT INTO other_items (order_id, product_id, quantity, unit_price, total_amount)
VALUES ('1', '4', '4', '100000', '400000'),
('2', '3', '1', '90000', '90000'),
('3', '2', '2', '120000', '240000'),
('4', '1', '10', '75000', '750000');

