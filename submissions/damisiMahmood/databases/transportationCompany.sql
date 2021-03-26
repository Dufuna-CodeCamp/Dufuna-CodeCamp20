-- Database for a transportation company

CREATE DATABASE transportation_company;
USE transportation_company;

-- Tables for transportation_company : Passenger Details
CREATE TABLE passengers_details (
id INT(11) NOT NULL AUTO_INCREMENT,
full_name VARCHAR(100) NOT NULL,
sex VARCHAR(20) NOT NULL,
age VARCHAR(10) NULL,
created_at DATETIME,
PRIMARY KEY (id)
);

-- Tables for transportation_company : Travel Details
CREATE TABLE travel_details (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT (11) NOT NULL,
passenger_class ENUM ('1', '2', '3') NOT NULL,
ticket_number VARCHAR(20) NOT NULL,
trip_fare DECIMAL(10,2) NOT NULL,
assigned_cabin VARCHAR(10) NULL,
parents_or_children_aboard INT (11) NOT NULL,
siblings_or_spouses_aboard INT (11) NOT NULL,
embarkation_point VARCHAR (50) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers_details (id)
);


--- Tables for transportation_company : Flight Statuses
CREATE TABLE flight_statuses (
id INT (11) NOT NULL AUTO_INCREMENT,
passenger_id INT(11) NOT NULL,
survival_status BOOLEAN NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers_details (id)
);