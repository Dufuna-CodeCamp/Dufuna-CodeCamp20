-- Total number of passengers who survived
SELECT count(*)
FROM accidents
WHERE survived =1;
-- Result = 342

-- Total number of passengers who did not survive
SELECT count(*)
FROM accidents
WHERE survived =0;
-- Result = 549

-- get name and sex of passengers under age 27 who embarked at Queenstown and Cherburg
SELECT passengers.fullname, passengers.sex
FROM passengers
LEFT JOIN trips
ON passengers.passenger_id = trips.passenger_id
WHERE age <27
AND point_of_embarkation != "s";

-- number of passengers who embarked at southampton and survived
SELECT count(*)
FROM accidents
LEFT JOIN trips
ON  accidents.passenger_id = trips.passenger_id
WHERE trips.point_of_embarkation ="s"
AND accidents.survived ="1";
-- Result = 218

-- get id and name of total number of passengers who paid a fare greater than $100 and above age 35 and had siblings or spouse on board
SELECT passengers.passenger_id, passengers.fullname
FROM passengers
LEFT JOIN trips
ON passengers.passenger_id = trips.passenger_id
WHERE trip_fare > 100
AND number_of_siblings_spouses > 0
AND passengers.age > 35;

-- get total number of passengers who paid a fare greater than $100 and above age 35 and had siblings or spouse on board
SELECT count(*)
FROM passengers
LEFT JOIN trips
ON passengers.passenger_id = trips.passenger_id
WHERE trip_fare > 100
AND number_of_siblings_spouses > 0
AND passengers.age > 35;
-- Result = 9