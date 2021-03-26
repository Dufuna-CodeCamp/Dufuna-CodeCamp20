-- created  a database called ECOMMERCE 
CREATE DATABASE ecommerce; 
USE ecommerce;

-- created a table called CUSTOMERS 
CREATE TABLE customers(
    customer_id int not null auto_increment,
	first_name varchar(50) not null,
    last_name varchar(50) not null,
    email_address varchar(50) not null,
    password varchar(50) not null,
	primary key(customer_id)
);
show columns from customers;

-- created a table called ADDRESSES
CREATE TABLE addresses(
    address_id int not null auto_increment,
	street_address varchar(100) not null,
    city varchar(100) not null,
    state varchar(100) not null,
    zipcode varchar(100) not null,
    country varchar(100) not null,
    phone_number varchar(100) not null,
    customer_id int not null,
	primary key(address_id),
    foreign key(customer_id) references customers(customer_id)
);
show columns from addresses;

-- created a table called ORDERS
CREATE TABLE orders(
    order_id int not null auto_increment,
	amount varchar(100) not null,
    order_time datetime not null,
    customer_id int not null,
	primary key(order_id),
    foreign key(customer_id) references customers(customer_id)
);
show columns from orders;

-- created a table called CATEGORIES
CREATE TABLE categories(
    category_id int not null auto_increment,
	category_name varchar(100) not null,
	primary key(category_id)
);
show columns from categories;

-- created a table called ADMINS
CREATE TABLE admins(
    admin_id int not null auto_increment,
	admin_name varchar(100) not null,
    admin_password varchar(100) not null,
    email_address varchar(100) not null,
    phone_number varchar(100) not null,
	primary key(admin_id)
);
show columns from admins;

-- created a table called PRODUCTS
CREATE TABLE products(
	product_id int not null auto_increment,
	product_name varchar(100) not null,
	product_description varchar(40) not null,
	image text not null,
	unit_price int not null,
    stock_level int not null,
    stock_status varchar(25) not null,
    admin_id int not null,
    category_id int not null,
	primary key(product_id),
    foreign key(category_id) references categories(category_id),
    foreign key(admin_id) references admins(admin_id)
);
show columns from products;

-- created a table called ORDER_ITEMS
CREATE TABLE order_items(
    item_id int not null auto_increment,
	quantity int not null,
    unit_prices int not null,
    total_amount int not null,
    order_id int not null,
    product_id int not null,
	primary key(item_id),
    foreign key(order_id) references orders(order_id),
    foreign key(product_id) references products(product_id)
);
show columns from order_items;




