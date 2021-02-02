/****** Create database****/
CREATE DATABASE transportation;

USE transportation

SHOW TABLES

DROP TABLE IF EXISTS passengers
/******* Create pasengers table*****/
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(150) NOT NULL,
	sex VARCHAR(6) NOT NULL,
	age VARCHAR(30) NULL,
	created_at DATETIME,
	PRIMARY KEY (id)
);

SHOW COLUMNS FROM passengers

DROP TABLE IF EXISTS trips

/******* Create trips table*****/
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
	passenger_class INT NOT NULL,
	passenger_ticket_number VARCHAR(100) NOT NULL,
	trip_fare  DECIMAL (10,2) NOT NULL,
    assigned_cabin VARCHAR(50) NULL,
    number_of_parents_children_aboard INT NOT NULL,
    number_of_siblings_spouses_aboard INT NOT NULL,
    point_of_embarkation VARCHAR(100) NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

SHOW COLUMNS FROM trips

DROP TABLE IF EXISTS accidents

/******* Create accidents table*****/
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
	passenger_id INT NOT NULL,
	survived TINYINT NOT NULL,
	created_at DATETIME,
	PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);