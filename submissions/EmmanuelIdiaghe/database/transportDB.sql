/******************************************
Database for a Transport Company
***Creating the database
*/
create database transport_company;

use transport_company;

/*********************************
*** Creating the paassengers' info
*/
create table passengers (
	id int not null auto_increment,
    name_of_passenger varchar(100) not null,
    gender varchar(20) not null,
    age int,
    primary key(id)
);

select * from passengers;

/*********************************
*** Creating the trip_info
*/
create table trip_details (
	id int not null auto_increment,
    passenger_id int not null,
    class int not null,
    ticket_id varchar(50) not null,
    trip_fare decimal(10, 2) not null,
    cabin varchar(10),
    parents_or_children_aboard int not null,
    siblings_or_spouses_aboard int not null,
    embarkation_point varchar(50) not null,
    primary key(id),
    foreign key(passenger_id) references passengers(id)
);

select * from trip_details;

/*********************************
*** Creating the trip_status
*/
create table accident_status(
	id int not null auto_increment,
    passenger_id int not null,
    accident_status tinyint not null,
    primary key(id),
    foreign key(passenger_id) references passengers(id)
);

select * from accident_status;

/*********************************************
** Data Queries
*********************************************/
# 1. Total number of passengers who survived
select count(*) from accident_status where accident_status=1;
############# Answer: 290

# 2. Total number of passengers who did not survive
select count(*) from accident_status where accident_status=0;
############# Answer: 424

# 3. Name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg
select passengers.name_of_passenger, passengers.gender from passengers 
inner join trip_details on passengers.id = trip_details.passenger_id 
where age < 27 and embarkation_point like "Q%" or embarkation_point like "C%";

# 4. Number of passengers who embarked at Southampton and survived
select count(*) from accident_status 
inner join trip_details on accident_status.id = trip_details.passenger_id 
where accident_status = 1 and embarkation_point like "S%";
############# Answer: 202

# 5. ID, Name and Total Number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board
select passengers.id, passengers.name_of_passenger, COUNT(*) OVER () AS total_count from passengers 
inner join trip_details on passengers.id = trip_details.passenger_id 
where trip_fare > 100 and age > 35 and siblings_or_spouses_aboard > 0;