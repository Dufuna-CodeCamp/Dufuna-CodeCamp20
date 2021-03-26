--
-- Database: `transportation_company`
--
CREATE DATABASE transportation_company;
USE transportation_company;
SHOW TABLES;

-- --------------------------------------------------------
--
-- Table structure for table `passegers`
--
CREATE TABLE `passegers` (
  `passeger_id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `age` int(11) NULL,
  PRIMARY KEY (`passeger_id`)
);

-- --------------------------------------------------------
--
-- Table structure for table `travel_details`
--
CREATE TABLE `travel_details` (
  `travel_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `passeger_class` int(11) NOT NULL,
  `passeger_ticket_number` varchar(50) NOT NULL,
  `passeger_trip_fare` decimal(10,2) NOT NULL,
  `number_of_parent_or_children aboard` int(11) NOT NULL,
  `number_of_siblings_or_spouses aboard` int(11) NOT NULL,
  `assigned_cabin` varchar(10) NOT NULL,
  `point_of_embarkation` varchar(100) NOT NULL,
  `passegerId` int(11) NOT NULL,
  PRIMARY KEY (`travel_detail_id`),
  FOREIGN KEY (`passegerId`) REFERENCES `passegers` (`passeger_id`)
);

-- --------------------------------------------------------
--
-- Table structure for table `flight_statuses`
--
CREATE TABLE `flight_statuses` (
  `flight_statuses_id` int(11) NOT NULL AUTO_INCREMENT,
  `passeger_survived` BOOLEAN NOT NULL,
  `passegerId` int(11) NOT NULL,
  PRIMARY KEY (`flight_statuses_id`),
  --FOREIGN KEY (`passegerId`) REFERENCES `passegers` (`passeger_id`)
);