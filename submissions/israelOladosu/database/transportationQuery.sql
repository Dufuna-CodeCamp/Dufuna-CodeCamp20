-- Total number of passengers who suvrvived
SELECT COUNT(survived) FROM accidents WHERE survived = 1;
-- answer: 269


-- Total number of passengers who didn not survive
SELECT COUNT(survived) FROM accidents WHERE survived = 0;
-- answer: 419

-- name and sex of passengers under 27 that embarked at Queenstown and Cherbourg
SELECT passengers.name, passengers.sex 
FROM passengers 
LEFT JOIN trips 
ON passengers.id = trips.passenger_id
WHERE age < 27 
AND trips.embarkation = "Q" 
OR trips.embarkation = "C";


-- number of passengers who survived and point of embarkation was from Southampton
SELECT COUNT(*) 
FROM accidents
LEFT JOIN trips 
ON accidents.passenger_id = trips.passenger_id 
WHERE trips.embarkation = 'S' 
AND accidents.survived = 1;
-- answer: 187


-- name, id and tottal number of passngers who paid a free greater than $100 and above age of 35 had siblings or spouse on board
SELECT passengers.id, passengers.name 
FROM passengers
LEFT JOIN trips 
ON passengers.id = trips.passenger_id
WHERE trips.trip_fare > 100 
AND trips.number_of_siblings_spouse > 0 
AND passengers.age > 35; 

-- total number
SELECT COUNT(passenger_id) 
FROM passengers
LEFT JOIN trips 
ON passengers.id = trips.passenger_id
WHERE trips.trip_fare > 100 
AND trips.number_of_siblings_spouse > 0 
AND passengers.age > 35;
-- answer: 7