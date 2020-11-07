-- created database
CREATE DATABASE transportation_company;
USE transportation_company;

-- created table passengers
CREATE TABLE passengers (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(30) NOT NULL,
	sex VARCHAR(10) NOT NULL,
	age INT,
	PRIMARY KEY (id)
);

-- created table trips
CREATE TABLE trips (
	id INT NOT NULL AUTO_INCREMENT,
	class TINYINT NOT NULL,
    ticket_number VARCHAR(20) NOT NULL,
    trip_fare DECIMAL(10,5) NOT NULL,
    cabin VARCHAR(10),
    passenger_id INT NOT NULL,
    number_of_parents_children INT NOT NULL,
    number_of_siblings_spouses INT NOT NULL,
    embarkation_point VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

-- created table accidents
CREATE TABLE accidents (
	id INT NOT NULL AUTO_INCREMENT,
    passenger_id INT NOT NULL,
    survived TINYINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) REFERENCES passengers (id)
);

-- total number of pasengers that survived

SELECT COUNT(id) FROM accidents WHERE survived = '1';
-- RESULT = 342

-- total number of passengers that did not survive

SELECT COUNT(id) FROM accidents WHERE survived = '0';
-- RESULT = 549

-- Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg

SELECT passengers.full_name, passengers.sex
FROM passengers LEFT JOIN trips
ON passengers.id = trips.id
WHERE age < '27' AND embarkation_point != 'S';

-- total number of passengers that embarked at Southampton and survived

SELECT COUNT(accidents.id)
FROM accidents LEFT JOIN trips
ON trips.id = accidents.id
WHERE survived = '1' AND embarkation_point = 'S';
-- RESULT = 218

-- id, name and the total number of passengers who paid a fare greater than $100 and
-- above the age of 35 and had siblings or spouses on board

SELECT passengers.id, passengers.full_name
FROM passengers LEFT JOIN trips
ON passengers.id = trips.id
WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouses > 0;

-- total number
SELECT COUNT(passengers.id)
FROM passengers LEFT JOIN trips
ON passengers.id = trips.id
WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouses > 0;
-- RESULT = 5
