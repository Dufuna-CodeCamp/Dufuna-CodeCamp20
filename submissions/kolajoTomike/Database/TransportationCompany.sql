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
passengers_id INT NOT NULL DEFAULT(1),
passenger_class INT NOT NULL,
passenger_ticket VARCHAR(255) NOT NULL,
trip_fare decimal(10, 2) not null,
assigned_cabin VARCHAR(25) NOT NULL,
parent_or_children_abroad INT NOT NULL,
siblings_or_spouses_abroad INT NOT NULL,
embarkation_point VARCHAR (255) NOT NULL,
primary key (id),
foreign key (passengers_id) references passengers(id)
);
select * from trip;
 drop table trip;

CREATE TABLE accidents_cases (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL DEFAULT(1),
accident_status TINYINT NOT NULL,
primary key (id),
foreign key (passenger_id) references passengers(id)
);

select * from accidents_cases;
DROP TABLE accidents_cases;

-- Task3 Transportation Data Query--

#1. Total number of passengers who survived 
select count(*) from accidents_cases where accident_status > 0;
-- Answer => 342

#2 Total number of unsurvived passengers
select count(*) from accidents_cases where accident_status = 0;
-- Answers => 549

#3 Name and sex of passengers under the age 27 that embarked at Queenstown and Cherbourg
SELECT passengers.full_name, passengers.sex from passengers inner join trip on passengers_id = trip.passengers_id where age < '27' and embarkation_point like "Q%" or embarkation_point like "C%";


#4 Number of passengers who embarked  at Southampton and survived
select count(*) from accidents_cases left join trip on accidents_cases.id = trip.id where accident_status > 0 and embarkation_point = 'S';
-- Answers => 218;

#5. ID, Name and Total Number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board
 SELECT COUNT(*) FROM passengers left join trip on passengers.id = trip.id where trip_fare > 100 and age > 35 and siblings_or_spouses_abroad > 0;
 
 -- Answers => 5