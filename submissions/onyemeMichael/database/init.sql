CREATE DATABASE mix_stores;

USE mix_stores;

-- Categories Table
CREATE TABLE categories (
	id INT NOT NULL AUTO_INCREMENT,
    categories_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

-- Insert into categories table 
INSERT INTO categories (categories_name)
VALUES('Phones'),
      ('Laptops'),
      ('Tablets'),
      ('Head_Phones'),
      ('USB_Cords');
      
-- Admin_users Table
CREATE TABLE admin_users (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR (50) NOT NULL,
    lastname VARCHAR (50) NOT NULL,
    email VARCHAR (100) NOT NULL,
    admin_password VARCHAR(50) NOT Null,
    phone_number VARCHAR (20) NOT NULL,
    PRIMARY KEY (id)
);

-- Insert into admin_users
INSERT INTO admin_users (firstname, lastname, email, admin_password, phone_number)
VALUES ('Onyeme', 'Michael', 'onyememykel@gmail', 'iamblessed', '08182515388'),
	   ('Nifemi', 'Omotola', 'nifemi@email.com', 'omotola', '08012345678'),
       ('Olatokunbo', 'Fagbamigbe', 'tox@email.com', 'tox', '09012345678' ),
       ('Emmanuel', 'Ojo', 'emmaneul@email.com', 'emmanuel', '07031803086'),
       ('Ada', 'Mgbede', 'adaamgbede@email.com', 'adaa', '08109030672'),
       ('Toluwalase', 'Akintoye', 'toluakintoye@email.com', 'tolu', '08012785678');
       
-- Products table
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NOT NULL,
    product_description VARCHAR (255) NOT NULL,
    product_image BLOB NOT NULL,
    unit_price DECIMAL (16,4) NOT NULL,
    stock_level INT NOT NULL,
    product_status VARCHAR (15),
    admin_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Insert into products table
INSERT INTO products (product_name, product_description, product_image, unit_price, stock_level, product_status, admin_id, category_id)
VALUES ('Tecno Phantom 9', 'Tecno Phantom 9 smartphone was launched on 10th July 2019. The phone comes with a 6.40-inch touchscreen display with a resolution of 1080x2340 pixels at a pixel density of 403 pixels per inch (ppi) and an aspect ratio of 19.5:9.', 'C:\Users\Onyeme Michael\Desktop\Dufuna-CodeCamp20\submissions\onyemeMichael\html\image\tecno.jpg', 138999.0000, 5, 'in stock', 2, 1);


-- Rigistered Customers Table
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR (25) NOT NULL,
    lastname VARCHAR (25) NOT NULL,
    email VARCHAR (50) NOT NULL,
    customer_password VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

-- Insert into customers table
INSERT INTO customers (firstname, lastname, email, customer_password)
VALUES ('Paul', 'Onyeme', 'paulonyeme@email.com', 'paul'),
	   ('Mayowa', 'Ojo', 'mayawaojo@email.com', 'mayowa');

-- Rigistered Customers Addresses
CREATE TABLE addresses (
	id INT NOT NULL AUTO_INCREMENT,
    street_adress VARCHAR (255) NOT NULL,
    city VARCHAR (50) NOT NULL,
    state_name VARCHAR (50) NOT NULL,
    zipcode INT,
    country VARCHAR (50) NOT NULL,
    phone_number VARCHAR (20) NOT NULL,
    customer_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- Insert into addresse table
INSERT INTO addresses (street_adress, city, state_name, zipcode, country, phone_number, customer_id)
VALUES ('Mykel str', 'Apapa', 'Lagos', 100335, 'Nigeria', '08182515388', 1),
       ('Chuks str', 'Yaba', 'Lagos', 100375, 'Nigeria', '07012345678', 2 );


-- Order Table
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    order_amount DECIMAL (16,4) NOT NULL,
    ordered_at DATETIME NOT NULL,
    customer_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- Insert into orders table
INSERT INTO orders (order_amount, ordered_at, customer_id)
VALUES (138999.0000, now(), 1),
	   (88000.0000, now(), 2);

-- Order Items Table
CREATE TABLE order_items (
	id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    unit_price DECIMAL (16,4) NOT NULL,
    total_amount DECIMAL (16,4) NOT NULL,
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

-- Insert into order items table
INSERT INTO order_items (quantity, unit_price, total_amount, product_id, order_id)
VALUES (1, 138999.0000, 138999.0000, 1, 1);