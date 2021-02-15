USE facebook_company;

SHOW TABLES;
SHOW COLUMNS FROM employees;

INSERT INTo employees (name,email, gender, address, job_title, created_at)
 VALUES('john doe', 'johndoe@gmail.com', 'male', '23 white street', 'web developer', now()),
 ('mike edwards', 'mikeedwards@gmail.com', 'male', '34 new jersey street', 'doctor', now()),
 ('perri shakes', 'perrishakes@gmail.com', 'female', '44 north london street', 'footballer', now()),
 ('drayton jordan', 'draytonjordan@gmail.com', 'male', '23 new jersey street', 'engineer', now());
 
 SELECT * FROM employees;
 
 ALTER TABLE employees DROP address;
 
 ALTER TABLE employees ADD address VARCHAR(255) NULL;
 
 ALTER TABLE employees MODIFY GENDER VARCHAR(8);
 
 CREATE TABLE payrolls (
 id INT NOT NULL AUTO_INCREMENT,
 employee_id INT NOT NULL,
 amount DECIMAL (10.2) NOT NULL,
 created_at DATETIME,
 PRIMARY KEY (id),
 FOREIGN KEY (employee_id) REFERENCES employees (id)
 );
 
 INSERT INTO payrolls (employee_id, amount,created_at)
 VALUES (3, 100000.00, now()),
 (1, 100000.00, now()),
 (2, 100000.00, now());
 
 -- DATABASE FOR AMPLETOGS
-- TABLES TO BE CREATED
-- 1. Admin Table
-- 2. Categories Table
-- 3. Products Table
-- 4. Customers Table
-- 5. Registered Customers Table 
-- 6. Orders Table
-- 7. OrderItems Table



CREATE DATABASE AMPLETOGS;
SHOW DATABASES;
USE ampletogs;

