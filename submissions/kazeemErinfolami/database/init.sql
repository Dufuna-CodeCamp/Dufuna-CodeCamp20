/*........DATABASE.......*/

/*ECOMMERCE*/
CREATE DATABASE e_commerce;
SHOW DATABASES;
USE e_commerce;

/*.......TABLES......*/

/*ADMINS...*/
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(200) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(50) NOT NULL,
	phone_number VARCHAR(20) NOT NULL,
	date_created DATETIME,
	PRIMARY KEY (id)
);

INSERT INTO admins (name, email, password, phone_number, date_created)
VALUES ("Peter Stone", "peterstone@gmail.com", "234567y", 09033756289, now()),
("Roland Gold", "rolandgold@gmail.com", "8839wkwui", 08082541752, now()),
("Paul Tunde", "tundepaul@yahoo.com", "927267tet", 09012376598, now()),
("Mary Rose", "maryrose@gmail.com", "kdidodhdh737", 09076981632, now()),
("Iyanu Zuma", "iyanuzuma@gmail.com", "hhht67w87", 09078192690, now());

SELECT * FROM admins;


/*CATEGORIES....*/
CREATE TABLE categories (
	id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(200) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO categories (category)
VALUES ("Shoes"),
("Men Collection"),
("Women Collection"),
("Smart Home"),
("Smart Phones"),
("Computers"),
("Electronics"),
("Cars"),
("Vegetable");

SELECT * FROM categories;


/*CUSTOMERS...*/
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
	email VARCHAR(150) NOT NULL,
	password VARCHAR(40) NOT NULL,
	date_created DATETIME,
	PRIMARY KEY (id)
);

INSERT INTO customers (first_name, last_name, email, password, date_created)
VALUES ("Tunde", "Ibrahim", "tundeibrahim@gmail.com", "hhsgsty78", now()),
("Kunle", "Fold", "kunlefold@gmail.com", "8839wkwui", now()),
("Page", "Lolade","loladepage@yahoo.com", "927267tet", now()),
("Mary", "Ebube","maryebube@gmail.com", "kdidodhdh737", now()),
("Joy", "Musa", "joymusa@gmail.com", "hhht67w87", now()),
("Akim", "Folarin", "folarinakim@gmail.com", "8839wkwui", now()),
("Muma", "Tonna","tonnamuma@yahoo.com", "927267tet", now()),
("Edet", "Charles","charlesedet@gmail.com", "kdidodhdh737", now());

SELECT * FROM customers;


