/** Total number of passengers who suvrvived **/
SELECT COUNT(survived) FROM accidents WHERE survived = 1;
/** answer: 342 **/

/** Total number of passengers who did not survive **/
SELECT COUNT(survived) FROM accidents WHERE survived = 0;
/** answer: 549 **/

/** name and sex of passengers under 27 that embarked at Queenstown and Cherbourg **/
SELECT passengers.fullname, passengers.sex 
FROM passengers 
LEFT JOIN trips 
ON passengers.passenger_id = trips.passenger_id
WHERE age < 27 
AND point_of_embarkation != 'S';

/** number of passengers who survived and point of embarkation was from Southampton **/
SELECT COUNT(*) 
FROM accidents
LEFT JOIN trips 
ON accidents.passenger_id = trips.passenger_id 
WHERE trips.point_of_embarkation = 'S' 
AND accidents.survived = 1;
/** answer: 218 **/

/** name, id and total number of passngers who paid a fee greater than $100 and above age of 35 had siblings or spouse on board **/
SELECT passengers.passenger_id, passengers.fullname 
FROM passengers
LEFT JOIN trips 
ON passengers.passenger_id = trips.passenger_id
WHERE trips.trip_fare > 100 
AND trips.number_of_siblings_spouses > 0 
AND passengers.age > 35;

/** the total number of passengers who paid a fee greater than $100 and above the age of 35 with siblings or spouses on board **/
SELECT COUNT(*) FROM passengers
LEFT JOIN trips
ON passengers.passenger_id = trips.passenger_id
WHERE trip_fare > 100
AND age > 35 
AND number_of_siblings_spouses  != 0;
/** answer: 9 **/