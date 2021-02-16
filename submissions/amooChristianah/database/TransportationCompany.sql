create DATABASE TRANSPORTATION;
USE TRANSPORTATION;

-- creating the registered passengers 

CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR(30) NOT NULL,
sex VARCHAR(10) NOT NULL,
age VARCHAR(10),
PRIMARY KEY(id)
);

select * from passengers;

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

-- creating accident case table 

CREATE TABLE accident_cases (
id INT NOT NULL AUTO_INCREMENT,
passenger_id INT NOT NULL,
accident_status TINYINT(1) NOT NULL,
PRIMARY KEY (id),
foreign key (passenger_id) references passengers(id)
);

select * from accident_cases
