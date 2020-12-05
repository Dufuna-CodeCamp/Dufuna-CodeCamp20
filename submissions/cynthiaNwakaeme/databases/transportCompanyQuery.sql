USE travel_company;
-- 1) What is the total number of passengers who survived?
-- OUTPUT =  342
SELECT COUNT(*) AS 'accident_survivals'
FROM accidents
WHERE survival_status = 1;

-- 2) What is the total number of passengers who did not survive?
-- OUTPUT = 549
SELECT COUNT(*) AS 'accident_death'
FROM accidents
WHERE survival_status != 1;

-- 3) Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?
SELECT full_name, sex FROM passengers p
JOIN trips t 
	ON p.passenger_id = t.passenger_id
WHERE (age < 27) 
    AND (embarkation_point = ('Q'|'S'));
    
-- 4) How many of the passengers that embarked at Southampton survived?
-- OUTPUT =218
SELECT COUNT(*) AS 'southampton_survivals'
FROM trips t 
JOIN accidents a
	ON a.passenger_id = t.passenger_id
WHERE embarkation_point = "S" AND survival_status = 1;

-- 5) Get the id, name and the total number of passengers who paid a fare greater 
	-- than $100 and above the age of 35 had siblings or spouses on board?
    -- OUTPUT = 8
SELECT p.passenger_id, full_name
FROM passengers p
JOIN trips t
	ON t.passenger_id = p.passenger_id
WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouses > 0;

-- 5b) Total Number of Passengers whose fare are above 100 and are above 35 years
-- OUTPUT = 9
SELECT COUNT(p.passenger_id) FROM passengers p
JOIN trips t
	ON t.passenger_id = p.passenger_id
WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouses > 0;