-- created database
CREATE DATABASE transportation_company;
USE transportation_company;

-- created table passengers
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(30) NOT NULL,
	sex VARCHAR(10) NOT NULL,
	age INT,
	PRIMARY KEY (id)
);

-- created table trips
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
	class TINYINT NOT NULL,
    ticket_number VARCHAR(10) NOT NULL,
    trip_fare DECIMAL(10,3) NOT NULL,
    cabin VARCHAR(10) NOT NULL,
    passenger_id INT NOT NULL,
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouses INT NOT NULL,
    embarkation_point VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id) ON DELETE CASCADE
);

-- created table accidents
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    survived TINYINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id) ON DELETE CASCADE
);
