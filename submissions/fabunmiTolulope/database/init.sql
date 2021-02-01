CREATE DATABASE greenprint_integrated_services;
USE greenprint_integrated_services;


-- ADMINISTRATORS TABLE
CREATE TABLE admins (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email_address VARCHAR(100) NOT NULL,
password VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id)
); 

INSERT INTO admins (name, email_address, password, phone_number, created_at)
VALUES ('Tolulope Eniola', 'ogunronbitolulope@gmail.com', 'Toluenny24', '07063740223', now()),
('Victor Tolulope', 'victorfabunmi07@gmail.com', 'victor07', '07038404291', now()),
('Lucas Araoluwa', 'lucastolulope@gmail.com', 'Lucas27', '07012345678', now());



-- PRODUCT CATEGORIES TABLE
CREATE TABLE categories(
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO categories (category)
VALUES ('giant banana'),
('plantain'),
('small banana');



-- PRODUCTS TABLE
CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
description VARCHAR(250) NOT NULL,
image BLOB NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
stock_level INT NOT NULL,
status ENUM('in stock', 'out of stock', 'low stock') NOT NULL,
category_id INT NOT NULL,
admin_id INT NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES categories (id),
FOREIGN KEY (admin_id) REFERENCES admins (id)
);


INSERT INTO products (name, description, image, unit_price, stock_level, status, category_id, admin_id, created_at)
VALUES ('organic cavendish banana', 'Organic giant Cavendish Banana sets the standards in terms of taste and nutrient yield. They are rich in Vitamin C, B6, minerals and dietary fibres. They are a rich energy source.', "C:\Users\user\Documents\GitHub\Dufuna-CodeCamp20\submissions\fabunmiTolulope\html\images\cavendish.jpg", 10000.00, 35, 'in stock', 1, 2, now()),
('plantain (cooking banana)', 'Plantain resemble banana but are longer in length, have a thicker skin, and contain more starch. They are usually cooked and not eaten raw unless they are very ripe.', "C:\Users\user\Documents\GitHub\Dufuna-CodeCamp20\submissions\fabunmiTolulope\html\images\plantain.jpg", 10000.00, 30, 'in stock', 2, 1, now()),
('Gros michel banana', 'Gros Michel, often known as "Big Mike", is an excellent export produce; its thick peel makes it resilient to bruising during transport and the dense bunches that it grows in make it easy to ship.', "C:\Users\user\Documents\GitHub\Dufuna-CodeCamp20\submissions\fabunmiTolulope\html\images\gros-michel.jpg", 10500.00, 3, 'out of stock', 3, 3, now()),
('lady finger banana', 'Lady Finger bananas (also known as sugar bananas, fig bananas, or date bananas) are diploid cultivars of Musa acuminata. They are small, thin skinned, and sweet.', "C:\Users\user\Documents\GitHub\Dufuna-CodeCamp20\submissions\fabunmiTolulope\html\images\lady-finger.jpg", 8500.00, 10, 'low stock', 3, 2, now());



-- CUSTOMERS TABLE
CREATE TABLE customers (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email_address VARCHAR(100) NOT NULL,
password VARCHAR(50) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id)
);

INSERT INTO customers (first_name, last_name, email_address, password, created_at)
VALUES ('Brad', 'Gibson', 'brad.gibson@example.com', 'firewall', now()),
('James', 'Perez', 'jamesperez01@hotmail.com', 'JamesP', now()),
('Lucy', 'Akpan', 'lucyakpan@ymail.com', 'angel123', now()),
('Jade', 'Campbell', 'jadecampbell@gmail.com', 'jade123', now()),
('Mark', 'Ben', 'markben@yahoomail.com', 'markben10', now());



-- CUSTOMERS ADDRESSES TABLE
CREATE TABLE customers_addresses (
id INT NOT NULL AUTO_INCREMENT,
customers_id INT NOT NULL,
street_address VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
zipcode INT,
phone_number VARCHAR(20) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (customers_id) REFERENCES customers (id)
);

INSERT INTO customers_addresses (customers_id, street_address, city, state, zipcode, phone_number, created_at)
VALUES (1, '9278 new road', 'kilcoole', 'waterford', 93027, '011-9627516', now()),
(2, '12 main street', 'conway', 'arkansas', NULL, '630-8423408', now()),
(3, '45 charles street', 'breadfruit', 'Okhlahoma', NULL, '405-2091623', now()),
(4, '1 West Primrose Drive', 'Bakersfield', 'california', 93309, '081-4540666', now()),
(5, '7195 Olive Avenue', 'South San Francisco', 'Texas', 94080, '443-2772996', now());



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

INSERT INTO orders (customers_id, order_amount, order_date, created_at)
VALUES (3, 17000.00, cast(now() AS DATE), now()),
(1, 21000.00, cast(now() AS DATE), now()),
(5, 30000.00, cast(now() AS DATE), now()),
(4, 40000.00, cast(now() AS DATE), now()),
(2, 20000.00, cast(now() AS DATE), now());



-- ORDER ITEMS
CREATE TABLE order_items (
id INT NOT NULL AUTO_INCREMENT,
orders_id INT NOT NULL,
products_id INT NOT NULL,
quantity INT NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
total_amount DECIMAL(10,2) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (orders_id) REFERENCES orders (id),
FOREIGN KEY (products_id) REFERENCES products (id)
);

INSERT INTO order_items (orders_id, products_id, quantity, unit_price, total_amount, created_at)
VALUES (1, 4, 2, 8500.00, 17000.00, now()),
(2, 3, 2, 10500.00, 21000.00, now()),
(3, 1, 3, 10000.00, 30000.00, now()),
(4, 2, 4, 10000.00, 40000.00, now()),
(5, 2, 2, 10000.00, 20000.00, now());

