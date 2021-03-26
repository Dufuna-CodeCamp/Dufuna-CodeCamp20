/*QUERING THE TRANSPORT DATABASE*/

/*1) What is the total number of survived passengers*/
SELECT COUNT(*)
FROM accidents 
WHERE survived = 1;
/*RESULT = 342*/


/*2) What is the total number of passengers who did not survive*/
SELECT COUNT(*)
FROM accidents
WHERE survived = 0;
/*RESULT = 549*/

/*3) Get the  name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg*/
SELECT passengers.fullname, passengers.sex
FROM passengers
LEFT JOIN trips ON passengers.id = trips.passenger_id
WHERE age < 27 AND point_of_embarkation != 'S';

/*4) How many passengers that embarked at Southampton and survived*/
SELECT COUNT(*) 
FROM accidents
LEFT JOIN trips ON trips.passenger_id = accidents.passenger_id
WHERE point_of_embarkation = 'S' AND survived = 1;
/*RESULT = 218*/

/*5) Get the id, name and the total number of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board*/
SELECT passengers.id, passengers.fullname
FROM passengers
LEFT JOIN trips ON passengers.id = trips.passenger_id
WHERE trip_fare > 100 AND  age > 35 AND number_of_siblings_spouse != 0;

/*6) The total number of passengers who paid a fare greater than $100 and above the age of 35 with siblings or spouses on board*/ 
SELECT COUNT(*)
FROM passengers
LEFT JOIN trips ON passengers.id = trips.passenger_id
WHERE trip_fare > 100 AND age > 35 AND number_of_siblings_spouse != 0; 
/*RESULT = 9*/