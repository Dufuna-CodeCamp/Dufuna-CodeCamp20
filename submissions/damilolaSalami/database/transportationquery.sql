/*Total Number of passengers who survived*/
SELECT 
    COUNT(*)
FROM
    accident_cases
WHERE
    survived = 1;
/*Total number of passenges that survived = 342 Passengers*/


/*Total Number of passengers who didn't survived*/
SELECT 
    COUNT(*)
FROM
    accidents_cases
WHERE
    survived = 0;
/*Total number of passengers that didnt survive is 549 passengers*/


/*The names and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg*/
SELECT 
    passengers.fullname, passengers.sex
FROM
    passengers
        LEFT JOIN
    passengers_details ON passengers.id = passengers_details.passengers_id
WHERE
    age < 27 AND point_of_embarkation != 'S';
    
    
/*The total number Southampton passengers that survived*/
SELECT 
    COUNT(*)
FROM
    accident_cases
        LEFT JOIN
    passengers_details ON passengers_details.passengers_id = accident_cases.passengers_id
WHERE
    point_of_embarkation = 'S'
        AND survived = 1;
/*218 passengers survived*/


/*The id, name and the total number of passengers who paid a far greater than $100 and above the age of 35 had siblings or spouses on board*/
SELECT 
    passengers.id, passengers.full_name
FROM
    passengers
        LEFT JOIN
    passengers_details ON passengers.id = passengers_details.passengers_id
WHERE
    trip_fare > 100 AND age > 35
        AND number_of_siblings_or_spouses_abroad != 0;


SELECT 
    COUNT(*)
FROM
    passengers
        LEFT JOIN
    passengers_details ON passengers.id = passengers_details.passenger_id
WHERE
    trip_fare > 100 AND age > 35
        AND number_of_siblings_or_spouses_abroad != 0;
/*9 passengers paid a far greater than $100 and above the age of 35 had siblings or spouses on board*/