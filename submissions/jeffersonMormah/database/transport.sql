CREATE DATABASE ohonbatransport;

use ohonbatransport;

create TABLE classes (
	id INT NOT NULL AUTO_INCREMENT,
    class_rate INT NOT NULL,
    PRIMARY KEY(id)
);

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
    number_of_parents_children INT NOT NULL DEFAULT 0,
    number_of_siblings_spouse INT NOT NULL DEFAULT 0,
    passenger_id INT NOT NULL,
    point_of_embarkation VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_class) REFERENCES classes(id) ON DELETE CASCADE,
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

CREATE TABLE cabin_classes (
	id INT NOT NULL AUTO_INCREMENT,
    cabin_number VARCHAR(10) NOT NULL,
    trip_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(trip_id) REFERENCES trips(id) ON DELETE CASCADE
);

CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    survived BOOLEAN NOT NULL,
    died BOOLEAN NOT NULL,
    passenger_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

INSERT INTO classes(class_rate)
VALUES(1), (2), (3);

INSERT INTO passengers (firstname, lastname, sex)
VALUES('Donald', 'Trump', 'Male'),
	('Anderson', 'Cooper', 'Male'),
    ('Reese', 'Whitherspoon', 'Female'),
    ('Tyrese', 'Gibson', 'Male');

INSERT INTO trips (passenger_class, passenger_ticket, trip_fare, number_of_parents_children, number_of_siblings_spouse, passenger_id, point_of_embarkation)
VALUES(2, 'OHB21153', 45000, 2, 1, 1, 'Lagos'),
	  (1, 'OHB21154', 45000, 3, 2, 2, 'Lagos'),
      (4, 'OHB21151', 45000, 1, 2, 3,'Lagos'),
      (3, 'OHB21152', 45000, 3, 1, 4, 'Lagos');
      
INSERT INTO cabin_classes (cabin_number, trip_id)
VALUES('executive', 1),
	('executive', 2),
    ('premium', 3),
    ('premium', 4);
    
INSERT INTO accidents(survived, died, passenger_id)
VALUES(1, 0, 1),
	(1, 0, 1),
    (1, 0, 1),
    (1, 0, 1);
    