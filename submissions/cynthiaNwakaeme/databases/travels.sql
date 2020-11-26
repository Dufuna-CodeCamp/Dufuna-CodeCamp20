-- CREATED DATABASE FOR TRANSPORTATION COMPANY
CREATE DATABASE travel_company;
USE travel_company;

-- CREATED TABLES
CREATE TABLE passengers (
	passenger_id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(50) NOT NULL,
	sex VARCHAR(6) NOT NULL,
	age SMALLINT,
	PRIMARY KEY (passenger_id)
);
CREATE TABLE trips (
	trip_id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
	class TINYINT NOT NULL,
    ticket_number VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(10,2) NOT NULL,
    cabin VARCHAR(10),
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouses INT NOT NULL,
    embarkation_point VARCHAR(20) NOT NULL,
    PRIMARY KEY (trip_id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (passenger_id)
);
-- created table for event of accident

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    trip_id INT NOT NULL,
    status TINYINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (passenger_id),
    FOREIGN KEY (trip_id) REFERENCES trips (trip_id)
);