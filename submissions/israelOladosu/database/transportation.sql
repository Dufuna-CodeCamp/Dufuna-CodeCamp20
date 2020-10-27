CREATE DATABASE transporation;

use transporation;

-- classes table
CREATE TABLE classes (
    id INT NOT NULL AUTO_INCREMENT,
    class_level INT NOT NULL,
    PRIMARY KEY(id)
);

-- passangers table
CREATE TABLE passengers (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    sex VARCHAR(6) NOT NULL,
    ticket_number VARCHAR(20) NOT NULL,
    age INT,
    class_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(class_id) REFERENCES classes(id) ON DELETE CASCADE 
);

CREATE TABLE cabin_classes(
    id INT NOT NULL AUTO_INCREMENT,
    cabin_code VARCHAR(10) NOT NULL,
    passenger_id INT NOT NULL,
    INDEX(id),
    PRIMARY KEY(passenger_id, cabin),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

-- trips table
CREATE TABLE trips (
    id INT NOT NULL AUTO_INCREMENT,
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(19,4) NOT NULL,
    number_of_parents_children INT NOT NULL DEFAULT  0,
    number_of_siblings_spouse INT NOT NULL DEFAULT 0,
    assigned_cabin VARCHAR(40),
    passenger_id INT NOT NULL,
    point_of_embarkation VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id, assigned_cabin) REFERENCES cabin_classes(passenger_id,cabin_code) ON DELETE CASCADE
);

-- accident table
CREATE TABLE accidents (
    id INT NOT NULL AUTO_INCREMENT,
    survived BOOLEAN NOT NULL,
    died BOOLEAN NOT NULL,
    passenger_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);


--------------------------------INSERT INTO TABLES----------------------------------

-- insert into classes table 
INSERT INTO classes (class_level)
VALUES(1),(2),(3);

--insert into passangers table
INSERT INTO passengers (firstname, lastname, sex, class_id)
VALUES('Dele', 'Amid', 'Male', 1, 'PC174599', 'C102'),
      ('Rita', 'Godspower', 'Female', 2, 'PC56785', 'C103');

--insert into cabin_classes
INSERT INTO cabin_classes(cabin, passenger_id)
VALUES("C102", 1),
	  ("C103", 2);

-- insert into trips table
INSERT INTO trips (passenger_class, passenger_ticket, trip_fare, number_of_parents_children, number_of_siblings_spouse, assigned_cabin, point_of_embarkation, passenger_id)
VALUES(1, 'PC174599', 500000, 4, 0, 'C102', 'Abuja', 1),
      (1, 'PC56785', 500000, 0, 2, 'C103', 'Abuja', 2);

--insert into accidents
INSERT INTO accidents (survived, died, passenger_id)
VALUES(1, 0, 1),
      (1, 0, 2);