--
-- Database: `transportation_company`
--
CREATE DATABASE transportation_company;
USE transportation_company;
SHOW TABLES;

-- --------------------------------------------------------
--
-- Table structure for table `passagers`
--
CREATE TABLE `passagers` (
  `passager_id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `age` int(11) NULL,
  PRIMARY KEY (`passager_id`)
);

-- --------------------------------------------------------
--
-- Table structure for table `travel_details`
--
CREATE TABLE `travel_details` (
  `travel_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `passanger_class` int(11) NOT NULL,
  `passanger_ticket_number` varchar(50) NOT NULL,
  `passager_trip_fare` decimal(10,2) NOT NULL,
  `number_of_parent_or_children aboard` int(11) NOT NULL,
  `number_of_siblings_or_spouses aboard` int(11) NOT NULL,
  `assigned_cabin` varchar(10) NOT NULL,
  `point_of_embarkation` varchar(100) NOT NULL,
  `passagerID` int(11) NOT NULL,
  PRIMARY KEY (`travel_detail_id`),
  FOREIGN KEY (`passagerID`) REFERENCES `passagers` (`passager_id`)
);

-- --------------------------------------------------------
--
-- Table structure for table `flight_statuses`
--
CREATE TABLE `flight_statuses` (
  `flight_statuses_id` int(11) NOT NULL AUTO_INCREMENT,
  `passanger_survived` varchar(50) NOT NULL,
  `passanger_not_survived` varchar(50) NOT NULL,
  `passagerID` int(11) NOT NULL,
  PRIMARY KEY (`flight_statuses_id`),
  FOREIGN KEY (`passagerID`) REFERENCES `passagers` (`passager_id`)
);