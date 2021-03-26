/*The following query is used to create a table for storing passanger details*/
use trips;
create table passangers(
id int not null auto_increment,
fullname varchar(100) not null,
sex varchar(10) not null,
age varchar(11),
primary key (id)
);

/*The following query is used to create a table for storing trip details*/
/*It references the passanger table  via passanger ID*/
use trips;
create table trip_details(
id int not null auto_increment,
passanger_class int(11) not null,
ticket_number varchar (50) not null,
trip_fare decimal(10,2)not null,
cabin varchar (50),
parents_childrens int (11),
spouses_siblings int (11),
embarkation_point varchar(100) not null,
passanger_id int not null,
primary key(id),
foreign key(passanger_id) references passangers(id)
);

/*The following query is used to create a table for storing information about accidents*/
/*It references the passanger table via passanger ID*/
create table accidents(
id int not null auto_increment,
status tinyint (1) not null,
passanger_id int not null,
primary key(id),
foreign key (passanger_id) references  passangers(id)
);