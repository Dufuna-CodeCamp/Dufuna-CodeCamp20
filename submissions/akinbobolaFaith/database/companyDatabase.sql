CREATE DATABASE xyz_airways;
USE xyz_airways;

/*********************PASSENGERS TABLE*************************/
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(200) NOT NULL,
	sex VARCHAR(50) NOT NULL,
	age INT(50),
	PRIMARY KEY(id)
);

INSERT INTO passengers (fullname, sex, age)
VALUES ('Joy Chukwuwere', 'Female', 30),
('Peter Iyiola', 'Male', 45),
('Adam Cole', 'Male', 33),
('Anna Badmus', 'Female', 30),
('Nicholas Cage', 'Male', 20);


/*********************TRAVEL_DETAILS TABLE*************************/
CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
	passenger_class INT(10) NOT NULL,
	ticket_number VARCHAR(100) NOT NULL,
	trip_fare DECIMAL(20,2) NOT NULL,
	parents_or_children_abroad INT(50) NOT NULL,
	siblings_or_spouse_abroad INT(50) NOT NULL,
	cabin_class VARCHAR(50) NOT NULL,
	embarkation_point VARCHAR(200) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passengers_id) REFERENCES passengers (id)
);

INSERT INTO travel_details (passengers_id, passenger_class, ticket_number, trip_fare, parents_or_children_abroad, siblings_or_spouse_abroad, cabin_class, embarkation_point)
VALUES (5, 1, 'BC18529', 1000000.00, 1, 0, 'D250', 'Nigeria'),
(3, 3, 'AR17459', 175000.00, 1, 0, 'C530', 'Nigeria'),
(1, 2, 'SC18365', 500000.00, 0, 1, 'A430', 'Nigeria'),
(2, 1, 'ER19367', 1000000.00, 1, 0, 'B007', 'Nigeria'),
(4, 2, 'BC19149', 500000.00, 1, 0, 'D320', 'Nigeria');


/*********************ACCIDENTS TABLE*************************/
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
	alive VARCHAR(20) NOT NULL,
	dead VARCHAR(20) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passengers_id) REFERENCES passengers(id)
);

INSERT INTO accidents (passengers_id, alive, dead)
VALUES (4, 'No', 'Dead'),
(1, 'Alive',' No'),
(3, 'No', 'Dead'),
(2, 'Alive', 'No'),
(5, 'Alive', 'No');