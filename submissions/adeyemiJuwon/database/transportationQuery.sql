USE transportation;

-- total number of passengers that survived
SELECT COUNT(*) 
FROM accidents 
WHERE survived = 1;
-- answer = 342

-- total number of passengers that did not survive
SELECT COUNT(*) 
FROM accidents 
WHERE survived = 0;
-- answer = 549

-- the name and sex of passengers under the age of 27 that embarked Queenstown and Cherbourg
SELECT passengers.full_name, passengers.sex 
FROM passengers 
LEFT JOIN trips 
ON passengers.id = trips.passenger_id
WHERE age < 27 
AND point_of_embarkation != 'S';

-- the total number of passengers that embarked at Southhampton and survived
SELECT COUNT(*) 
FROM accidents 
LEFT JOIN trips 
ON trips.passenger_id = accidents.passenger_id 
WHERE point_of_embarkation = 'S' 
AND survived = 1;
-- answer = 218

-- The id and name of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board
SELECT passengers.id, passengers.full_name 
FROM passengers
LEFT JOIN trips 
ON passengers.id = trips.passenger_id
WHERE trip_fare > 100 
AND age > 35 
AND number_of_siblings_spouses != 0;

-- the total number of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board
SELECT COUNT(*)
FROM passengers
LEFT JOIN trips 
ON passengers.id = trips.passenger_id
WHERE trip_fare > 100 
AND age > 35 
AND number_of_siblings_spouses != 0;
-- answer = 9