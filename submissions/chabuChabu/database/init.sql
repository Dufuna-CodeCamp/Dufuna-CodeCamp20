/*This query creates the categories table*/
use kwathu;
create table categories(
id int not null auto_increment,
category_name varchar(150) not null,
primary key(id)
);

/*This query creates the administrators table*/

create table administrators(
id int not null auto_increment,
fullname varchar(100) not null,
passwrd  char(50) not null,
phone_number varchar (150) not null,
primary key(id)
);

/*This query creates the customers table*/

create table customers(
id int not null auto_increment,
first_name varchar(100) not null,
email varchar (255) not null,
passwrd  char(50) not null,
primary key(id)
);

/*This query creates the customers table*/
/*This query table refereces both the admininstrator and category tables*/

create table products(
id int not null auto_increment,
product_name varchar(100) not null,
product_description varchar(250) not null,
image blob not null,
unit_price decimal(10,2) not null,
stock_level INT UNSIGNED not null,
product_status ENUM('in stock', 'low stock', 'out of stock') NOT NULL,
category_id int(11) not null,
administrator_id int(11) not null,
primary key(id),
foreign key(category_id) references categories(id),
foreign key(administrator_id) references administrators(id)
);

/*This query creates the addresses table*/
/*This query table refereces customer table*/

create table addresses(
id int not null auto_increment,
street_address varchar(150) not null,
city varchar(150) not null,
state varchar(150) not null,
zip_code varchar(150) not null,
country varchar(150) not null,
phone_number varchar(150) not null,
customer_id int(11) not null,
primary key(id),
foreign key(customer_id) references customers(id)
);

/*This query creates the orders table*/
/*This query table refereces customer table*/

create table orders(
id int not null auto_increment,
amount decimal(10,2) not null,
order_date datetime,
customer_id int (11),
primary key (id),
foreign key(customer_id) references customers(id)
);

/*This query creates the order items table*/
/*This query table refereces both the orders and product tables*/

create table order_items (
id int not null auto_increment,
unit_price decimal(10,2) not null,
total_amount decimal(10,2) not null,
quantity varchar(150),
order_id int(11) not null,
product_id int(11) not null,
primary key(id),
foreign key(order_id) references orders(id),
foreign key(product_id) references products(id)
);