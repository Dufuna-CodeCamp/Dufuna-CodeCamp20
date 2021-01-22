-- Making use of the database trans_company
use trans_company;

-- QUESTION 1: The number of passengers who survived
select count(*)
from survivals
where survived_or_not = 1;
-- 342

-- QUESTION 2:The number of passengers who did not survive
select count(*)
from survivals
where survived_or_not = 0;
-- 549

-- QUESTION 3:The full name and sex of passengers under 27 who embarked at Queenstown and Cherbourg
select full_name,sex
from passengers
inner join trips
on passengers.passenger_id = trips.passenger_id
where age < 27
and (point_of_embarkation = "C" or point_of_embarkation = "Q");

-- QUESTION 4: The number of passengers who embarked at Southampton that survived
select count(*)
from survivals
right join trips
on trips.passenger_id = survivals.passenger_id
where survived_or_not = 1 
and point_of_embarkation = "S";
-- 218

-- QUESTION 5:The id, name and total number of passengers who paid a fare greater than 100 and above
-- the age of 35 and have siblings or spouses on board
select passengers.passenger_id,passengers.full_name
from passengers
left join trips
on passengers.passenger_id = trips.passenger_id
where trip_fare > 100
and age > 35 
and no_of_siblings_or_spouses_abroad > 0;

select count(*)
from passengers
inner join trips
on passengers.passenger_id = trips.passenger_id
where trip_fare > 100
and age > 35 
and no_of_siblings_or_spouses_abroad > 0;
-- 9