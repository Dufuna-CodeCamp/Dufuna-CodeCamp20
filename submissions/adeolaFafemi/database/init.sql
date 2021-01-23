/*****Create the database for the ecommerce  store****/
CREATE DATABASE under9k_store;

USE under9k_store;

SHOW TABLES
/*****Create the admin table and insert in the table for the database created above****/
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(40) NOT NULL,
	password VARCHAR(40) NOT NULL,
    phone_number VARCHAR (20) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id)
);

SHOW COLUMNS FROM admins

INSERT INTO admins (name, email,password,phone_number,created_at)
VALUES ('John Doe', 'johndoe@gmail.com', 'johndoe123','08077882827',now()),
('Jane Doe', 'janedoe@gmail.com', 'janedoe123','09077221954', now()),
('Adeola Fafemi', 'adeola123@gmail.com', 'adeola123','08022334579', now()),
('Pelumi Fafemi', 'pelumi123@gmail.com', 'pelumi123','08033605967',now());

SELECT * FROM admins

/*****Create the product categories table and insert in the table for the database created above****/
CREATE TABLE categories (
		id INT NOT NULL AUTO_INCREMENT,
		category_name VARCHAR(40) NOT NULL,
		created_at DATETIME,
        PRIMARY KEY (id)
    );


INSERT INTO categories (category_name, created_at)
VALUES ('Dress', now()),
('Bag', now()),
('Necklace', now()),
('Shirt', now());

SELECT * FROM categories

/*****Create the products table and insert in the table for the database created above****/

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    category_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(250) NOT NULL,
	image BLOB NOT NULL,
    unit_price DECIMAL (10,2) NOT NULL,
    stock_level INT NOT NULL,
    status enum('in stock','out of stock', 'low stock') NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins (id),
    FOREIGN KEY (category_id) REFERENCES categories (id)
);



INSERT INTO products (admin_id, category_id,name, description,image,unit_price, stock_level, status,created_at)
VALUES (3,1, 'Lace dress', 'Beautiful long  fitting lace dresses with a round neck', 'https://www.weddinginspirasi.com/2019/09/02/ricca-sposa-wedding-dresses-2020-barcelona-bridal-collection/', 5000.00, 20, 'in stock', now()),
(4,2, 'Louis vutton bag', 'Lovely  cream louis vutton bag', 'https://amzn.to/3bhPiy5', 7000.00,5, 'low stock', now()),
(2,3, 'Charm necklace', 'Women delicate Y shaped necklace','https://cdn.shopify.com/s/files/1/0282/3313/8275/products/Attractive-Hot-Womens-Chic-Y-Shaped-Necklaces-Circle-Lariat-Style-Chain-Torque-Exquisite-Jewelry-Necklace-Choker.jpg_640x640_f5729ecf-1c96-417f-b71c-8eb8d0ac89ba_640x.jpg?v=1595536280',1000.00,10, 'in stock', now());

SELECT * FROM products

/*****Create the customers table and insert in the table for the database created above****/
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
	email_address VARCHAR(40) NOT NULL,
	password VARCHAR(40) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id)
);

INSERT INTO customers (first_name, last_name, email_address,password,created_at)
VALUES ('John', 'Micheal', 'johnmichael@gmail.com', 'johnmicheal123',now()),
('Nicklaus','Michealson', 'nickmic@gmail.com', 'nickmic123', now()),
('Gbolahan', 'Fafemi', 'gbolahan123@gmail.com', 'gbolahan123', now()),
('Olamide', 'Fafemi', 'olamide123@gmail.com', 'olamide123',now());

SELECT * FROM customers

/*****Create the customer adress table and insert in the table for the database created above****/
CREATE TABLE customers_addresses (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
	street_address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
	state VARCHAR(50) NOT NULL,
    zip_code INT NULL,
    country VARCHAR (50) NOT NULL,
    phone_number VARCHAR (20) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id)
);

INSERT INTO customers_addresses (customer_id,street_address,city,state,zip_code,country, phone_number,created_at)
VALUES (1,'street A','Ibadan','Oyo','326541','Nigeria','09055782617', now()),
(2,'street B','Ibadan','Oyo','123456','Nigeria','09055782617', now()),
(3,'street C','Ibadan','Oyo','853152','Nigeria','09055782617', now()),
(4,'street D','Ibadan','Oyo','321456','Nigeria','09055782617', now());

SELECT * FROM customers_addresses
/*****Create the orders made table and insert in the table for the database created above****/
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
	amount DECIMAL(10,2) NOT NULL,
    order_date DATE NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id)
);

INSERT INTO orders (customer_id,amount,order_date, created_at)
VALUES(1,'5000.00', cast(now() As date), now()),
(2,'7000.00', cast(now() As date), now()),
(3,'1000.00', cast(now() As date), now());

SELECT * FROM orders

/*****Create the details for the order items table and insert in the table for the database created above****/
CREATE TABLE order_items (
	id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
	unit_price DECIMAL(10,2) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);

INSERT INTO order_items (order_id, product_id, quantity,unit_price,total_amount, created_at)
VALUES (1,1,1,5000.00,5000.00, now()),
(2,2,1,7000.00,7000.00, now()),
(3,3,1,5000.00,5000.00, now());

SELECT * FROM order_items