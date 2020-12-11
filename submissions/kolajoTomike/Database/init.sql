-- DATABSE FOR THE BERRY CAFE
-- TABLES TO BE CREATED
-- ADMIN TABLE,
-- PRODUCT TABLE, 
-- CUSTOMER TABLE,
-- REGISTER TABLES,
-- CATEGORY,
-- ORDER TABLE, 
-- ORDER-ITEMS

CREATE DATABASE THEBERRY_ICECREAM;
USE THEBERRY_ICECREAM;

-- 1. creating the admn table
CREATE TABLE admins(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(10) NOT NULL,
phone_number VARCHAR(15) NOT NULL,
PRIMARY KEY(id)
);


-- inserting values in the admins table
INSERT INTO admins(name, email, password, phone_number)
VALUES('JOY CYNTHIA', 'joycynthia@gmail.com','joy345', '0908765442'),
('KOLAJO TOMIKE', 'kolajotomike@gmail.com', 'tomike2014', '0906754321'),
('AMOO CHRISTIANAH', 'amoochristianah454@gmail.com', 'amoo123', '0802262078'),
('KOLAJO DEBOWALE', 'kolajoadebowale@gmail.com', 'debo223', '0806759748'),
('KOLAJO KOLAPO', 'kolajokolapo@gmail.com', 'kolapo4523', '0806975468');


-- 2. creating categories TABLE

CREATE TABLE categories(
category_id INT NOT NULL AUTO_INCREMENT,
category_name VARCHAR(50) NOT NULL,
PRIMARY KEY(category_id)
);


--  inserting values into categories table

 INSERT INTO categories(category_name)
 VALUES('STRAWBERRY FLAVOUR'),
 ('CHOCOLATE FLAVOUR'),
 ('VANILLA FLAVOUR'),
 ('CREAMY FLAVOUR'),
 ('POWERED FLAVOUR');

 
 -- 3. creating the Product table
 CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
 admin_id INT NOT NULL,
 category_id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
 description_name VARCHAR(250) NOT NULL,
 image BLOB,
 unit_price DECIMAL(8,2) NOT NULL,
 stock_level INT NOT NULL,
 status ENUM('in stock', 'out of stock',  'low stock'),
 PRIMARY KEY(id),
foreign key(admin_id) references admins(id),
foreign key(category_id) references categories(category_id)
 );


 

-- inserting values into the  product table

INSERT INTO products (admin_id,category_id,name, description_name, image, unit_price, stock_level, status)
 VALUES (1,3 ,'CHOCOLATE', 'ice_cream flavour',load_file('img/hand.png'), 300.00, 20, 'in stock'),
  (2 ,5 ,'STRAWBERRY', 'strawberry flavour',load_file('img/ice4.png'), 100.00, 50, 'low stock'),
 ( 4, 2,'MATCHA BANANA ICE-CREAM', 'BANANA ICE-CREAM',load_file('img/ice3.png'), 200.00, 40, 'out of stock'),
 ( 5,1, 'COCONUT MILK', 'coconut milk flavour',load_file('img/UCE2.png'), 500.00, 60, 'in stock'),
  ( 3,4,'ICE-CREAM SANDWICHES', 'Sandwiches flavour',load_file('img/ice4.png'), 3000.00, 60, 'in stock');

-- 4 Registered customer
CREATE TABLE customers(
customer_id int not null auto_increment,
first_name varchar(25) not null,
last_name varchar(25) not null,
email varchar(30) not null,
password varchar(25) not null,
primary key (customer_id)
);



-- insert values into Customers
INSERT INTO customers( first_name, last_name, email, password)
VALUES ('jerry' , 'hogan', 'jerryhogan@gmail.com', 'jerry345'),
('bulman', 'gregman', 'bulmangregman@gmail.com', 'bu1mangreg'),
('georgina',  'mark' , 'georginamark@gmail.com' , 'markg123'),
('Nathaniel', 'Beckham', 'nathanielbeckham@gmail.com', 'nathbeck2'),
('Paul' , 'washington', 'Paulwashington@gmail.com', 'Paul345');

-- 5 CREATE CUSTOMER_CONTACT
CREATE TABLE customer_contacts(
contact_id INT NOT NULL AUTO_INCREMENT,
customer_id INT  NULL,
street VARCHAR(100) NOT NULL,
city VARCHAR(40) NOT NULL,
state VARCHAR(30) NOT NULL,
zip_code SMALLINT,
country VARCHAR(30) NOT NULL,
phone VARCHAR(20) NOT NULL,
primary key(contact_id),
FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);
-- inserting records into customer_contact

INSERT INTO customer_contacts (customer_id,street,city,state,zip_code, country,phone)
VALUES(1, 'oxford street','dugbe', 'lagos', 23456, 'united kingdom','08106827158'),
(2, 'Bricklane street','challange', 'Abuja', 6456, 'Nigeria','07030936970'),
(3, 'carnaby street','bodija', 'Oyo', 6458, 'America','08146412563'),
(4, 'Piccadilly','Akobo', 'Imo', 2345, 'canada','08162125334'),
(5, 'georgina street','moniya', 'Kaaduna', 7655, 'south Africa','09056054879');


-- 6 create Table order

CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT,
customers_order_id INT  NOT NULL,
Order_amount decimal (25,2) NOT NULL,
order_time datetime,
primary key(id),
foreign key(customers_order_id) references customers(customer_id)

);

-- inserting values into orders
INSERT INTO orders (customers_order_id, Order_amount, order_time)
VALUES( 1, 500000.00, now()),
( 2, 20000.00, now()),
( 4, 1000000.00, now()),
( 5, 7500000.00, now()),
( 3, 3500000.00, now());

CREATE TABLE order_items(
id INT NOT NULL AUTO_INCREMENT,
orders_id INT  NOT NULL,
product_id INT NOT NULL,
quantity INT NOT NULL,
unit_prices DECIMAL (25,2)NOT NULL,
total_amount DECIMAL(25,2) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(orders_id) REFERENCES orders(id),
FOREIGN KEY(product_id) REFERENCES products(id)
);


INSERT INTO order_items(product_id,orders_id, quantity, unit_prices, total_amount)
VALUES(1, 3, 5, 50000.00, 20000.00),
(2, 1, 3, 30000.00, 150000.00),
(4, 5, 1, 750000.00, 600000.00),
(2, 4, 3, 200000.00, 350000.00),
(4, 1, 5, 450000.00, 100000.00);




