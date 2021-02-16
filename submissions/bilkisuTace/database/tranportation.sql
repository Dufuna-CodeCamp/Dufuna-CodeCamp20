-- ----------------------------
-- Table structure for `passengers`
-- ----------------------------
CREATE TABLE `passengers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) NOT NULL,
  `sex` varchar(20) NOT NULL,
  `age` varchar(10) NULL,
  PRIMARY KEY (`id`)
) 

-- ----------------------------
-- Table structure for `trips`
-- ----------------------------
CREATE TABLE `trips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `passenger_id` int(11) NOT NULL,
  `passenger_class` enum(3,2,1) NOT NULL,
  `passenger_ticket_number` varchar(20) NOT NULL,
  `trip_fare` decimal(20,0) NOT NULL,
  `assigned_cabin` varchar(20) DEFAULT NULL,
  `no_of_parents_children` int(11) NOT NULL,
  `no_of_siblings_spouses` int(11) NOT NULL,
  `point_of_embarkation` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trips_fk_1` (`passenger_id`),
  CONSTRAINT `trips_fk_1` FOREIGN KEY (`passenger_id`) REFERENCES `passengers` (`id`) 
)  

-- ----------------------------
-- Table structure for `accidents`
-- ----------------------------
CREATE TABLE `accidents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) NOT NULL,
  `passenger_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `passenger_id` (`passenger_id`),
  CONSTRAINT `accidents_fk_1` FOREIGN KEY (`passenger_id`) REFERENCES `passengers` (`id`) 
) 
