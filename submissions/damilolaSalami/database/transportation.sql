CREATE DATABASE transport;
USE transport;

/*Details of registered passengers*/
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    sex VARCHAR(20) NOT NULL,
    age VARCHAR(15) NOT NULL,
    PRIMARY KEY (id)
);

/*Passengers trip details*/
CREATE TABLE passengers_details (
    id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    passengers_class INT NOT NULL,
    passengers_ticket_number VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(9 , 2 ) NOT NULL,
    assigned_cabin VARCHAR(100),
    number_of_parents_or_children_abroad INT NOT NULL,
    number_of_siblings_or_spouses_abroad INT NOT NULL,
    point_of_embarkation VARCHAR(150) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id)
        REFERENCES passengers (id)
);

/*accident cases of passengers*/
CREATE TABLE accident_cases (
    id INT NOT NULL AUTO_INCREMENT,
    passengers_id INT NOT NULL,
    survived BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passengers_id)
        REFERENCES passengers (id)
);