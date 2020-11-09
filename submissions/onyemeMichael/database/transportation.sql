CREATE DATABASE transportation;

USE transportation;

-- Passengers Table
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    sex VARCHAR(7) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY(id)
);

-- Trips Table
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    assigned_cabin VARCHAR(15),
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR(15) NOT NULL,
    trip_fare DECIMAL(16,4) NOT NULL,
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouses INT NOT NULL,
    passenger_id INT NULL,
    point_of_embarkation VARCHAR(150) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

-- Accident Table
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    survived BOOLEAN NOT NULL,
    passenger_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
    );