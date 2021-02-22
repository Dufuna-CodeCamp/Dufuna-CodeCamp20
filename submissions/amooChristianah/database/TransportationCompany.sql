create DATABASE TRANSPORTATION;
USE TRANSPORTATION;

-- creating the registered passengers 

CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(255) NOT NULL,
sex VARCHAR(10) NOT NULL,
age VARCHAR(10),
PRIMARY KEY(id)
);

select * from passengers;
select count(*) from passengers;


-- creating tables for passengers Trip details

CREATE TABLE trip_details(
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
passengers_class INT NOT NULL,
passengers_ticket VARCHAR(255) NOT NULL,
trip_fare decimal(10,2) NOT NULL,
cabin VARCHAR(25) NOT NULL,
number_of_parents_children INT NOT NULL,
number_of_siblings_spouse INT NOT NULL,
embarkation_point VARCHAR(255) NOT NULL,
PRIMARY KEY (id),
foreign key (passengers_id) references passengers(id)
);

select * from trip_details;
select count(*) from trip_details;

-- creating accident case table 

CREATE TABLE accident_cases (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
accident_status TINYINT NOT NULL,
PRIMARY KEY (id),
foreign key (passenger_id) references passengers(id)
);

select * from accident_cases;
select count(*) from accident_cases;


-- QUERYING THE TRANSPORT DATABASE --
#1. total number of survived passengers
	SELECT COUNT(*) FROM accident_cases WHERE accident_status > 0;
    -- Result = 342
    
#2. total number of passengers who did not survive
	SELECT COUNT(*) FROM accident_cases WHERE accident_status = 0;
    -- Result = 549
    
#3. Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherboug
	SELECT passengers.full_name, passengers.sex FROM passengers 
    LEFT JOIN trip_details ON passengers.id = trip_details.passengers_id
    WHERE age < 27 and embarkation_point != 'S';
    
#4. Numbers of passengers that embarked at Southampson and survived
	SELECT COUNT(*) FROM accident_cases
    LEFT JOIN trip_details ON accident_cases.id = trip_details.passengers_id 
    WHERE accident_status > 0 AND embarkation_point like 'S%';
    -- Result = 218
    
#5. The id, name and the total number of passengers who paid a fare greater than $100 and above at the age od 35 with siblings and spouses on board
	SELECT passengers.id, passengers.full_name FROM passengers 
    LEFT JOIN trip_details ON trip_details.id = passengers.id
    WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouse !=0; 
    
#5b. Total number of passengers who paid a fare greater than $100 and are above the age of 35 with siblings or spouses on board
	SELECT COUNT(*) FROM passengers 
    LEFT JOIN trip_details on  trip_details.id = passengers.id 
    WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouse !=0;
    -- Result = 9 
    
