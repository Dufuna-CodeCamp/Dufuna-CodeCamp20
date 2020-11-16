CREATE DATABASE ohonbatransport;

use ohonbatransport;

CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    sex VARCHAR(7) NOT NULL,
    age INT,
    PRIMARY KEY(id)
);

CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(19,4),
    assigned_cabin INT NOT NULL,
    number_of_parents_children INT NOT NULL DEFAULT 0,
    number_of_siblings_spouse INT NOT NULL DEFAULT 0,
    passenger_id INT NOT NULL,
    point_of_embarkation VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_class) REFERENCES classes(id) ON DELETE CASCADE,
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    survived BOOLEAN NOT NULL,
    died BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);


    