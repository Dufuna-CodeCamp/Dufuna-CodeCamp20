-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: transportation
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
-- Table structure for table `passengers`
--

DROP TABLE IF EXISTS `passengers`;

CREATE TABLE `passengers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Full_name` varchar(150) NOT NULL,
  `sex` varchar(6) NOT NULL,
  `age` int(10)  NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers`
--


INSERT INTO `passengers` VALUES 
(1,'juwon adeyemi','male',29),
(2,'samuel owoso','male'),
(3,'nuru kalijah','male'),
(4,'itunu adekoya','male',28),
(5,'feyi olufemi','female'),
(6,'temidayo alara','male',30),
(7,'seye omodiji','female',25);



--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;

CREATE TABLE `classes` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `class` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--


INSERT INTO `classes` VALUES 
(1,'Economy'),
(2,'Business'),
(3,'First');



--
-- Table structure for table `trips`
--

DROP TABLE IF EXISTS `trips`;

CREATE TABLE `trips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `passenger_class` int(11) NOT NULL,
  `passenger_ticket_number` varchar(100) NOT NULL,
  `trip_fare` decimal(20,4) NOT NULL,
  `number_of_parents_children` int(11) NOT NULL,
  `number_of_siblings_spouses` int(11) NOT NULL,
  `point_of_embarkation` varchar(50) NOT NULL,
  `passenger_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_trips_classes_idx` (`passenger_class`),
  KEY `fk_trips_passengers_idx` (`passenger_id`),
  CONSTRAINT `fk_trips_classes_idx` FOREIGN KEY (`passenger_class`) REFERENCES `classes` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_trips_passengers_idx` FOREIGN KEY (`passenger_id`) REFERENCES `passengers` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trips`
--


INSERT INTO `trips` VALUES
 (1,1,'112301',300000.0000,4,1,'Lagos',1),
 (2,2,'112302',400000.0000,4,2,'Lagos',2),
 (3,3,'112303',500000.0000,4,0,'lagos',3),
 (4,1,'112304',300000.0000,4,1,'Lagos',4);


--
-- Table structure for table `cabin_classes`
--

DROP TABLE IF EXISTS `cabins`;

CREATE TABLE `cabins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cabin_code` varchar(50) NOT NULL,
  `trip_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cabins_trips_idx` (`trip_id`),
  CONSTRAINT `fk_cabins_trips_idx` FOREIGN KEY (`trip_id`) REFERENCES `trips` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cabin_classes`
--


INSERT INTO `cabins` VALUES 
(1,'A102',3),
(2,'B105',1),
(3,'A104',2),
(4,'B104',4);

--
-- Table structure for table `accidents`
--

DROP TABLE IF EXISTS `accidents`;
CREATE TABLE `accidents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `survived` varchar(5) NOT NULL,
  `died` varchar(5) NOT NULL,
  `passenger_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_accidents_passengers_idx` (`passenger_id`),
  CONSTRAINT `fk_accidents_passengers` FOREIGN KEY (`passenger_id`) REFERENCES `passengers` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accidents`
--



INSERT INTO `accidents` VALUES 
(1,'yes','no',1),
(2,'yes','no',2),
(3,'no','yes',4);














/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-30 19:55:21
