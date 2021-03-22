CREATE DATABASE e_commerce;
SHOW DATABASES;
USE e_commerce;

/*categories table*/
CREATE TABLE categories(
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(200) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO categories(category)
VALUES('Fresh Fruits'),
('Vegetables'),
('Tomatoes'),
('lettuce');

SELECT * FROM categories;

/*create admin table*/

CREATE TABLE admins(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
address VARCHAR(255) NOT NULL,
password VARCHAR(50) NOT NULL,
phone_number VARCHAR(200) NOT NULL,
date_created DATETIME,
PRIMARY KEY(id)
);


INSERT INTO admins(name, email, address, password, phone_number, date_created)
VALUES('Aneke Paul', 'neke@hotmail.com','america' ,'234typo', '0706099884', now()),
('Paul Panda', 'pai23@hotmail.com','canada', 'paulpp', '0706099894', now()),
('Kmei Sanders', 'pai23@hotmail.com','canada', 'lekmpp', '0706033384', now());

SELECT * FROM admins;

/*product_details database*/
CREATE TABLE products_details(
id INT NOT NULL AUTO_INCREMENT,
productCategory_id INT NOT NULL,
product_name VARCHAR(100) NOT NULL,
description TEXT NOT NULL,
images BLOB NOT NULL,
admin_id INT NOT NULL,
unit_price DECIMAL (9,2) NOT NULL,
stock_quantity INT NOT NULL,
stock_status VARCHAR(200) NOT NULL,
category_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(productCategory_id) REFERENCES categories (id),
FOREIGN KEY(admin_id) REFERENCES admins (id)
);

INSERT INTO products_details(productCategory_id,product_name,description,images,admin_id,unit_price,stock_quantity,stock_status,category_id)
VALUES(1,'Tomatoes','Fresh Tomatoes from the farm, 100% naturally packed, without chemicals','../html/asset/pepper.jpeg',1, 200.00,100,'in stock',1),
(2,'Vegetables','Fresh Veggies from the farm, 100% naturally packed, without chemicals','../html/asset/pepper.jpeg',1, 100.00,100,'in stock',2);

SELECT * FROM products_details;

/*customers data */
CREATE TABLE customers(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
date_created DATETIME
password VARCHAR(20),
PRIMARY KEY(id)
);

INSERT INTO customers(first_name, last_name, email, password,date_created)
VALUES('Funmi', 'Ayo', 'fumayo@gmail.com', 'aselefum',now()),
('Folami', 'Bukunmi', 'fbuks@gmail.com', 'buks234',now()),
('Funmi', 'Imola', 'imole@gmail.com', '2456adec',now()),
('Shade', 'Adu', 'shaun@gmail.com', 'adu2399',now());

SELECT * FROM customers;

/*customers_information*/

CREATE TABLE customers_information(
id INT NOT NULL AUTO_INCREMENT,
customers_id INT NOT NULL,
street_address VARCHAR(250) NOT NULL,
city VARCHAR(100) NOT NULL,
state VARCHAR(100) NOT NULL,
zip_code VARCHAR(100),
country VARCHAR(100) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(customers_id) REFERENCES customers(id)
);

INSERT INTO customers_information(customers_id, street_address, city, state, zip_code, country, phone_number)
VALUES(1,'All saints street', 'Atlanta city', 'Georgia', 0044, 'America', 3456789),
(2,'Gana street', 'Agege', 'lagos', 10111, 'Nigeria', 08090234578),
(3,'Santa Avenue', 'New York City', 'New York', 0045, 'America', 34567333);

SELECT * FROM  customers_information;


/*orders table*/

CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT,
customers_id VARCHAR(100) NOT NULL,
customers_orders INT NOT NULL,
amount DECIMAL(9,2) NOT NULL,
created_at DATETIME,
PRIMARY KEY(id),
FOREIGN KEY(customers_orders) REFERENCES customers(id)
);

INSERT INTO orders(customers_id, customers_orders, amount, created_at)
VALUES(1,1, 50000, now()),
(2, 2, 5000, now()),
(3, 3, 2500, now());

SELECT * FROM orders;


/*single_order database*/

CREATE TABLE single_orders(
orderItemId int not null auto_increment,
 OrderId int not null,
 productId int not null,
 quantity int not null,
 unitPrice decimal not null,
 totalAmount decimal(10, 2) not null,
 primary key(orderItemId),
 foreign key(OrderId) references orders(Id),
 foreign key(productId) references products_details(Id)
);

INSERT INTO single_ordersss(OrderId, productId, quantity,unitPrice, totalAmount)
values (1, 1, 3, 1000, 3000);

SELECT * FROM single_order;

