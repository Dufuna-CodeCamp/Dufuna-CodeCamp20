-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: store
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50)  NOT NULL,
  `email_address` varchar(250)  NOT NULL,
  `password` varchar(250) NOT NULL,
  `phone_number` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_users`
--


INSERT INTO `admin_users` VALUES (1,'juwon','samju7778@gmail.com','ade100','23480-667-76598'),
(2,'samuel','samju6677@gmail.com','sam100','23480-667-76598'),
(3,'nuru','nuru@gmail.com','nuru100','23480-667-87598'),
(4,'itunu','itunu@gmail.com','itunu100','23480-667-66598'),
(5,'feyi','feyi@gmail.com','feyi100','23480-567-76598'),
(6,'temidayo','temi@gmail.com','temi100','23480-667-76598'),
(7,'seye','seye@gmail.com','seye100','23480-667-76690');



--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100)  NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--


INSERT INTO `categories` VALUES (1,'Laptop Accessiories '),
(2,'Baby Care & Wear'),
(3,'Women Collection'),
(4,'Electronic Accessiories'),
(5,'Smart Home & Garden'),
(6,'Lights & Lighting');


--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50)  NOT NULL,
  `description` text  NOT NULL,
  `image` text NOT NULL,
  `unit_price` decimal(8,2) NOT NULL,
  `category_id` int(11) NOT NULL,
  `admin_user_id` int(11) NOT NULL,
  `quantity_in_stock` int(11) NOT NULL,
  `stock_level` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_admin_users_idx` (`admin_user_id`),
  KEY `fk_products_categorys_idx` (`category_id`),
  CONSTRAINT `fk_products_admin_users` FOREIGN KEY (`admin_user_id`) REFERENCES `admin_users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_products_categorys` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--


INSERT INTO `products` VALUES (1,'Xiaomi Mi Notebook Pro 2019 15.6 inch Windows 10','Chinese Language Home Edition Intel Core i5 - 8250U Quad Core 1.6GHz CPU 8GB RAM 256GB SSD 1.0MP Front Camera Fingerprint Sensor','load_file(https://samju200.github.io/samju/simple/img/laptop.jpg)',1485.83,1,2,50,'low stock'),
(2,'Xiaomi Redmibook','Chinese Language Home Edition Intel Core i5 - 8250U Quad Core 1.6GHz CPU 8GB RAM 256GB SSD 1.0MP Front Camera Fingerprint Sensor','load_file(https://samju200.github.io/samju/simple/img/laptop1.jpg)',819.52,1,1,100,'low stock'),
(3,'Charging power','1.8m DC Charging power ','load_file(https://samju200.github.io/samju/simple/img/charger.jpg)',4.26,1,4,2000,'in stock'),
(4,'Laptop Bag','11 Inch Laptop Bag Tablet Zipper Pouch Sleeve for MacBook Air','load_file(https://samju200.github.io/samju/simple/img/bag1.jpg)',6.95,1,6,2000,'in stock');


--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50)  NOT NULL,
  `email_address` varchar(250) NOT NULL,
  `password` varchar(250)  NOT NULL,
  `phone_number` varchar(50)  NOT NULL,
  `contact_address` varchar(250)  NOT NULL,
  `street_address` varchar(250)  NOT NULL,
  `zip_code` int(11) NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--


INSERT INTO `customers` VALUES (1,'Samuel','Adeniyi','ade@gmail.com','adew200',' 234-80775-67589','5 Ogunmefun Somolu Lagos','Ogunmefun',27704,'Lagos','Lagos','Nigeria'),
(2,'Ronke','Adeyemi','ronke@gmail.com','ronke200','234-80665-67589','10 Ring Road Ibadan Oyo','Ring Road',27705,'Ibadan','Oyo','Nigeria'),
(3,'Itunu','Adekoya','itunu@gmail.com','itunu200','234-80675-67589','11 wale Somolu Lagos','wale',27704,'Lagos','Lagos','Nigeria'),
(4,'Wale','Ejigboye','wale@gmail.com','wale200','234-80775-67579','5 Ogonbiade Kunlede Ilorin ','Ogonbiade',27703,'Ilorin','Kwara','Nigeria');




--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orders_customers_idx` (`customer_id`),
  CONSTRAINT `fk_orders_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--


INSERT INTO `orders` VALUES (1,2,'2020-01-30'),
(2,1,'2020-08-02'),
(3,3,'2019-12-01'),
(4,2,'2020-01-22'),
(5,1,'2020-08-25'),
(6,4,'2019-11-18'),
(7,2,'2020-09-22'),
(8,3,'2020-08-08'),
(9,1,'2020-07-05'),
(10,3,'2020-04-22');

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(8,2) NOT NULL,
  `total_amount` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_items_products_idx` (`product_id`),
  KEY `fk_order_items_orders_idx` (`order_id`),
  CONSTRAINT `fk_order_items_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_order_items_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--


INSERT INTO `order_items` VALUES (1,1,4,4,3.74,14.96),
(2,2,1,2,9.10,18.20),
(3,2,3,4,1.66,6.64),
(4,2,2,2,2.94,5.88);


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-20 19:06:03
