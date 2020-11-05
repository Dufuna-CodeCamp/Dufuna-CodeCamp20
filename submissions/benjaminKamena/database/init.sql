CREATE DATABASE eCommerce_store;
SHOW DATABASES;
DROP DATABASE ecommerce_store;
USE ecommerce_store;
CREATE TABLE `user_admins` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(100) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `admin_password` varchar(200) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  PRIMARY KEY (`admin_id`)
);
SHOW TABLES;
USE ecommerce_store;
CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`category_id`)
);

USE ecommerce_store;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_desc` text NOT NULL,
  `product_image` text NOT NULL,
  `product_unit_price` decimal(6,2) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `total_quantity` int(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`product_id`),
  FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  FOREIGN KEY (`admin_id`) REFERENCES `user_admins` (`admin_id`)
);

USE ecommerce_store;
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_first_name` varchar(100) NOT NULL,
  `customer_last_name` varchar(100) NOT NULL,
  `customer_email_address` varchar(100) NOT NULL,
  `customer_password` varchar(100) NOT NULL,
  PRIMARY KEY (`customer_id`)
);

USE ecommerce_store;
CREATE TABLE `customers_contact_details` (
  `customer_contact_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_phone_number` varchar(100) NOT NULL,
  `customer_contact_details` varchar(250) NOT NULL,
  `customer_street_address` varchar(255) NOT NULL,
  `customer_city` varchar(100) NOT NULL,
  `customer_state` varchar(100) NOT NULL,
  `customer_zip_code` varchar(100) NULL,
  `customer_country` varchar(100) NOT NULL,
  `customersId` int(11) NOT NULL,
  PRIMARY KEY (`customer_contact_details_id`),
  FOREIGN KEY(`customersId`) REFERENCES customers(`customer_id`)
);

USE ecommerce_store;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_amount` decimal(10,2) NOT NULL,
  `order_date` date NOT NULL,
  `customersId` int(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  FOREIGN KEY (`customersId`) REFERENCES customers (`customer_id`)
);

USE ecommerce_store;
CREATE TABLE `order_items` (
  `order_items_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_item_quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_items_id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
);


