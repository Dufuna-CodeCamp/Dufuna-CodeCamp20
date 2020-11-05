CREATE DATABASE transporation;

use transporation;

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
