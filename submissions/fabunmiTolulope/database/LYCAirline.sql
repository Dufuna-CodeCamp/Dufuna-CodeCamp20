-- This database is for LYC Airline Transportation Company.

CREATE DATABASE lyc_airline;
USE lyc_airline;



-- This will create the table for passengers' details
CREATE TABLE passengers_details (
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(100) NOT NULL,
sex VARCHAR(20) NOT NULL,
age VARCHAR(20) NULL,
created_at DATETIME,
PRIMARY KEY (id)
);


-- This will create the table for Travel details
CREATE TABLE travel_details (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
passenger_class ENUM ('1', '2', '3') NOT NULL,
ticket_number VARCHAR(20) NOT NULL,
trip_fare DECIMAL(10,2) NOT NULL,
assigned_cabin VARCHAR(10) NULL,
parents_or_children_aboard INT NOT NULL,
siblings_or_spouses_aboard INT NOT NULL,
embarkation_point VARCHAR (50) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers_details (id)
);


--- -This will create the table for Accidents Record Table
CREATE TABLE accident_records (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
survival_status BOOLEAN NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers_details (id)
);
