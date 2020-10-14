SELECT * FROM products;
INSERT INTO products(product_name, description, image, unit_price)
VALUES('COVID-19 VACCINE', 'It is into tablets,
 which is taken once and the virus is GONE', 
 'C:\Users\SAFAIDS-ZM\Desktop\Dufuna-CodeCamp20\submissions\benjaminKamena\html\img\covid-19', 100);
SHOW COLUMNS FROM products;
SHOW TABLES;
CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
description VARCHAR(250) NOT NULL,
image BLOB NOT NULL,
unit_price INT NOT NULL,
PRIMARY KEY (id)
);
USE e_commerce;
SHOW DATABASES;
CREATE DATABASE e_commerce;
