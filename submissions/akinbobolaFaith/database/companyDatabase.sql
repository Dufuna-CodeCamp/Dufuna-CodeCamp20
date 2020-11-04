CREATE DATABASE xyz_airways;
USE xyz_airways;

/*********************PASSENGERS TABLE*************************/
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(200) NOT NULL,
	sex VARCHAR(50) NOT NULL,
	age INT,
	PRIMARY KEY(id)
);


/*********************TRAVEL_DETAILS TABLE*************************/
CREATE TABLE travel_details (
	id INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
	passenger_class INT NOT NULL,
	ticket_number VARCHAR(100) NOT NULL,
	trip_fare DECIMAL(20,2) NOT NULL,
	parents_or_children_abroad INT NOT NULL,
	siblings_or_spouse_abroad INT NOT NULL,
	cabin_class VARCHAR(50) NOT NULL,
	embarkation_point VARCHAR(200) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passengers_id) REFERENCES passengers (id)
);


/*********************ACCIDENTS TABLE*************************/
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passengers_id INT NOT NULL,
	survived BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (passengers_id) REFERENCES passengers (id)
);

