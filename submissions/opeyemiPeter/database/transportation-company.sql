-- task two: Transportation Comapany {passenger track} database

-- creating the database
CREATE DATABASE transportation;
SHOW DATABASES;
USE transportation;

-- Creating Passenger table 
CREATE TABLE registered_passengers (
 id INT NOT NULL AUTO_INCREMENT,
 full_name VARCHAR(100) NOT NULL,
 sex VARCHAR(6) NOT NULL,
 age VARCHAR(4) ,
 PRIMARY KEY(id)
);
SELECT * FROM registered_passengers;
select COUNT(*) from registered_passengers;
DROP table registered_passengers;
-- Creating the Passenger trip details table
CREATE TABLE trip_details (
 id INT NOT NULL AUTO_INCREMENT,
 passenger_id INT NOT NULL,
 passenger_class INT NOT NULL ,
 passenger_ticket_no VARCHAR(50) NOT NULL,
 trip_fare DECIMAL(19,4) NOT NULL,
 cabin VARCHAR(20),
 number_of_parents_Children INT NOT NULL DEFAULT  0,
 number_0f_siblings_spouse    INT NOT NULL DEFAULT 0,
 embarkation_point VARCHAR(10) NOT NULL,
 PRIMARY KEY(id),
 FOREIGN KEY(passenger_id) REFERENCES registered_passengers(id)
);
SELECT * FROM trip_details;
DROP table trip_details;
select COUNT(*) from trip_details;

-- Creating Accident case table
CREATE TABLE accident_cases(
 id int not null auto_increment,
 passenger_id int not null,
 accident_status tinyint not null,
 primary key(id),
 foreign key(passenger_id) references registered_passengers(id)
);
Select * from accident_cases;
select COUNT(*) from accident_cases;
drop tables accident_cases;
-- Task 3 Transportation Data Query.

# 1. Total number of passengers who survived
	select count(*) from accident_cases where accident_status > 0;
	-- Answers => 342

# 2. total number of unsurvived passengers
  SELECT COUNT(*) FROM accident_cases WHERE accident_status = 0;
  -- Answers => 549

# 3. Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg
	SELECT full_name, sex from registered_passengers
	inner join trip_details on 
    registered_passengers.id = trip_details.passenger_id 
    where (age  < '27') and (embarkation_point = 
    ( "Q%"| "C%"));
    
# 4. Number of passengers who embarked at Southampton and survived
	SELECT count(*) from accident_cases left join trip_details on 
    accident_cases.passenger_id = trip_details.passenger_id where 
    accident_status > 0 and embarkation_point = 'S';
    -- Answers => 218;

    
-- total number of passengers who paid a fare greater than $100 and 
-- above the age of 35 with siblings or spouses on board
SELECT COUNT(*) FROM registered_passengers 
inner join trip_details on registered_passengers.id = trip_details.id
where trip_fare > 100 and age > '35' and number_0f_siblings_spouse > 0; 
    
    -- Anwser => 9



    
    