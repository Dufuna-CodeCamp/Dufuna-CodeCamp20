CREATE DATABASE farmvile;

use farmvile;

-- categories table 
CREATE TABLE categorries (
    id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

-- admins table
CREATE TABLE admins (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    admin_password VARCHAR(100) NOT NULL,
    phone_number VARCHAR(21) NOT NULL,
    PRIMARY KEY(id)  
);

-- products table
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(150) NOT NULL,
    product_image BLOB,
    unit_price INT NOT NULL,
    stock_level INT NOT NULL,
    product_status VARCHAR(20) NOT NULL,
    admin_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(admin_id) REFERENCES admins(id) ON DELETE CASCADE,
    FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- registered customers table
CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    customer_password VARCHAR(100) NOT NULL,
    primary KEY(id)
);

-- registered customerd addresses
CREATE TABLE addresses (
    id INT NOT NULL AUTO_INCREMENT,
    street_address VARCHAR(250) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state_name VARCHAR(20) NOT NULL,
    zipcode INT,
    country VARCHAR(25) NOT NULL,
    phone_number VARCHAR(21) NOT NULL,
    customer_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- orders table
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    order_amount INT NOT NULL,
    made_at DATETIME NOT NULL,
    customer_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- order items table
CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    unit_price INT NOT NULL,
    total_amoumt INT NOT NULL,
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE
);

----------------------------------------------------INSERT INTO TABLES-------------------------------------------------------

-- insert into categories table 
INSERT INTO categories (category_name)
VALUES('farm animals'),
      ('crops'),
      ('cereals'),
      ('vegetables'),
      ('tubers');

-- insert into admins
INSERT INTO admins (firstname, lastname, email, admin_password, phone_number)
VALUES ('Nifemi', 'Omotola', 'nifemi@email.com', 'omotola', 08012345678),
       ('Olatokunbo', 'Fagbamigbe', 'tox@email.com', 'tox', 09012345678 ),
       ('Israel', 'Oladosu', 'Fahrenheit@email.com', 'fahrenheit', 08112345678);

-- insert into products table
INSERT INTO products (product_name, product_description, product_image, unit_price, stock_level, product_status, admin_id, category_id)
VALUES ('Diary Cow', 'A six months old diary cow that produces large quantities of milk of about 30.000lb per year. It weighs 170kg with no history of any ailment.', 'C:\Users\User\Desktop\Dufuna-CodeCamp20\submissions\israelOladosu\introductionToHtml\img\cow-front-view.jpg', 900000, 10, 'in stock', 3, 1);

-- insert into customers table
INSERT INTO customers (firstname, lastname, email, customer_password)
VALUES ('Emmanuel', 'Ojo', 'emmaneul@email.com', 'emmanuel');

-- insert into addresse table
INSERT INTO addresses (street_address, city, state_name, zipcode, country, phone_number, customer_id)
VALUES ('Ogunsola str', 'Alimosho', 'Lagos', 100275, 'Nigeria', 07012345678, 1 );

-- insert into orders table
INSERT INTO orders (order_amount, made_at, customer_id)
VALUES (900000, now(), 1);

-- insert into order items table
INSERT INTO items (quantity, unit_price, total_amoumt, product_id, order_id)
VALUES (1, 900000, 900000, 1, 1);