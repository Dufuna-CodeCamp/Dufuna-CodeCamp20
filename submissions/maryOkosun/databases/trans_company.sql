-- created  a database called TRANS_COMPANY 
CREATE DATABASE trans_company; 
USE trans_company;

-- created a table called PASSENGERS 
CREATE TABLE passengers(
    passenger_id int not null auto_increment,
	full_name varchar(100) not null,
    sex varchar(10) not null,
    age int null,
	primary key(passenger_id)
);
show columns from passengers;

-- created a table called TRIPS
CREATE TABLE trips(
    trip_id int not null auto_increment,
	passenger_class int not null,
    ticket varchar(50) not null,
    trip_fare decimal(10,2) not null,
    assigned_cabin varchar(100) null,
    no_of_parents_or_children_abroad int not null,
    no_of_siblings_or_spouses_abroad int not null,
    point_of_embarkation varchar(100) not null,
    passenger_id int not null,
	primary key(trip_id),
    foreign key(passenger_id) references passengers(passenger_id)
);
show columns from trips;

-- created a table called SURVIVALS
CREATE TABLE survivals(
    survival_id int not null auto_increment,
	survived_or_not boolean not null,
    passenger_id int not null,
    primary key(survival_id),
    foreign key(passenger_id) references passengers(passenger_id)
);
show columns from survivals;