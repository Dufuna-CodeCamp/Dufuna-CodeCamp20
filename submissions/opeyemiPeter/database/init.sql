-- Database task 1
-- DARABASE FOR CLEARPATH
-- Tables
-- 1. Admin table 2 Categories table 3. product table 4. customer table 5. Address table 6. orders table 7. order_item tables;

create database clearpathShop;
show databases;
use clearpathshop;

-- 1. admin table 
-- table creation
create table admin( 
		adminId int not null auto_increment,
		adminName varchar(50) not null,
		adminEmail varchar(50) not null,
		adminPassword varchar(50) not null,
		adminPhoneNumber varchar(50) not null,
		primary key (adminId)
);

-- populating the admin table with values
insert into admin (adminName, adminEmail, adminPassword, adminPhoneNumber) 
values
		('opeyemipeter','opp@gmail.com','opeyemipeter','+2348146412566'),
		('Danny thompson','DannyT@mail.com','dannypowell','+123456778'),
		('traversy','brad@mail.com','bradtrav','+123498765'),
		('Andrei','Andrei@mail.com','PWTandrei','+12333333888'),
		('samad akann', 'smad@mail.com', 'akannsam', '+123678908');

-- show the Admin Table
select * from admin;

-- 2 Categories table
-- table creation
create table categories(
		categoryId int not null auto_increment,
		categoryName varchar(50) not null,
		primary key (categoryId)
);
-- populating categories with values.
insert into categories(categoryName) 
		Values 
			('male sneakers'),
			('female sneakers'),
			('male flatsole palm'),
			('female flatsole palm');
    
-- view categories table
select * from categories;     


-- 3 Product Table
-- table creation
create table product(
			productId int not null auto_increment,
			categoryId int not null,
			adminId int not null,
			productName varchar(50) not null,
			productDescription varchar(250) not null,
			image blob,
			unitPrice decimal(9,2) not null,
      stockLevel int not null,
			status enum('available', 'unavailable'),
			primary key(productId),
			foreign key (categoryId) references categories (categoryId),
			foreign key (adminId) references admin (adminId)
);



-- populating the product table with values
insert into product (categoryId, adminId, productName, productDescription, image, unitPrice, stockLevel, status) 
values 
		( 1, 3,'CHUNKY SOLE SNEAKERS', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic assumenda ipsum earum voluptatem odio, sapiente quia tempore repellendus alias aliquam nostrum ex culpa quasi voluptatibus sequi.', load_file('../html/Images/shoes2.jpg'), '1000.00', 30,'available'  ),
		( 2, 1,'LIGHTENING SOLE EXPLORER (PLAIN)', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic assumenda ipsum earum voluptatem odio, sapiente quia tempore repellendus alias aliquam nostrum ex culpa quasi voluptatibus.', load_file('../html/Images/shoes3.jpg'), ' 3000.00', 35,'available'  ),
  	( 4, 2,'CHUNKY SOLE SNEAKERS', 'Lorem ipsum dolor sit amt   provident at.', load_file('../html/Images/shoes4.jpg'), ' 2000.00', 59,'unavailable'  ),
  	( 3, 4,'CHUNKY SOLE SNEAKERS', 'Sequi laboriosam consequatur possimus id Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias animi sequi asperiores quos, nulla eaque, in, alias earum optio tenetur repellat provident at.', load_file('../html/Images/l.png'), ' 1200.00', 30,'available'  );

-- view product table;
select * from product;

-- 4 customer table 
-- Table creation
create table customers(
	  customerId int not null auto_increment,
    customerFirstName varchar(50) not null,
    customerLastName varchar(50) not null,
    customerEmailAddress varchar(50) not null,
    customerPassword varchar(50) not null,
    primary key(customerId)
);

-- populating the customers table with values
insert into customers(customerFirstName, customerLastName, customerEmailAddress, customerPassword) 
values 
	('fred', 'hammod', 'fredhamod@gmail.com','frednard'),
	('shnano', 'craig', 'fcraig@gmail.com' ,'shanaonocra'),
	('fiyinfolu', 'clement', 'clement@gmail.com', 'clementfiyin'),
	('suite', 'funmi', 'funmisuite@gmail.com', 'suiteees');

-- view customers page 
select * from Customers;


-- 5. Address Table 
create table CustomersAddress
(
addressId int not null auto_increment,
customerId int not null,
customerStreet varchar(200) not null,
customerState varchar(30) not null,
customerCity varchar(30) not null,
customerZipCode mediumint,
customerCountry varchar(20) not null,
customerPhone varchar(15) not null,
primary key (addressId),
foreign key(customerId) references Customers(customerId)
);
drop table CustomersAddress;

-- populating the customeraddress table
insert into CustomersAddress(customerId, customerStreet, customerState, customerCity, customerZipCode, customerCountry, customerPhone )
values  
		(1, ' no 2 New Bodija', 'Oyo', 'Ibadan', 23454, 'Nigeria','+234567890'),
		(2, ' no 45 New Garage', 'Oyo', 'Ibadan', 23454, 'Nigeria','+2309876543'),
		(3, ' no 34 Moniya', 'Oyo', 'Ibadan', 23454, 'Nigeria','+234564321'),
		(4, ' no 478 Iwo road', 'Oyo', 'Ibadan', 23454, 'Nigeria','+2345654456');

-- view customers address
select * from CustomersAddress;

-- 6 Order table
-- table creation 
create table Orders(
		orderId int not null auto_increment,
		clientOrder int not null,
		orderAmount decimal(25,2) not null,
		orderCreateAt datetime,
		primary key  (orderId),
		foreign key (clientOrder) REFERENCES Customers (customerId)
);
-- populationg the orders with values

insert into Orders (clientOrder, orderAmount, orderCreateAt)
values
	(1 , 1000.00, now()),
	(2, 3000.00, now()),
	(3, 3000.00, now()),
	(4, 1200.00, now());

-- view Order table

select * from Orders;

-- 7. Order Item
-- creation of the Table
create table orderItem(
    orderItemId int not null auto_increment,
    OrderId int not null,
    productId int not null,
    quantity int not null,
    unitPrice int not null,
    totalAmount decimal(10, 2) not null,
    primary key(orderItemId),
    foreign key(OrderId) references Orders(OrderId),
    foreign key(productId) references Product(productId)
);

-- populating the orderitem
insert into OrderItem(OrderId, productId, quantity, unitPrice, totalAmount)
values 
		(1, 1, 3, 1000, 3000),
		(2, 2, 3, 3000, 9000),
		(3, 4, 2, 1200, 2400),
		(4, 4, 8, 1200, 9600);

-- view the orderitem
select * from orderItem;