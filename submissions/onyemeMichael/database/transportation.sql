CREATE DATABASE transportation;
set sql_mode = '';

USE transportation;

-- Passengers Table
CREATE TABLE passengers (
	passenger_id INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(100) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(10),
    PRIMARY KEY(passenger_id)
);

-- Trips Table
CREATE TABLE trips (
	trip_id INT NOT NULL AUTO_INCREMENT,
    assigned_cabin VARCHAR(50),
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR(50) NOT NULL,
    trip_fare DECIMAL(16,4) NOT NULL,
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouses INT NOT NULL,
    passenger_id INT NULL,
    point_of_embarkation VARCHAR(50) NOT NULL,
    PRIMARY KEY(trip_id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(passenger_id)
);

-- Accident Table
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    survived TINYINT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(passenger_id)
    );