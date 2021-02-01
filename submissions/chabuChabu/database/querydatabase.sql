/*QUESTION  1*/
use trips;
select count(*) as survivors
from survival
where survived = 1;

/*Answer: 342 passengers survived*/

/*QUESTION 2 */
select count(*) as died
from survival
where survived = 0;

/*Answer: 549 passengers died*/

/* QUESTION 3*/
select passengers.Name,passengers.sex
from passengers ,traveldetail 
where passengers.PassengerId = traveldetail.PassengerId 
and passengers.Age < 27
and (traveldetail.Embarked  = 'C'or traveldetail.Embarked = 'Q');

/* Name and sex of passengers who embarked at Queenstown and Cherbourg*/

/*QUESTION 4**/

select count(*) as survived
from traveldetail,survival
where traveldetail.PassengerId = survival.PassengerId and traveldetail.Embarked = 'S' 
and survival.Survived = 1;

/*Answer: 218 passangers survived*/

/*QUESTION  5**/
/* Names and IDs of travellers who:
     a)Were aged over 35 years,
     b)Paid a fare over 100 
     c)Had siblings or spouses on board*/
select passengers.PassengerId,passengers.Name
from passengers right join traveldetail
on passengers.PassengerId = traveldetail.PassengerId
where passengers.Age > 35
and (traveldetail.Fare > 100) and (traveldetail.SibSp > 0 );

/* 9 travellers paid a fare greater than 100,Were aged over 35 years,paid a fare over 100 and
had siblings or spouses on board*/
select count(*) as total
from passengers right join traveldetail on passengers.PassengerId = traveldetail.PassengerId
where passengers.Age > 35
and (traveldetail.Fare > 100) and (traveldetail.SibSp > 0);






