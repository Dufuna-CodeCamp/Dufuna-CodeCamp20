-- Total number of passengers who suvrvived
SELECT COUNT(survived) FROM accidents WHERE survived = 1;

-- Total number of passengers who didn not survive
SELECT COUNT(survived) FROM accidents WHERE survived = 0;


-- name and sex of passengers under 27 that embarked at Queenstown and Cherbourg
SELECT passengers.name, passengers.sex 
FROM passengers 
WHERE age < 27 
AND passengers.id IN (
	SELECT trips.passenger_id 
    FROM trips 
    WHERE trips.embarkation = "Q" 
    OR trips.embarkation = "C"
);


-- number of passengers who survived and point of embarkation was from Southampton
SELECT COUNT(survived) 
FROM accidents 
WHERE survived = 1 
AND accidents.passenger_id IN (
	SELECT trips.passenger_id
	FROM trips
	WHERE trips.embarkation = "S"
);


-- name, id and tottal number of passngers who paid a free greater than $100 and above age of 35 had siblings or spouse on board
select passengers.id, passengers.name from passengers where age > 35 and passengers.id in (
	select trips.passenger_id
	from trips 
	where trips.trip_fare > 100 
	and trips.number_of_siblings_spouse > 0
); 
-- total number
select count(*) from (select passengers.id from passengers where age > 35 and passengers.id in (
	select trips.passenger_id
	from trips 
	where trips.trip_fare > 100 
	and trips.number_of_siblings_spouse > 0
)) as total_number;