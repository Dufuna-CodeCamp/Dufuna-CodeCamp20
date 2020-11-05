-- total number of passengers that survived
SELECT COUNT(*) FROM accidents WHERE survived = 1;

-- total number of passengers that did not survive
SELECT COUNT(*) FROM accidents WHERE survived = 0;

-- the name and sex of passengers under the age of 27 that embarked Queenstown and Cherbourg
SELECT passengers.fullname, passengers.sex FROM passengers 
LEFT JOIN travel_details ON passengers.id = travel_details.passengers_id
WHERE age < 27 AND embarkation_point != 'S';

-- the total number of passengers that embarked at Southhampton and survived
SELECT COUNT(*) FROM accidents 
LEFT JOIN travel_details ON travel_details.passengers_id = accidents.passengers_id 
WHERE embarkation_point = 'S' AND survived = 1;

-- the id and name of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board
SELECT passengers.id, passengers.fullname FROM passengers
LEFT JOIN travel_details ON passengers.id = travel_details.passengers_id
WHERE trip_fare > 100 AND age > 35 AND siblings_or_spouse_abroad != 0;

-- the total number of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board
SELECT COUNT(*) FROM passengers
LEFT JOIN travel_details ON passengers.id = travel_details.passengers_id
WHERE trip_fare > 100 AND age > 35 AND siblings_or_spouse_abroad != 0;