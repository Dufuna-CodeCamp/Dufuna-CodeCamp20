-- task two: Transportation Comapany {passenger track} database

-- creating the database
CREATE DATABASE transportation;
SHOW DATABASES;
USE transportation;

-- Creating Passenger table 
CREATE TABLE registeredPassengers (
 id INT NOT NULL AUTO_INCREMENT,
 fullName VARCHAR(50) NOT NULL,
 sex VARCHAR(6) NOT NULL,
 age VARCHAR(4) ,
 PRIMARY KEY(id)
);
SELECT * FROM registeredPassengers; 
DROP TABLE registeredpassengers;

-- Creating the Passenger trip details table
CREATE TABLE tripDetails (
 id INT NOT NULL AUTO_INCREMENT,
 passengerId INT NOT NULL,
 passengerClass INT NOT NULL ,
 passengerTicketNo VARCHAR(50) NOT NULL,
 tripFare DECIMAL(19,4) NOT NULL,
 cabin VARCHAR(20),
 numberOfParentsChildren INT NOT NULL DEFAULT  0,
 numberOfSiblingsSpouse INT NOT NULL DEFAULT 0,
 embarkationPoint VARCHAR(10) NOT NULL,
 PRIMARY KEY(id),
 FOREIGN KEY(passengerId) REFERENCES registeredPassengers(id)
);
SELECT * FROM tripDetails;
DROP TABLE tripdetails;

-- Creating Accident case table
CREATE TABLE accidentCases(
 id int not null auto_increment,
 passengerId int not null default(1),
 accidentStatus tinyint not null,
 primary key(id),
 foreign key(passengerId) references registeredPassengers(id)
);
DROP TABLE accidentcases;
SELECT * FROM accidentCases;


-- Task 3 Transportation Data Query.

# 1. Total number of passengers who survived
	select count(*) from accidentCases where accidentStatus > 0;
	-- Answers => 342

# 2. total number of unsurvived passengers
  SELECT COUNT(*) FROM accidentCases WHERE accidentStatus = 0;
  -- Answers => 549

# 3. Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg
	SELECT fullName, sex from registeredPassengers
	inner join tripDetails on 
    registeredpassengers.id = tripDetails.passengerId 
    where (age  < '27') and (embarkationPoint = 
    ( "Q%"| "C%"));
    
# 4. Number of passengers who embarked at Southampton and survived
	SELECT count(*) from accidentCases left join tripdetails on accidentcases.passengerId = tripdetails.passengerId where accidentStatus > 0 and embarkationPoint = 'S';
    -- Answers => 218;

# 5. Get the id, name and the total number of passengers 
-- who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board?
select registeredPassengers.id, registeredPassengers.fullName, COUNT(*) OVER () AS total_count
from registeredPassengers 
join tripDetails on tripDetails.passengerId = registeredPassengers.id
where tripFare > 100 and age > '35' and numberOfSiblingsSpouse != 0;

select count(*) from registeredpassengers left join tripdetails
on registeredpassengers.id = tripdetails.passengerId
where tripFare > 100 and numberOfSiblingsSpouse != 0 and age > '35';
    
-- total number of passengers who paid a fare greater than $100 and 
-- above the age of 35 with siblings or spouses on board
SELECT COUNT(*) FROM registeredpassengers 
inner join tripdetails on registeredpassengers.id = tripdetails.passengerId
where tripFare > 100 and age > '35' and numberOfSiblingsSpouse > 0; 
    
    



    
    