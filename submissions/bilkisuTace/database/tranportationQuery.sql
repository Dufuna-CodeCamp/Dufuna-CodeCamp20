-- 1. The total number of passengers who survived:
SELECT COUNT(*) as Survivors
FROM accidents
WHERE status = 1;
-- Result: 342

-- 2. The total number of passengers who did not survive: 
SELECT COUNT(*) as Deaths
FROM accidents
WHERE status = 0;
-- Result: 549

-- 3. The name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg:
SELECT passengers.full_name, passengers.sex 
FROM passengers
JOIN trips
ON passengers.id = trips.passenger_id
WHERE age < 27 
AND (point_of_embarkation = 'C' OR point_of_embarkation = 'Q');

-- 4. The number of passengers that embarked at Southampton who survived:
SELECT COUNT(*) as Survivors_at_Southampton
FROM accidents
JOIN trips
ON  accidents.passenger_id = trips.passenger_id 
WHERE  point_of_embarkation = 'S' 
AND status = 1;
-- Result: 218

-- 5a. The id, name of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board:
SELECT passengers.id, passengers.full_name
FROM passengers
JOIN trips
ON passengers.id = trips.passenger_id
WHERE trip_fare > 100
AND age > 35
AND no_siblings_spouses > 0;

-- 5b. The total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board:
SELECT COUNT(*)
FROM passengers
JOIN trips
ON passengers.id = trips.passenger_id
WHERE trip_fare > 100
AND age > 35
AND no_siblings_spouses > 0;
-- Result: 9