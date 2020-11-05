CREATE DATABASE transportation;

USE transportation;

-- Classes Table
CREATE TABLE classes (
	id INT NOT NULL AUTO_INCREMENT,
    class_level INT NOT NULL,
    PRIMARY KEY(id)
);

-- Insert into classes table 
INSERT INTO classes (class_level)
VALUES(1),(2),(3);

-- Passengers Table
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    sex VARCHAR(7) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY(id)
);

-- Insert into passangers table
INSERT INTO passengers (firstname, lastname, sex, age)
VALUES('Isreal', 'John', 'Male', 22),
      ('Roah', 'Godswill', 'Female', 20),
      ('Paul', 'Uche', 'Male', 24),
      ('Mayowa', 'Bayo', 'Female', 19);

-- Trips Table
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR(15) NOT NULL,
    trip_fare DECIMAL(16,4) NOT NULL,
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouses INT NOT NULL,
    passenger_id INT NULL,
    point_of_embarkation VARCHAR(150) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_class) REFERENCES classes(id) ON DELETE CASCADE,
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

-- Insert into trips table
INSERT INTO trips (passenger_class, passenger_ticket, trip_fare, number_of_parents_children, number_of_siblings_spouses, point_of_embarkation, passenger_id)
VALUES(1, 'DC43569', 70000.0000, 2, 0, 'Lagos', 1),
      (2, 'DC76682', 50000.0000, 0, 1, 'Lagos', 2),
      (1, 'DC36844', 70000.0000, 4, 1, 'Lagos', 3),
      (2, 'DC56483', 50000.0000, 2, 1, 'Lagos', 4);


-- Cabin classes Table
CREATE TABLE cabin_classes (
	id INT NOT NULL AUTO_INCREMENT,
    cabin_code VARCHAR(15) NOT NULL,
    trip_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(trip_id) REFERENCES trips(id) ON DELETE CASCADE
);

-- Insert into cabin_classes
INSERT INTO cabin_classes(cabin_code, trip_id)
VALUES('D65', 1),
	  ('D54', 2),
      ('D39', 3),
      ('D42', 4);

-- Accident Table
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    survived BOOLEAN NOT NULL,
    died BOOLEAN NOT NULL,
    passenger_Id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

-- Insert into accidents
INSERT INTO accidents (survived, died, passenger_id)
VALUES(4, 0, 1),
      (4, 0, 2),
      (4, 0, 3),
      (4, 0, 4);