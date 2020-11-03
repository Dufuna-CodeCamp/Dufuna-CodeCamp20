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
    survived VARCHAR(5) NOT NULL,
    died VARCHAR(5) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id) ON DELETE CASCADE
);


-- inserted values into the passengers table
INSERT INTO passengers (full_name, sex, age) 
VALUES ('jon snow', 'male', '25'),
('arya stark', 'female', '18'),
('petyr baelish', 'male', '40'),
('jamie lannister', 'male', '35');

-- inserted values into the trips table
INSERT INTO trips (class, ticket_number, trip_fare, cabin, passenger_id, number_of_parents_children, number_of_siblings_spouses, embarkation_point)
VALUES ('1', '001', '2000', 'FOO1', '1', '1', '0', 'winterfell'),
('2', '002', '4000', 'F002', '2', '0', '1', 'kings landing'),
('3', '003', '8000', 'F003', '3', '1', '0', 'westeros'),
('2', '004', '10000', 'F004', '4', '1', '0', 'casterly rock');

-- inserted values into the accidents table
INSERT INTO accidents (passenger_id, survived, died) 
VALUES ('1', 'yes', 'no'),
('2', 'yes', 'no'),
('3', 'no', 'yes'),
('4', 'no', 'yes');