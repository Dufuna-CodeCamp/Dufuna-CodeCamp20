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

select * from trip_details order by ticket_id asc;

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