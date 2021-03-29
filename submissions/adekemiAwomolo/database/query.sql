--Total numbers of Survivals
SELECT count(*) FROM accidents WHERE passengers_survived = 1; 
--342
--Total numbers of passengers who did not survive the accidents
SELECT count(*) FROM accidents WHERE passengers_survived = 0;
--549
--Name and sex of Passengers under the age of 27 that embarked Queenstown and Cherbourg
SELECT passengers.full_name, passengers.sex FROM passengers LEFT JOIN passengers_details ON passengers.id = passengers_details.passengers_id
WHERE age < 27 AND point_of_embarkation != "s";

--the number of people who embarked to Southhampton and passengers_survived
SELECT COUNT(*) FROM accidents LEFT JOIN passengers_details ON accidents.passengers_id = passengers_details.passengers_id
WHERE point_of_embarkation = 's' AND passengers_survived > 0;
--218

--Id, name and the total number of passengers who paid  a fare greater than 100 and aged 35 wth siblings/spouses aboard
SELECT passengers.id,passengers.full_name FROM passengers LEFT JOIN passengers_details ON passengers.id
=passengers_details.passengers_id WHERE trip_fare >100 AND numbers_of_siblings_and_spouses_aboard >0 AND passengers.age >35;
--Total number of passengers who paid above 100 and had siblings and spouses aboard.
SELECT COUNT(*) FROM passengers LEFT JOIN passengers_details ON passengers.id =passengers_details.passengers_id
WHERE trip_fare >100 AND numbers_of_siblings_and_spouses_aboard >0 AND passengers.age >35;
--9

