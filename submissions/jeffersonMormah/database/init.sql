CREATE DATABASE ebekelchemicals;

use ebekelchemicals;

create table categories (
	id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE admins (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    admin_password VARCHAR(100) NOT NULL,
    phone_number VARCHAR(21) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(150) NOT NULL,
    product_image BLOB,
    unit_price DECIMAL (17,5) NOT NULL,
    stock_level INT NOT NULL,
    product_status VARCHAR(20) NOT NULL,
    admin_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(admin_id) REFERENCES admins(id) ON DELETE CASCADE,
    FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE CASCADE
    );
    
CREATE TABLE clients (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    client_password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
    
CREATE TABLE addresses (
	id INT NOT NULL AUTO_INCREMENT,
    client_address VARCHAR(250) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state_name VARCHAR(20) NOT NULL,
    zipcode INT,
    country VARCHAR(25) NOT NULL,
    phone_number VARCHAR(21) NOT NULL,
    client_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(client_id) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE TABLE shoppings (
	id INT NOT NULL AUTO_INCREMENT,
	shopping_amount DECIMAL(17,5) NOT NULL,
	shopping_period DATETIME NOT NULL,
	client_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(client_id) REFERENCES clients(id) ON DELETE CASCADE

);

CREATE TABLE items (
	id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    unit_price DECIMAL(17,5) NOT NULL,
    total_amount DECIMAL(17,5) NOT NULL,
    product_id INT NOT NULL,
    shopping_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY(shopping_id) REFERENCES shoppings(id) ON DELETE CASCADE
);


INSERT INTO categories (category_name)
VALUES('teflon products'),
	  ('silicon products'),
      ('tesa products'),
      ('cutting products'),
      ('photoplolymer products');
      
INSERT INTO admins ( firstname, lastname, email, admin_password, phone_number)
VALUES('Jefferson', 'Mormah', 'jeffbuchi9@gmail.com', 'balakov', '07038431304'),
	  ('Michelle', 'Ngozi', 'michelle@gmail.com', 'michelline', '08134356789');
      
INSERT INTO products (product_name, product_description, product_image, unit_price, stock_level, product_status, admin_id, category_id)
VALUES('teflon adhesive tape', 'Adhesive tape is made from teflon cloth (or pure teflon film), treated with sodium or special 
               reagent on one side, then coated with adhesive. 
               There are two types of teflon tape: the narrow tapes are normally without release paper and
                the wide ones are always with release paper.
               High temperature resistance(-70℃~260℃).
                Surface smooth, non-stick and easy to clean.
                Fire retardant.
                Excellent dimensional stability and high strength.
                High insulation, anti-ultraviolet, anti-static.
                Resistant to chemical corrosion, strong acid, alkali and various organic solvents.
                Easy to use, long service life.
                We have Teflon adhesive tape with release liner and without release liner.
                Main thickness: 0.08mm, 0.13mm, 0.18mm, 0.25mm and 0.3mm.
                Color: Brown, Black or White. Size can be customized , please contact us to get more information . you can leave a message, 
                we will contact you as soon as possible.', 'C:\Users\ggg\Desktop\Dufuna-CodeCamp20/submissions/jeffersonMormah/introductionToHtml/images/Teflon Image2.jpg', 19500, 50, 'in stock', 1, 1);

INSERT INTO clients (firstname, lastname, email, client_password)
VALUES('Dangote', 'Agrosack', 'dangote@dangoteagro.com', 'dangote' );

INSERT INTO addresses (client_address, city, state_name, zipcode, country, phone_number, client_id)
VALUES ('oba akran avenue', 'Ikeja', 'Lagos', '23401', 'Nigeria', '08098765431', 2);

INSERT INTO shoppings (shopping_amount, shopping_period, client_id)
VALUES(19500, now(), 2);

INSERT INTO items (quantity, unit_price, total_amount, product_id, shopping_id)
VALUES(2, 19500, 39000, 1,1);

      
      

