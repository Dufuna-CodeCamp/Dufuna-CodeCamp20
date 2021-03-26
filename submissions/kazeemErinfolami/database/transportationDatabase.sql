/*........DATABASE.......*/

-- TRANSPORTATION
CREATE DATABASE transporation;

USE transporation;

/*.......TABLES......*/

-- Passangers Table
CREATE TABLE passengers (
    id INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(50) NOT NULL,
    sex VARCHAR(6) NOT NULL,
    age INT,
    PRIMARY KEY(id)
);

SELECT * FROM passengers;


-- Trips Table
CREATE TABLE trips (
    id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class INT NOT NULL,
    passenger_ticket_no VARCHAR(15) NOT NULL,
    trip_fare DECIMAL(20,2) NOT NULL,
    assigned_cabin VARCHAR(20),
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouse INT NOT NULL,
    point_of_embarkation VARCHAR(200) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id));
    
    SELECT * FROM trips;

-- Created Accident Event Table
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	if_survived BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

SELECT * FROM accidents;