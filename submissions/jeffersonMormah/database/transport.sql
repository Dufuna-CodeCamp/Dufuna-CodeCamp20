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
	id INT(10) NOT NULL AUTO_INCREMENT,
    passenger_class INT(10) NOT NULL,
    passenger_ticket VARCHAR(50) NOT NULL,
    trip_fare DECIMAL(10,4),
    number_of_parents_children INT(11) NOT NULL,
    number_of_siblings_spouse INT(11) NOT NULL,
	assigned_cabin VARCHAR(10) NOT NULL,
    passenger_id INT NOT NULL,
    point_of_embarkation VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    survived BOOLEAN NOT NULL,
    passenger_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);


    