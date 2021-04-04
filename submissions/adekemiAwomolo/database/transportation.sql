CREATE DATABASE transport;
/*SHOW DATABASES;*/
USE transport;

/*create passengers table*/
CREATE TABLE passengers(
id INT NOT NULL AUTO_INCREMENT,
fullname VARCHAR(100) NOT NULL,
sex VARCHAR(50) NOT NULL,
age VARCHAR(20) ,
PRIMARY KEY (id)
);


/*create passengers details table*/
CREATE TABLE passangers_details(
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
passengers_class INT NOT NULL,
passengers_ticket_number VARCHAR(200) NOT NULL,
trip_fare DECIMAL(9,2) NOT NULL,
assigned_cabins VARCHAR(200),
numbers_of_parents_children_aboard INT NOT NULL,
numbers_of_sibings_and_spouses_aboard INT NOT NULL,
point_of_embarkation VARCHAR(200) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(passengers_id) REFERENCES passengers(id)
);

/*accident table*/
CREATE TABLE trip_accidents(
id INT NOT NULL AUTO_INCREMENT,
passengers_id INT NOT NULL,
passengers_survived BOOLEAN NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(passengers_id) REFERENCES passengers(id)
);
