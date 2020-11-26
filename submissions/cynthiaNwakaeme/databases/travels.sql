-- CREATED DATABASE FOR TRANSPORTATION COMPANY
DROP DATABASE IF EXISTS travel_company;
CREATE DATABASE travel_company;
USE travel_company;

-- CREATED TABLES
CREATE TABLE passengers (
	passenger_id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(50) NOT NULL,
	sex ENUM('male', 'female') NOT NULL,
	age INT,
	PRIMARY KEY (passenger_id)
);
CREATE TABLE trips (
	trip_id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	class ENUM('1', '2', '3') NOT NULL,
	ticket_number VARCHAR(20) NOT NULL,
	trip_fare DECIMAL(20,2) NOT NULL,
	cabin VARCHAR(10),
	number_of_parents_children INT NOT NULL,
	number_of_siblings_spouses INT NOT NULL,
	embarkation_point VARCHAR(20) NOT NULL,
	PRIMARY (trip_id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (passenger_id)
);
-- created table for event of accident

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	survival_status TINYINT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (passenger_id)
);
