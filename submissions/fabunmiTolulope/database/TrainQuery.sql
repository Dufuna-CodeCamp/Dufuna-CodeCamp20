-- This Querying is in line with the recent train mishap

USE lyc_airline;


-- 1) What is the total number of passengers who survived?
SELECT COUNT(*) AS 'accident_survivals'
FROM accident_records
WHERE survival_status = 1;
-- RESULT =  342

-- 2) What is the total number of passengers who did not survive?
SELECT COUNT(*) AS 'accident_deaths'
FROM accident_records
WHERE survival_status != 1;
-- RESULT = 549


-- 3) Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?    
SELECT passengers_details.fullname, passengers_details.sex
FROM passengers_details
JOIN travel_details 
ON passengers_details.id = travel_details.passenger_id
WHERE age < 27 
AND embarkation_point = ('Q'|'S');

    
-- 4) How many of the passengers that embarked at Southampton survived?
SELECT COUNT(*) AS 'southampton_survivals'
FROM travel_details 
JOIN accident_records
ON accident_records.passenger_id = travel_details.passenger_id
WHERE travel_details.embarkation_point = "S" 
AND accident_records.survival_status = 1;
-- RESULT = 218

-- 5) Get the id and names of total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board?
SELECT passengers_details.passenger_id, passengers_details.full_name
FROM passengers_details
JOIN travel_details
ON travel_details.passenger_id = passengers_details.passenger_id
WHERE trip_fare > 100 
AND passengers_details.age > 35 
AND siblings_or_spouses_aboard > 0;
 
 
-- 5b) Total Number of Passengers whose fare are above 100 and are above 35 years
SELECT COUNT(passengers_details.passenger_id)
FROM passengers_details
JOIN travel_details
ON travel_details.passenger_id = passengers_details.passenger_id
WHERE trip_fare > 100 
AND passengers_details.age > 35 
AND siblings_or_spouses_aboard > 0;
-- RESULT = 9