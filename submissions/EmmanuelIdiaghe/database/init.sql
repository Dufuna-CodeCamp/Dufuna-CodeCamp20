# To create and show the e-commerce database called emmy_shop
create database emmy_shop;
show databases;

# To use emmy_shop database
use emmy_shop;

/*** List of Tables to be created
* Categories Table
* Admin Table
* Products Table
* Customers Table
* Customers Addresses
* Order_Items Table
* Orders Table
***/
show tables;

/*************** Categories Table ****************/
# create categories table
create table categories (
	id int not null auto_increment,
    category varchar(50) not null,
    primary key(id)
);

# Insert values into the categories table
insert into categories(category)
values('men\'s shirts'),
('women\'s shirts'),
('men\'s accessories'),
('women\'s accessories'),
('men\'s footwear'),
('women\'s footwear');

# View categories table
select * from categories;

/*****************************************/
/*************** Admin Table ****************/
# Create Admin Table
create table admin_users(
	id int not null auto_increment,
    name_of_admin varchar(50) not null,
    email_address varchar(50) not null,
    passcode varchar(50) not null,
    phone_number varchar(20) not null,
    primary key(id)
);

# Insert values into the Admin Table
insert into admin_users(name_of_admin, email_address, passcode, phone_number)
values('Emmanuel Idiaghe', 'emmanuelidiaghe@gmail.com', '12345', '+2347012095632'),
('Michael Stevens', 'michaelstevens@gmail.com', '2132', '+2347061045015'),
('Joseph Omoregie', 'josephomoregie@gmail.com', '4321', '+2347063247654');

# View Admin Table
select * from admin_users;

/*****************************************/
/*************** Products Table ****************/
# Create Products Table
create table products (
	id int not null auto_increment,
    category_id int not null,
    admin_id int not null,
    name_of_product varchar(50) not null,
    description_of_product varchar(250) not null,
    image longblob,
    unit_price  decimal(10, 2) not null,
    stock_level int not null,
    status_of_product varchar(20) not null,
    primary key(id),
    foreign key(category_id) references categories(id),
    foreign key(admin_id) references admin_users(id)
);

# Insert Values into the Products Table
insert into products(category_id, admin_id, name_of_product, description_of_product, image, unit_price, stock_level, status_of_product)
values(1, 2, 'men\'s black suit', 'A made-in-Italy Suit for classic men of all ages. It comes with a bow-tie and 
wristwatch to match. Get one today and be glad you did!', load_file('.../html/images/suit-pic.png'), 
350, 122, 'in stock'),
 (3, 3, 'men\'s classic wristwatch', 'A gold-plaited wristwatch for classy men', load_file('.../html/images/watch-pic.jpg'), 
120, 0, 'out of stock'),
(5, 1, 'men\'s italian shoes', 'Italian shoe for business class men', load_file('.../html/images/men-shoes-pic.jpeg'), 
220, 11, 'low stock'),
(6, 1, 'women\'s shoes', 'A classic shoes with fur for women', load_file('.../html/images/women-shoes-pic.jpg'), 
185, 97, 'in stock');

# View Products Table
select * from products;

/*****************************************/
/*************** Customers Table ****************/
# Create Customers Table
create table customers(
	id int not null auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email_address varchar(50) not null,
    passcode varchar(50) not null,
    primary key(id)
);

# Insert Values into the Customers Table
insert into customers(first_name, last_name, email_address, passcode)
values('James', 'Jones', 'jamesjones@gmail.com', '00000'),
('Adams', 'Akanbi', 'adamsakanbi@gmail.com', '11111'),
('Olatunde', 'Fashola', 'olatundefashola@gmail.com', '22222'),
('Samuel', 'Utom', 'samuelutom@gmail.com', '33333'),
('Clement', 'abulimen', 'clementabulimen@gmail.com', '44444');

# View Customers Table
select * from customers;

/*****************************************/
/*************** Customers Addresses ****************/
# Create Customers' Addresses Table
create table addresses(
	id int not null auto_increment,
    customer_id int not null,
    street_name varchar(50) not null,
    city_name varchar(50) not null,
    state_name varchar(50) not null,
    zipcode varchar(50),
    country varchar(50) not null,
    phone_number varchar(20) not null,
    primary key(id),
    foreign key(customer_id) references customers(id)
);

# Insert Values into the Addresses Table
insert into addresses(customer_id, street_name, city_name, state_name, zipcode, country, phone_number)
values(1, 'Adewole Crescent', 'Ikare', 'Ondo', '', 'Nigeria', '+2348087954322'),
(2, 'Tinubu Lane', 'Oshodi', 'Lagos', '', 'Nigeria', '+2348011254387'),
(3, 'Law School', 'Victoria Island', 'Lagos', '101208', 'Nigeria', '+2348134795438'),
(4, 'Taylor Close', 'Tuscaloosa', 'Alabama', '908122', 'USA', '+2348087954322'),
(5, 'Zabayo Road', 'Benin', 'Edo', '103100', 'Nigeria', '+2348087956421');

# View the Addresses Table
select * from addresses;

/*****************************************/
/*************** Order Info ****************/
# Create the Order_Items Table
create table order_items(
	id int not null auto_increment,
    product_id int not null,
    quantity int not null,
    total_amount decimal(10, 2) not null,
    primary key(id),
    foreign key(product_id) references products(id)
);

# Insert Values
insert into order_items(product_id, quantity, total_amount)
values(2, 5, 600.00),
(1, 1, 350.00),
(4, 2, 370.00),
(3, 5, 1100.00);

# View Table
select * from order_items;

/*****************************************/
/*************** Orders Table ****************/
# Create the Orders Table
create table orders(
	id int not null auto_increment,
    customer_id int not null,
    order_item_id int not null,
    order_amount decimal(10, 2) not null,
    order_date datetime not null,
    primary key(id),
    foreign key(order_item_id) references order_items(id),
    foreign key(customer_id) references customers(id)
);

# Insert Values into the Orders Table
insert into orders(customer_id,order_item_id, order_amount, order_date)
values(3, 2, 312.00, now()),
(3, 1, 402.55, now()),
(1, 3, 122.69, now()),
(4, 4, 699.99, now());

# View Orders Table
select * from orders;