CREATE DATABASE trasporation;

use trasporation;

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
    age INT,
    class_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(class_id) REFERENCES classes(id) ON DELETE SET NULL 
);

-- tickets table
CREATE TABLE tickets (
    id INT NOT NULL AUTO_INCREMENT,
    ticket_number TEXT NOT NULL,
    passenger_id INT NOT NULL,
    INDEX(id),
    PRIMARY KEY(passenger_id, ticket_number(20)),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

-- cabins table
CREATE TABLE cabins (
    id INT NOT NULL AUTO_INCREMENT,
    cabin_class TEXT,
    passenger_id INT NOT NULL,
    INDEX(id),
    PRIMARY KEY(passenger_id, cabin_class(20)),
    FOREIGN KEY(passenger_id) REFERENCES passengers(id) ON DELETE CASCADE
);

-- trips table
CREATE TABLE trips (
    id INT NOT NULL AUTO_INCREMENT,
    passenger_class INT NOT NULL,
    passenger_ticket TEXT NOT NULL,
    trip_fare DECIMAL(19,4) NOT NULL,
    number_of_parents_children INT NOT NULL DEFAULT  0,
    number_of_siblings_spouse INT NOT NULL DEFAULT 0,
    assigned_cabin TEXT,
    point_of_embarkation TEXT NOT NULL,
    INDEX(id),
    PRIMARY KEY(point_of_embarkation),
    FOREIGN KEY(passenger_class) REFERENCES passengers(class_id) ON DELETE CASCADE,
    FOREIGN KEY(passenger_ticket) REFERENCES tickets(ticket_number) ON DELETE CASCADE,
    FOREIGN KEY(assigned_cabin) REFERENCES cabins(cabin_class) ON DELETE SET NULL 
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
VALUES('Dele', 'Amid', 'Male', 1),
      ('Rita', 'Godspower', 'Female', 2);

--insert into tickets table 
INSERT INTO tickets (id,ticket_number, passenger_id)
VALUES(1,'PC174599', 1),
      (2,'PC56785', 2);

--insert into cabins table
INSERT INTO cabins (cabin_class, passenger_id)
VALUES('C102', 1),
      ('C103', 2);

-- insert into trips table
INSERT INTO trips (passager_class, passager_ticket, trip_fare, number_of_parents_children, number_of_siblings_spouse, assigned_cabin, point_of_embarkation)
VALUES(1, 'PC174599', 500000, 4, 0, 'C102', 'Abuja'),
      (1, 'PC56785', 500000, 0, 2, 'C103', 'Abuja');

--insert into accidents
INSERT INTO accidents (survived, died, passenger_id)
VALUES(true, false, 1),
      (true, false, 2);