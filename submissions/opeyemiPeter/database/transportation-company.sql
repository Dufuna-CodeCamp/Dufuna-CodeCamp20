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
 age INT,
 PRIMARY KEY(id)
);
SELECT * FROM registeredPassengers; 


-- Creating the Passenger trip details table
CREATE TABLE tripDetails (
 id INT NOT NULL AUTO_INCREMENT,
 passengerId INT NOT NULL,
 passengerClass INT NOT NULL,
 passengerTicketNo VARCHAR(20) NOT NULL,
 tripFare DECIMAL(19,4) NOT NULL,
 cabin VARCHAR(20),
 numberOfParentsChildren INT NOT NULL DEFAULT  0,
 numberOfSiblingsSpouse INT NOT NULL DEFAULT 0,
 embarkationPoint VARCHAR(255) NOT NULL,
 PRIMARY KEY(id),
 FOREIGN KEY(passengerId) REFERENCES registeredPassengers(id)
);

SELECT * FROM tripDetails;

-- Creating Accident case table
CREATE TABLE accidentCases(
 id int not null auto_increment,
 passengerId int not null,
 accidentStatus tinyint not null,
 primary key(id),
 foreign key(passengerId) references registeredPassengers(id)
)

SELECT * FROM accidentCases;
