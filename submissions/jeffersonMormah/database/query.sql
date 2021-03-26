-- total number of survived passengers
SELECT COUNT(*) FROM accidents WHERE survived = 1;

-- Answer = 342


-- total number of unsurvived passengers
SELECT COUNT(*) FROM accidents WHERE survived = 0;

-- Answer = 549

-- name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg
SELECT passengers.firstname, passengers.lastname, passengers.sex FROM passengers
LEFT JOIN trips ON passengers.id = trips.passenger_id
WHERE age < 27 AND point_of_embarkation != 'S';

-- total number of the passengers that embarked at Southampton and survived
SELECT COUNT(*) FROM accidents
LEFT JOIN trips ON trips.passenger_id = accidents.passenger_id
WHERE point_of_embarkation = 'S' AND survived = 1;

-- Answer = 218

-- id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board
SELECT passengers.id, passengers.firstname, passengers.lastname FROM passengers
LEFT JOIN trips ON passengers.id = trips.passenger_id
WHERE trip_fare > 100 AND  age > 35 AND siblings_spouse_aboard != 0;

-- total number of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board
SELECT COUNT(*) FROM passengers
LEFT JOIN trips ON passengers.id = trips.passenger_id
WHERE trip_fare > 100 AND age > 35 AND siblings_spouse_aboard != 0; 

-- Answer = 9
