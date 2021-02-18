-- Create the Database
-- 1 create the Registered Passenger Table --
-- 2 create the trip details for each Passenger --
-- 3 create the accident table
CREATE DATABASE TRANSPORTATION;
USE TRANSPORTATION;


-- creating the registered Passengers 

CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(255) NOT NULL,
sex VARCHAR(10) NOT NULL,
age VARCHAR(10) ,
PRIMARY KEY(id)
);
select * from passengers;
select count(*) from passengers;




CREATE TABLE trips(
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
passenger_class INT NOT NULL,
passenger_ticket VARCHAR(255) NOT NULL,
trip_fare decimal(10, 2) not null,
assigned_cabin VARCHAR(25) NOT NULL,
parent_or_children_abroad INT NOT NULL,
siblings_or_spouses_abroad  INT  NOT NULL,
embarkation_point VARCHAR (255) NOT NULL,
primary key (id),
foreign key (passengers_id) references passengers(id)
);
select * from trips;



CREATE TABLE accidents_cases (
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
accident_status TINYINT NOT NULL,
primary key (id),
foreign key (passengers_id) references passengers(id)
);

select * from accidents_cases;


-- Task3 Transportation Data Query--

#1. Total number of passengers who survived the accident
select count(*) from accidents_cases where accident_status > 0;
 -- Answer = 342
 
 #2 Total number of passengers that did not survive the accident
select count(*) from accidents_cases where accident_status = 0;
-- Answers = 549

-- 3 Name and sex of passengers under the age 27 that embarked at Queenstown and Cherbourg
SELECT passengers.full_name, passengers.sex from passengers 
inner join trips on passengers.id = trips.passengers_id where age < '27' and 
embarkation_point like "Q%" or embarkation_point like "C%";

#4 Number of passengers who embarked  at Southampton and survived
select count(*) from accidents_cases left join
trips on accidents_cases.id = trips.passengers_id
where accident_status > 0 and embarkation_point = 'S';
-- Answer = 218;

-- 5 Name,Id,total number of people that paid trip fare more than $100 and above the age of 35 with siblings or spouses on board
select passengers.id, passengers.full_name, COUNT(*) OVER () AS total_count from passengers 
inner join trips on trips.id = passengers.id 
where trip_fare > 100 and age > '35' and siblings_or_spouses_abroad != 0;


 -- 6 The total number of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board
SELECT COUNT(*) FROM passengers
	join trips on trips.id = passengers.id
    where trip_fare > 100 and age > 35 and siblings_or_spouses_abroad > 0;
  
  -- Answer = 9 













 
 