-- Create the Database
-- 1 create the Registered Passenger Table --
-- 2 create the trip details for each Passenger --
-- 3 create the accident table
CREATE DATABASE TRANSPORTATION;
USE TRANSPORTATION;


-- creating the registered Passengers 

CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(30) NOT NULL,
sex VARCHAR(10) NOT NULL,
age VARCHAR(10) ,
PRIMARY KEY(id)
);
select * from passengers;

-- creating tables for Trip Details
CREATE TABLE trip(
id INT NOT NULL AUTO_INCREMENT,
trip_id INT NOT NULL,
registered_passengers_id INT NOT NULL,
passenger_class INT NOT NULL,
passenger_ticket VARCHAR(255) NOT NULL,
trip_fare decimal(10, 2) not null,
assigned_cabin VARCHAR(25) NOT NULL,
parent_or_children_abroad INT(15) NOT NULL,
siblings_or_spouses_abroad INT (15) NOT NULL,
embarkation_point VARCHAR (255) NOT NULL,
primary key (id),
foreign key (trip_id) references passengers(id)
);
select * from trip;

CREATE TABLE accidents_cases (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
accident_status TINYINT(5) NOT NULL,
primary key (id),
foreign key (passenger_id) references passengers(id)
);

select * from accidents_cases

