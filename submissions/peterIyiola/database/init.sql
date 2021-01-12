use best_buyers;

/----- created admin table----/
	create table best_buyers_admin(
	id int not null auto_increment,
	name varchar(50) not null,
	password varchar(50) not null,
	email varchar(50) not null,
	phone_number varchar(50) not null,
	primary key(id)
	);
    
    /----- inserted values into admin table----/
	insert into best_buyers_admin (name, email, password, phone_number) 
	values ('peter iyiola', 'peteriyiola@gmail.com', 'pete@1234', '08108088644'),
	('Joy Chukwu', 'joych@gmail.com', 'joyChu@567', '09067525272'),
	('Faith Akinsiku', 'fa@gmail.com', 'faithA@794', '07456372527'),
	('Iyanu Oluwa', 'iyanuO@gmail.com', 'Iyanu@983', '08075985262'),
	('Cynthia Nkwere','cynthn@gmail.com','cynthN@648','080657578838');
    
    /--- created table called categories ---/
    create table categories (
	id int not null auto_increment,
	category_name varchar(50) not null,
	primary key(id)
);

/--- insert values into categories --/
insert into categories (category_name)
values ('Samsung'),
('LG'),
('Hisense'),
('Midea'),
('panasonic');

create table products (
	id int not null auto_increment,
	name varchar(50) not null,
	description varchar(250) not null,
	image blob not null,
    category_id int not null,
    admin_id int not null,
	unit_price decimal(5,0) not null,
    stock_level int not null,
    status varchar(20) not null,
	primary key (id),
    foreign key (category_id) references categories (id) on delete cascade,
    foreign key (admin_id) references best_buyers_admin (id) on delete cascade
);
/--- insert values into products --/
insert into products (name, description, image, category_id, admin_id, unit_price, stock_level, status)
values('samsung 55 inches qled','smart,android enabled Tv','https://github.com/peteriyiola/Dufuna-CodeCamp20/blob/master/submissions/peterIyiola/htmlForms/images/samsung2.jpg','500000.00', '2', '4',' 180', 'in stock'),
('LG 55 inches qled','smart,android enabled Tv','https://github.com/peteriyiola/Dufuna-CodeCamp20/blob/master/submissions/peterIyiola/htmlForms/images/samsung2.jpg','400000.00',' 5', '4', '120', 'in stock'),
('Hisense 55 inches qled','smart,android enabled Tv','https://github.com/peteriyiola/Dufuna-CodeCamp20/blob/master/submissions/peterIyiola/htmlForms/images/samsung2.jpg','300000.00', '6', '4', '130', 'in stock'),
('Panasonic 55 inches qled','smart,android enabled Tv','https://github.com/peteriyiola/Dufuna-CodeCamp20/blob/master/submissions/peterIyiola/htmlForms/images/samsung2.jpg','200000.00', '4', '4', '150', 'in stock'),
('Thermocool 55 inches qled','smart,android enabled Tv','https://github.com/peteriyiola/Dufuna-CodeCamp20/blob/master/submissions/peterIyiola/htmlForms/images/samsung2.jpg','300000.00',' 3', '4', '160', 'in stock');

/--- created customers table --/
create table customers (
	id int not null auto_increment,
	first_name varchar(40) NOT NULL,
	last_name varchar(20) NOT NULL,
	email_address varchar(50) NOT NULL,
	password varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

/--- insert values into customers  --/
insert into customers (first_name, last_name ,email_address, password)
values('Patrick', 'Isreal','patricki@gmail.com','p745377'),
('tommy' ,'hagen','tm@gmail.com','TM52637'),
('Jamie' ,'vardy','jv@gmail.com','jvte7e878832'),
('richard' ,'Hanger','rm@gmail.com','TM52yry73'),
('Samuel' ,'etuhu','se@gmail.com','TM5=7445');

/--- create table for customer details --/
create table customer_addresses (
	id int not null auto_increment,
	customer_id int null,
	street_name varchar(100) not null,
	city varchar(20) not null,
	state varchar(20) not null,
	zip_code int,
	country varchar(20) not null,
	phone_number varchar(15) not null,
    primary key (id),
	foreign key (customer_id) references customers (id) on delete cascade
);

insert into customer_addresses (customer_id, street_name,city,state,zip_code,country,phone_number)
values('1','abejoye','VI','lagos','100449','nigeria','08074949934'),
('2','akinlabake','ishaga','lagos','100949','nigeria','08074945930'),
('3','akerele','ikotun','lagos','100449','nigeria','08073949935'),
('4','adefemi','gbagada','lagos','100679','nigeria','08079949930'),
('5','adebayo','ipaja','lagos','100959','nigeria','0807594930');

/--- create table for orders --/
CREATE TABLE orders (
	id int not null auto_increment,
	customer_orders int not null,
	order_amount decimal(9,2) not null,
	order_created_at datetime,
	primary key (id),
	foreign key (customer_orders) references customers (id) on delete cascade
);

insert into orders (customer_orders, order_amount, order_created_at)
values('1', '350000.00', now()),
('2', '800000.00', now()),
('3', '450000.00', now()),
('1', '300000.00', now()),
('1', '250000.00', now());

/-- Created table for order items 
CREATE TABLE order_items (
	id int not null auto_increment,
	order_id int not null,
	product_id int not null,
	quantity int not null,
	unit_price decimal(9,2) not null,
	total_amount decimal(10,2) not null,
    primary key (id),
	foreign key (order_id) references orders (id) on delete cascade,
	foreign key (product_id) references products (id) on delete cascade
);

insert into order_items (order_id, product_id, quantity, unit_price, total_amount)
values(1, 1, 3, 150000.00, 450000.00),
(2, 2, 2, 200000.00, 400000.00),
(3, 4, 2, 300000.00, 450000.00),
(4, 5, 2, 250000.00, 500000.00),
(5, 3, 2, 150000.00, 450000.00);
