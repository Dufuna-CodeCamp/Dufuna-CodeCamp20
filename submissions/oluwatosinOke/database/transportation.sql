-- create transportation database
CREATE DATABASE transportation;
USE transportation;
-- create table named passengers
CREATE TABLE passengers (
passenger_id INT NOT NULL AUTO_INCREMENT,
fullname VARCHAR (50) NOT NULL,
sex VARCHAR (10) NOT NULL,
age VARCHAR (5),
PRIMARY KEY (passenger_id)
);
-- create table named trips
CREATE TABLE trips (
trip_id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
passenger_class INT NOT NULL,
passenger_ticket_number VARCHAR (50) NOT NULL,
trip_fare DECIMAL(9,2),
assigned_carbin VARCHAR (50),
number_of_parent_children INT NOT NULL,
number_of_siblings_spouses INT NOT NULL,
Point_of_embarkation VARCHAR (50) NOT NULL,
PRIMARY KEY (trip_id),
FOREIGN KEY (passenger_id) REFERENCES passengers(passenger_id)
);

-- create table accidents
CREATE TABLE accidents (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
survived VARCHAR (50) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (passenger_id) REFERENCES passengers(passenger_id)
);