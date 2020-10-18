/*********************DATABASE CREATED*************************/
CREATE DATABASE zeezy_stores;
USE zeezy_stores;

/*********************PRODUCTS TABLE*************************/
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(250) NOT NULL,
	image BLOB NOT NULL,
	unit_price DECIMAL(10,2) NOT NULL,
	stock_level INT NOT NULL,
	status VARCHAR(20) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id)
);

INSERT INTO products (name, description, image, unit_price, stock_level, status, created_at)
VALUES('R L Fit Oxford Button-Down Pony Logo Shirt-Skyblue', 'Ralph Lauren is the prinnacle of style and design. This classic fit oxford shirt is the perfect way to stay classy. A buttondown classic fit polo which is 100% cotton', 'pony-logo-shirt.jpg', 14000.00, 180, 'in stock', now()),
("Skechers Men's Blaine Orsen Ankle Boot", 'Approx. 1'' heel height, Approx. 5'' boot shaft height, Cushioned footbed, Dual side goring Fabric lining', 'Skechers-Men-Blaine-Orsen-Ankle-Boot.jpg', 22000.00, 50, 'low stock', now()),
("UGG Men's Biltmore Chelsea Boot", 'Imported, Rubber sole, Shaft measures approximately ankle-high from arch, Waterproof full-grain leather upper, Energ comfort system insole, White spider rubber outsole for added traction, Fully waterproof and seam-sealed construction, Textile lining', 'UGG-Men-Biltmore-Chelsea-Boot2.jpeg', 24999.00, 240, 'in stock', now()),
('Fendi Custom Fotted Ladies Gown-Black', 'Casual, meet smart, Polo collar, Button placket, Embroidered logo to chest, Fitted cuffs, Slim fit, A narrow cut that sits close to the body', 'Fendi-Custom-Fotted-Ladies-Gown-Black.jpg', 20999.00, 0, 'out of stock', now());


/*********************CUSTOMERS TABLE*************************/
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	email_address VARCHAR(100) NOT NULL,
	password VARCHAR(50) NOT NULL,
	created_by DATETIME,
	PRIMARY KEY (id)
);

INSERT INTO customers (firstname, lastname, email_address, password, created_by)
VALUES ('Michael', 'Daniel', 'miichaeldaniel@gmail.com', 'Danmichael24.', now()),
('Chukwu', 'Flora', 'chukwuflora@gmail.com', 'floRal58chuks.', now()),
('Adeola', 'Abosede', 'bosededebola@gmail.com', 'Debolboss_1984', now()),
('Benson', 'Bonaventure', 'bensonbonaventure@gmail.com', 'bona_Benson24', now()),
('Bernard', 'Davidson', 'bernarddavid@gmail.com', 'bernardDave44.', now());


/*********************CUSTOMERS ADDRESS TABLE*************************/
CREATE TABLE customers_addresses (
	id INT NOT NULL AUTO_INCREMENT,
	customers_id INT NOT NULL,
	street VARCHAR(100) NOT NULL,
	city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
	zip_code INT,
	country VARCHAR(50) NOT NULL,
	phone_number VARCHAR(20) NOT NULL,
    created_at DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (customers_id) REFERENCES customers (id)
);

INSERT INTO customers_addresses (customers_id, street, city, state, zip_code, country, phone_number, created_at)
VALUES (1, 'No 10, Cheraton Avenue', 'Ikeja', 'Lagos', 00145, 'Nigeria', '08012345600', now()),
(2, 'No 1, Clinton Close', 'Ibadan', 'Oyo', 00130, 'Nigeria', '08012345601', now()),
(3, 'No 3, Mobayode Street', 'Abeokuta', 'Ogun', 00120, 'Nigeria', '08012345602', now()),
(4, 'No 7, Hamilton Avenue', 'Awka', 'Anambra', 00014, 'Nigeria', '08012345603', now()),
(5, 'No 12, Paragon Close', 'Enugu', 'Enugu', 00173, 'Nigeria', '08012345604', now());
 
 
/*********************CATEGORIES TABLE*************************/
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
	products_id INT NOT NULL,
	category VARCHAR(50) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (products_id) REFERENCES products (id)
);


INSERT INTO categories (category, products_id)
VALUES ('Gowns', 4),
('Shirts', 1),
('Shoes', 3),
('Shoes', 2);


/*********************ITEMS TABLE*************************/
CREATE TABLE order_items (
	id INT NOT NULL AUTO_INCREMENT,
	products_id INT NOT NULL,
	quantity VARCHAR(250) NOT NULL,
	unit_price DECIMAL(10,2) NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (products_id) REFERENCES products (id)
);

INSERT INTO order_items (products_id, quantity, unit_price, total_amount, created_at)
VALUES (3, 2, 24999.00, 49998.00, now()),
(1, 2, 14000.00, 28000.00, now()),
(2, 1, 22000.00, 22000.00, now()),
(1, 9, 14000.00, 126000.00, now()),
(3, 1, 24999.00, 24999.00, now());


/*********************ORDERS TABLE*************************/	
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
	customers_id INT NOT NULL,
	order_items_id INT NOT NULL,
	amount DECIMAL(10,2) NOT NULL,
	date VARCHAR(50) NOT NULL,
	created_at VARCHAR(50) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (customers_id) REFERENCES customers (id),
	FOREIGN KEY (order_items_id) REFERENCES order_items (id)
);

INSERT INTO orders (customers_id, amount, order_items_id, date, created_at)
VALUES(3, 28000.00, 2, cast(now() AS DATE), now()),
(1, 22000.00, 3, cast(now() AS DATE), now()),
(5, 126000.00, 4, cast(now() AS DATE), now()),
(4, 24999.00, 5, cast(now() AS DATE), now()),
(2, 49998.00, 1, cast(now() AS DATE), now());


/*********************ADMINS TABLE*************************/
CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
	product_created INT NOT NULL,
	name VARCHAR(200) NOT NULL,
	email_address VARCHAR(100) NOT NULL,
	password VARCHAR(50) NOT NULL,
	phone_number VARCHAR(20) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (product_created) REFERENCES products (id)
);

INSERT INTO admins (product_created, name, email_address, password, phone_number, created_at)
VALUES (2, 'Joy Chukwukere', 'joychuks@gmail.com', 'joyChuks', '07012345620', now()),
(3, 'Akinbobola Faith', 'faithakinbob@gmail.com', 'faith2039', '07012345621', now()),
(1, 'Iyiola Peter', 'peteriyiola@gmail.com', 'iyiola', '07012345622', now()),
(4, 'Chabu Chabu', 'chabusquare@gmail.com', 'chabu1914', '07012345623', now());
