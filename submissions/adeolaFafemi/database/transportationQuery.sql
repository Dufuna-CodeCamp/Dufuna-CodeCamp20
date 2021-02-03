/****Total Number of Passengers that survived****/
SELECT COUNT(*) FROM accidents WHERE survived = 1;
/**** The total number of passengers that survived is 342 passengers****/

/****Total Number of Passengers that didn't survive****/
SELECT COUNT(*) FROM accidents WHERE survived = 0;
/**** The total number of passengers that didn't survive is 549 passengers****/

/*** It gives the distinct points of embarkation in trips which is 'S', 'Q' and 'C'*****/
SELECT DISTINCT point_of_embarkation FROM trips;

/**** Gives the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherborg****/
SELECT passengers.full_name, passengers.sex 
FROM passengers LEFT JOIN trips 
ON passengers.id = trips.passenger_id WHERE age<27 AND point_of_embarkation !='S';

/****** The total number of passengers that embarked at Southampton that survived*****/
SELECT COUNT(*) FROM accidents LEFT JOIN trips
 ON accidents.passenger_id = trips.passenger_id
 WHERE point_of_embarkation ='S' AND survived = 1;
/****** this is 218 passengers*****/

/***** The id, name and total number of passengers who paid a fare greater 
than $100 and above the age of 35 and had siblings and spouses on board*****/
SELECT passengers.id,passengers.full_name 
FROM passengers LEFT JOIN trips 
ON passengers.id = trips.passenger_id 
WHERE trip_fare>100 AND  age > 35 AND number_of_siblings_spouses_aboard != 0;

SELECT COUNT(*)
FROM passengers LEFT JOIN trips 
ON passengers.id = trips.passenger_id 
WHERE trip_fare>100 AND  age > 35 AND number_of_siblings_spouses_aboard != 0;
/***The total number is 9 passengers***/
