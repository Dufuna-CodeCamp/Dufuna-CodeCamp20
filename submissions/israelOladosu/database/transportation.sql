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
    name VARCHAR(50) NOT NULL,
    sex VARCHAR(6) NOT NULL,
    age INT,
    PRIMARY KEY(id)
);

-- trips table
CREATE TABLE trips (
    id INT NOT NULL AUTO INCREMENT,
    passenger_id INT NOT NULL,
    passenger_class INT NOT NULL,
    passenger_ticket VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(19,4) NOT NULL,
    number_of_parents_children INT NOT NULL DEFAULT  0,
    number_of_siblings_spouse INT NOT NULL DEFAULT 0,
    cabin VARCHAR(20),
    embarkation VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_class) REFERENCES classes(id) ON DELETE CASCADE,
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);


-- accident table
CREATE TABLE accidents (
    id INT NOT NULL AUTO INCREMENT,
    passenger_id INT NOT NULL,
    survived BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);


--------------------------------INSERT INTO TABLES----------------------------------

-- insert into classes table 
INSERT INTO classes (class_level)
VALUES(1),(2),(3);

--insert into passangers table
INSERT INTO passengers (name, sex)
VALUES('Dele Amid', 'Male'),
      ('Rita Godspower', 'Female');
      

-- insert into trips table
INSERT INTO trips (passenger_id, passenger_class, passenger_ticket, trip_fare, number_of_parents_children, number_of_siblings_spouse, point_of_embarkation, cabin)
VALUES(1, 1, 'PC174599', 500000, 4, 0, 'Abuja', 'C103'),
      (2, 1, 'PC56785', 500000, 0, 2, 'Abuja', 'C104');


--insert into accidents
INSERT INTO accidents ( passenger_id, survived)
VALUES(1, 1),
      (2, 1);