-- 1. ADMIN TABLE
-- creating table
CREATE TABLE admin_users (
id INT NOT NULL auto_increment,
name VARCHAR(255) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(150) NOT NULL,
phonenumber VARCHAR(50) NOT NULL,
PRIMARY KEY(id)
);
-- inserting values into admin_users
INSERT INTO admin_users (name,email,password,phonenumber)
 VALUES('mark hilton', 'markhilton@gmail.com', 'transcorp', '08098765442'),
 ('henry scott', 'henryscott@gmail.com', 'tranquitliy', '08034567899'),
 ('spencer turdle', 'spancerturdle@gmail.com', 'spencerandturdle', '08064535477'),
 ('terrence howard', 'terrencehoward@gmail.com', 'parsleybob', '08023765677');
 -- view admin_users
 SELECT * FROM admin_users;

 
 -- 2. CATEGORIES TABLE
 -- creating table
 CREATE TABLE categories(
 id INT NOT NULL auto_increment,
 category_name VARCHAR(255) NOT NULL,
 PRIMARY KEY (id)
 );
 -- inserting values into categories
 INSERT INTO categories (category_name)
 VALUES('shoes'),
 ('colognes'),
 ('sunglasses'),
 ('clothing');
 
 SELECT * FROM categories;
 
 -- 3. PRODUCT TABLE
 -- creating table
    CREATE TABLE products(
 id INT NOT NULL AUTO_INCREMENT,
  admin_user_id INT NOT NULL,
 category_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
 description VARCHAR(250)NOT NULL,
 image blob,
  unit_price decimal(25,2) NOT NULL,
  stock_level INT NOT NULL,
 status ENUM ('in stock', 'out of stock', 'low stock'),
 PRIMARY KEY (id),
 FOREIGN KEY (admin_user_id) REFERENCES admin_users (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
  );
  -- inserting values into product
 
 INSERT INTO products (category_id,admin_user_id,name,description, image, unit_price, stock_level, status)
 VALUES(2,3,'MADDISSON JAMES SWEATSHIRT','Ellie Wilde', load_file('images/demo.jpg'), 1000.00, 25, 'in stock' ),
 (1,2,'BRAND ELLIE DIVAS TOP','lorem ipsum', load_file('images/product-1.jpg'), 3500.00, 40, 'in stock' ),
 (3,1,'ANGILI QUE WHITE TOP','dolor sit amet', load_file('images/demo.jpg'), 3500.00, 15, 'in stock' ),
 (4,4,'ELLAS BOUQ FAIRY TOP','Ellie fendi venche', load_file('images/product-2.jpg'), 3500.00, 05, 'in stock' );
 
 SELECT * FROM products;
 
 -- 4. CUSTOMERS TABLE
 -- creating table
 CREATE TABLE customers(
 id INT NOT NULL AUTO_INCREMENT,
 street_address VARCHAR(255) NOT NULL,
 city VARCHAR(255) NOT NULL, 
 state VARCHAR(255) NOT NULL, 
 zip_code mediumint NOT NULL,
 country VARCHAR(255) NOT NULL,
 phone_number VARCHAR(255) NOT NULL,
 PRIMARY KEY (id)
 );
-- inserting values into customers
 INSERT INTO customers(street_address, city, state, zip_code, country, phone_number)
 VALUES('old college street berger,lagos', 'ikeja', 'lagos', 102101, 'nigeria', '08054636282'),
 ('road cloase street', 'ibadan', 'oyo', 103101, 'nigeria', '08058576282'),
 ('ahmadihya street', 'ibadan', 'oyo', 102101, 'nigeria', '08047900282'),
 ('oluyole estate', 'ikeja', 'lagos', 102101, 'nigeria', '08033388848');
 
 SELECT * FROM customers;
 
 -- 5. REGISTERED CUSTOMERS TABLE
 -- creating table
 CREATE TABLE customers_addresses(
 id INT NOT NULL AUTO_INCREMENT,
 firstname VARCHAR(255) NOT NULL,
 lastname VARCHAR(255) NOT NULL,
 email VARCHAR(50) NOT NULL,
 password VARCHAR(50) NOT NULL,
 PRIMARY KEY (id),
  );
  -- inserting values into customers_addresses
 INSERT INTO customers_addresses(firstname,lastname,email,password)
 VALUES('adenike', 'adebayo', 'adenikeadebayo@gmail.com', 'olanike'),
 ('chioma', 'akpotha', 'chiomaakpotha@gmail.com', 'akpos'),
 ('sharon', 'abidomin', 'aasharon@gmail.com', 'sharon'),
 ('kolade', 'adeleke', 'adelekekolade@gmail.com', 'kolaadeleke');
 
 SELECT * FROM customers_addresses;
 
 -- 6. ORDER TABLE
 -- creating table
 CREATE TABLE orders(
 id INT NOT NULL auto_increment,
 customer_id INT NOT NULL,
 order_amount decimal(25,2) NOT NULL,
 order_time datetime,
 PRIMARY KEY (id),
 FOREIGN KEY (customer_id) REFERENCES customers (id)
 );
 -- inserting values into orders
INSERT INTO orders(customer_order_id, order_amount, order_time)
VALUES(4, 35000.00, now()),
(3, 35000.00, now()),
(2, 35000.00, now()),
(1, 35000.00, now());

SELECT * FROM orders;
-- 7. ORDER ITEM TABLE
-- creating table
CREATE TABLE order_items(
 id INT NOT NULL auto_increment,
order_id INT NOT NULL,
product_id INT NOT NULL,
quantity INT NOT NULL,
unit_prices decimal(25,2),
total_amount decimal(25,2),
 PRIMARY KEY (id),
 FOREIGN KEY (order_id) REFERENCES orders (id),
 FOREIGN KEY (product_id) REFERENCES product(id)
 );
 
-- inserting values into order_items
INSERT INTO order_items(order_id, product_id, quantity,unit_prices,total_amount)
VALUES(1,3, '5', 1000.00, 5000.00),
(3,2, '7', 1000.00, 7000.00),
(2,4, '4', 1500.00, 6000.00),
(4,1, '5', 5000.00, 25000.00);

SELECT * FROM order_items;