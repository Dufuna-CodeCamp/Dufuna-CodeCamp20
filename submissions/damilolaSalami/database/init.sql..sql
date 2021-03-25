CREATE DATABASE buyme_ng;
USE buyme_ng;
SHOW TABLES;

/*Categories table*/
CREATE TABLE categories(
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

show columns from categories;
INSERT INTO categories(category)
VALUES('Home Appliances'),
('Kitchen Utensils'),
('Kitchen Furniture'),
('Kitchen Accessories');

SELECT * FROM categories;

/*Admin table*/
CREATE TABLE admins(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL, 
email VARCHAR(100) NOT NULL,
password VARCHAR(15) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
date_created DATETIME,
PRIMARY KEY(id)
);

INSERT INTO admins(name, email, password, phone_number, date_created)
VALUES('Orhie Silas', 'Osilas@gmail.com', 'orhie', '08089034123', now()),
('Gospel Ese', 'esegospel@gmail.com', 'Gospel', '08045642456', now()),
('Princess Awero', 'Awerry@gmail.com', 'Princess', '08093456782', now());

SELECT * FROM admins;

/*Product Table*/
CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
description TEXT NOT NULL,
image BLOB,
category_id INT NOT NULL,
admin_id INT NOT NULL,
unit_price DECIMAL(7,2) NOT NULL,
stock_level INT NOT NULL,
status VARCHAR(50) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES categories (id),
FOREIGN KEY (admin_id) REFERENCES admins(id)
);

INSERT INTO products (product_name, description, image, category_id, admin_id, unit_price, stock_level, status)
VALUES ('Master Chef Bread Toaster', 'Portable two snadwich slot', '../html/images/masterchef_toaster.jpg', 1, 2, 4000, 40, 'IN STOCK'),
('4 Face Sandwich Toaster', '4 slice sandwich toaster with cold touch housing and durable non-stick', '../html/images/4face_sandwich_toaster.jpg', 1, 1, 10000, 4, 'LOW STOCK'),
('Prestige Pop Up Toaster', '2 slice toaster with wide mouth slots for easy access', '../html/images/popuptoast.jpg', 1, 2, 15000, 0, 'OUT OF STOCK'),
('Sandwich Grill Toaster', 'Opeanable 4 sandwich grill plate', '../html/images/grilltoaster.jpg', 1, 2, 20000, 2, 'LOW STOCK');

/*Customers table*/
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL, 
last_name VARCHAR(50) NOT NULL, 
email VARCHAR(50) NOT NULL,
password VARCHAR(20) NOT NULL, 
created_at DATETIME,
PRIMARY KEY (id)
);

INSERT INTO customers (first_name, last_name, email, password, created_at)
VALUES ('Linda', 'Alo', 'alolinda@gmail.com', 'alolinda', now()),
('Shola', 'Yola', 'yolashola@gmail.com', 'yolashola', now()),
('Roly', 'Tella', 'tellarolly@gmail.com', 'rollytolly', now()),
('Adeyemi', 'Adefemi', 'femiyemi@gmail.com', 'yemifemi', now());

/*Customers addresses table*/
CREATE TABLE customers_address (
id INT NOT NULL AUTO_INCREMENT,
customer_id INT NOT NULL,
street_address VARCHAR(200) NOT NULL,
city VARCHAR(20) NOT NULL,
state VARCHAR(50) NOT NULL,
zip_code INT,
country VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL, 
PRIMARY KEY (id),
FOREIGN KEY (customer_id) REFERENCES customers(id)
);

INSERT INTO customers_address (customer_id, street_address, city, state, zip_code, country, phone_number)
VALUES (1, 'Jubrila Street', 'Idumota', 'Lagos', 1234, 'Niamey', 09078543213),
(2, 'Kenya Close', 'Ijesha', 'Kano', 569, 'Niger', 08097543423),
(3, 'Damilola Street', 'Dumbo', 'Toronto', 8542, 'Canada', 08065432312);

/*Table for orders*/
CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT,
customers_id VARCHAR(150) NOT NULL,
customers_orders INT NOT NULL,
order_amount DECIMAL(9,2) NOT NULL,
ordercreated_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (customers_orders) REFERENCES customers(id)
);

INSERT INTO orders (customers_id, customers_orders, order_amount, ordercreated_at)
VALUES (1, 1, 4000, now()),
(2, 2, 10000, now()),
(3, 3, 150000, now()),
(4, 4, 20000, now());


CREATE TABLE other_items(
id INT NOT NULL AUTO_INCREMENT,
order_id INT NOT NULL,
product_id INT NOT NULL,
quantity INT NOT NULL,
unit_price DECIMAL(9,2) NOT NULL,
total_amount DECIMAL(10,2) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (order_id) REFERENCES orders (id),
FOREIGN KEY (product_id) REFERENCES products (id)
);

INSERT INTO other_items (order_id, product_id, quantity, unit_price, total_amount)
VALUES (1, 1, 5, 4000, 20000),
(2, 2, 10, 10000, 100000),
(3, 3, 15, 15000, 225000),
(4, 4, 3, 20000, 60000);



