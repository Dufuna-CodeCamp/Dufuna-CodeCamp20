/*QUESTION  1*/
use trips;
select count(*) as survivors
from accidents
where status = 1;

/*Answer: 342 passengers survived*/

/*QUESTION 2 */
select count(*) as died
from accidents
where status = 0;

/*Answer: 549 passengers died*/

/* QUESTION 3*/
select passangers.fullname,passangers.sex
from passangers ,trip_details 
where passangers.id = trip_details.passanger_id
and passangers.age < 27
and (trip_details.embarkation_point  = 'C'or trip_details.embarkation_point = 'Q');

/* Name and sex of passengers who embarked at Queenstown and Cherbourg*/

/*QUESTION 4**/
select count(*) as survived
from trip_details,accidents
where trip_details.passanger_id = accidents.passanger_id and trip_details.embarkation_point = 'S' 
and accidents.status = 1;

/*Answer: 218 passangers from Southampton survived*/

/*QUESTION  5**/
/* Query below returns names and id of travellers who:
     a)Were aged over 35 years,
     b)Paid a fare over 100 
     c)Had siblings or spouses on board*/
select passangers.id,passangers.fullname
from passangers right join trip_details
on passangers.id = trip_details.passanger_id
where passangers.age > 35
and (trip_details.trip_fare > 100) and (trip_details.spouses_siblings > 0 );

/* 9 travellers paid a fare greater than 100,Were aged over 35 years,paid a fare over 100 and
had siblings or spouses on board*/
select count(*) as total
from passangers right join trip_details on passangers.id = trip_details.passanger_id
where passangers.age > 35
and (trip_details.trip_fare > 100) and (trip_details.spouses_siblings > 0);