/*CUSTOMER CONTACTS*/
CREATE TABLE customers_contacts (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
	street_address VARCHAR(100) NOT NULL,
    city VARCHAR(30) NOT NULL,
	state VARCHAR(15) NOT NULL,
	zipcode VARCHAR(40),
	country VARCHAR(15) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

INSERT INTO customers_contacts (customer_id, street_address, city, state, zipcode, country, phone_number)
VALUES (1, "House 4 Fishland Avenue", "Lagos", "Lagos", 90282, "Nigeria", 08078726353),
(2, "Home Land", "CA", "California", 72829, "USA", 896765443),
(3, "Brown Street", "Munich", "Munich", 78265, "Germany", 07087826756),
(4, "Street 3A Running Bones", "Yaba", "Ibadun", "", "Nigeria", 09189367252),
(5, "President Villa Estate", "Ikeja", "Lagos", "", "Nigeria", 09089276739),
(6, "No 90 China Town", "Ching-Shin", "Seoul", 728282, "Korea", 9975545422),
(7, "Ikaja VRA", "OSA", "Kogi", "", "Nigeria", 07078783902),
(8, "Ikota Lekki phase1", "Lekki", "Lagos", 892786, "Nigeria", 09082618725);

SELECT * FROM customers_contacts;


/*ORDERS...*/
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    time_of_order DATETIME NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

INSERT INTO orders (customer_id, time_of_order)
VALUE (4, now()),
(8, now()),
(2, now()),
(6, now()),
(7, now()),
(1, now()),
(5, now()),
(3, now());

SELECT * FROM orders;


/*PRODUCTS...*/
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
	image LONGBLOB NOT NULL,
    unit_price DECIMAL(9, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    stock_level INT NOT NULL,
    category_id INT NOT NULL,
    admin_id INT NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY(category_id) REFERENCES categories(id),
    FOREIGN KEY (admin_id) REFERENCES admins(id)
);

ALTER TABLE products MODIFY stock_level VARCHAR(150) NOT NULL;

INSERT INTO products (product_name, description, image ,unit_price ,stock_quantity ,stock_level ,category_id ,admin_id)
VALUE ("Brogues", "Shop a large selection of Loafers, Formal Shoes, Boots, Sneakers & more.", "../html/images/brogues_shoes.jpg", 650.00, 6, 'out of stock', 1, 4 ),
("CK", "Shop a large selection of wrist watches & more.", "../html/images/men acc.jpg", 900.00, 1, 'in stock', 2, 3 ),
("BMW", "Be classy", "../html/images/cars.jpg", 650.00, 6, 'in stock', 8, 2 ),
("MacBook Pro", "feel free and code.", "../html/images/laptop.jpg", 190.00, 3, 'in stock', 6, 5 ),
("Smart Home Alerm", "make you home to the future", "../html/images/smart_home.jpg", 490.00, 6, 'out of stock', 4, 1 ),
("Carrots", "make every one salivate", "../html/images/vegetables.jpg", 50.00, 6, 'in of stock', 9, 1 ),
("LV Bag", "World of fashion", "../html/images/women acc.jpg", 927.00, 9, 'in stock', 3, 2 ),
("Fan", "Be Free", "../html/images/smart_home.jpg", 620.00, 6, 'out of stock', 7, 3 ),
("G wagon", "Live it love it.", "../html/images/cars.jpg", 190.00, 3, 'in stock', 8, 4 ),
("Nokia", "selection of Loafers, Formal Shoes, Boots, Sneakers & more", "../html/images/brogues_shoes.jpg", 490.00, 6, 'out of stock', 5, 5 ),
("Smart Home Wakke", "make you home to the future", "../html/images/smart_home.jpg", 490.00, 6, 'out of stock', 4, 5 ),
("shirt", "loke smart always for the environment", "../html/images/men acc.jpg", 490.00, 6, 'in of stock', 2, 1 ),
("Ps5", "Now you control the world, be smart with you moves", "../html/images/laptop.jpg", 50.00, 6, 'in of stock', 7, 2 ),
("DG Skirt", "make your bosy smile.", "../html/images/women acc.jpg", 900.00, 1, 'in stock', 3, 3 ),
("Apple", "Be classy", "../html/images/vegetables.jpg", 650.00, 6, 'in stock', 9, 5 ),
("Windows 10 pro", "feel free and code.", "../html/images/laptop.jpg", 190.00, 3, 'in stock', 6, 4 ),
("IPhone", "Be classy", "../html/images/vegetables.jpg", 650.00, 6, 'in stock', 5, 5 ),
("Zara shoes", "selection of Loafers, Formal Shoes, Boots, Sneakers & more", "../html/images/brogues_shoes.jpg", 490.00, 6, 'out of stock', 1, 4 ),
("lip stick", "selection of Loafers, Formal Shoes, Boots, Sneakers & more", "../html/images/women acc.jpg", 50.00, 6, 'in of stock', 3, 3 ),
("LG", "feel free and code.", "../html/images/laptop.jpg", 190.00, 3, 'in stock', 5, 2 ),
("lip stick", "selection of Loafers, Formal Shoes, Boots, Sneakers & more", "../html/images/women acc.jpg", 50.00, 6, 'in of stock', 3, 1 );

SELECT * FROM products;


/*ORDERS ITEMS...*/
CREATE TABLE orders_items (
	id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    unit_price DECIMAL(9, 2) NOT NULL,
    quantity INT NOT NULL,
    total_amount DECIMAL(9, 2) NOT NULL,
    date_created DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO orders_items (order_id, product_id, unit_price, quantity, total_amount, date_created)
VALUES (1, 4, 208.00, 3, 827.00, now()),
(2, 5, 269.00, 2, 2080.00, now()),
(3, 3, 910.00, 4, 3930.00, now()),
(4, 2, 524.00, 5, 783.00, now()),
(5, 1, 876.00, 8, 789.00, now()),
(6, 4, 920.00, 2, 399101.00, now()),
(7, 5, 846.00, 4, 900000.00, now()),
(8, 2, 10.00, 6, 50.00, now()),
(2, 3, 382.00, 7, 562.00, now()),
(3, 1, 27.00, 9, 208.00, now()),
(5, 5, 272.00, 1, 21.00, now());

SELECT * FROM orders_items;