-- CREATED MY E-COMMERCE DATABASE
	CREATE DATABASE taries_empire;
	USE taries_empire;

-- CREATED TABLES FOR E-COMMERCE DATABASE
-- 1) ADMINISTRATORS
	-- A) Created the admins table
		CREATE TABLE admins (
			admin_id INT NOT NULL AUTO_INCREMENT,
			name VARCHAR(50) NOT NULL,
			email VARCHAR(50) NOT NULL,
			password VARCHAR(15) NOT NULL,
			phone_number VARCHAR(15) NOT NULL,
			PRIMARY KEY (admin_id)
		);
	-- B) Inserted records into the admins table
		INSERT INTO admins (name, email, password, phone_number) 
			VALUES  ('Cynthia Nwakaeme', 'nwakaemecynthia@gmail', 'openheavens', '+234812838338'),
				('Leke Ologede', 'lekyinologede@example.com', 'muffins3', '+449383848899'),
				('Sheila Odor', 'sheilaodor1@sample.com', 'dubabbyboo', '+27894903002'),
				('David Dave', 'deesquare@sample.com', 'deesquare4life', '+234894903002'),
				('Darlyntina Nwakaeme', 'darlyntina@yahoo.com', 'march22nd', '+233900880888');

-- 2)CATEGORIES
	-- A)Created the categories table
		CREATE TABLE categories (
			category_id INT NOT NULL AUTO_INCREMENT,
			category_name VARCHAR(50) NOT NULL,
			PRIMARY KEY (category_id)
		);
        
	-- B) Inserted records into the categories table
		INSERT INTO categories (category_name)
			VALUES 	('skincare_products'),
				('hair_extentions'),
				('accessories'),
				('clothings'),
				('footwears');
                    
-- 3) PRODUCTS
	-- A) Created the products table
		CREATE TABLE products (
			product_id INT NOT NULL AUTO_INCREMENT,
            		category_id INT NOT NULL,
			admin_id INT NOT NULL,
			name VARCHAR(50) NOT NULL,
			description VARCHAR(250) NOT NULL,
			image BLOB,
			unit_price DECIMAL(8,2) NOT NULL,
			stock_level INT NOT NULL,
			status ENUM('in stock', 'out of stock', 'low stock'),
			PRIMARY KEY (product_id),
			FOREIGN KEY (category_id) REFERENCES categories (category_id),
			FOREIGN KEY (admin_id) REFERENCES admins (admin_id)
		);
        
	-- Inserted records into the products table
		INSERT INTO products (category_id, admin_id,name, description, image, unit_price, stock_level, status)
			VALUES 	(1,2,'J-Royalty organic black soap', 'J-royalty Organic African black soap is formulated with loads of organic ingredients, herbs and refined essential oil', LOAD_FILE('E:/Images/soap.jpg'),250.00, 3000, 'out of stock'),
				(3,4,'32 inches Bone Straight Hair', 'Berry Human hair extension are quality hair from the best hair brand in Nigeria',LOAD_FILE('E:/Images/humanHair.jpg'),150000.00, 20, 'in stock'),
				(1,3,'Wrap Gown with belt', 'All season, We have got you covered with fantastic clothings raning from Corporate/Native/Casual wears', LOAD_FILE('E:/Images/zeeClothings.jpg'),55000.00, 50, 'low stock'),
				(2,1,'Tyna block Heels', 'Tynas\' shoes helps you stay confident and classy', LOAD_FILE('E:/Images/tynaShoes.jpg'),15000.00,20,'out of stock');

-- 4)CUSTOMERS
	-- Created the customers table
		CREATE TABLE customers (
			customer_id INT NOT NULL AUTO_INCREMENT,
			first_name VARCHAR(30) NOT NULL,
			last_name VARCHAR(30) NOT NULL,
			email VARCHAR(50) NOT NULL,
			password VARCHAR(15) NOT NULL,
			PRIMARY KEY (customer_id)
		);
        
	-- Inserted records into the customers table
		INSERT INTO customers (first_name, last_name, email, password)
			VALUES 	('Jennifer', 'Koko', 'jennykoko@gmail.com', 'redeemed'),
				('Kokolyna', 'Bushfield', 'kokobushfield@example.com', 'christcentered'),
                    		('Anderson', 'Phils', 'philandy@gmail.com', 'ionic2basic'),
				('Sharon', 'Stone', 'kokobushfield@example.com', 'devyact'),
				('Kyla', 'Fielder', 'kaylafill@example.com', 'coolgirl2talk2');
                    
-- 5) CUSTOMERS' CONTACTS 
	-- Created the customers' contacts table
    
		CREATE TABLE customer_contacts (
			contact_id INT NOT NULL AUTO_INCREMENT,
            		customer_id INT NULL,
			street VARCHAR(150) NOT NULL,
			city VARCHAR(30) NOT NULL,
			state VARCHAR(30) NOT NULL,
			zip_code MEDIUMINT,
			country VARCHAR(20) NOT NULL,
			phone VARCHAR(15) NOT NULL,
			PRIMARY KEY (contact_id),
			FOREIGN KEY (customer_id) REFERENCES customers (customer_id) 
		);
        
	-- Inserted records into the customer addresses table
		INSERT INTO customer_contacts (customer_id, street, city, state, zip_code, country, phone)
			VALUES  (1, '4 Clinton Harrison Street', 'Wuse II', 'Abuja', 23444 , 'Nigeria', '090808198'),
				(2, 'Plot 21 Reddington Street', 'Lekki Phase 1', 'Lagos', 65655 , 'Nigeria', '45153251365'),
				(3, '34 Cardogan Estate', 'Gwaripa', 'Abuja', 32432 , 'Nigeria', '09542424524'),
				(4, '92 Balarabe Musa Cresent', 'Eti Osa II', 'Abuja', 757557 , 'Nigeria', '0812243433'),
				(5, 'Block 34 Lake View II Estate', 'Festac', 'Abuja', 465242 , 'Nigeria', '070235546226');
                    
-- 6) ORDERS
	-- A) Created the orders table
		CREATE TABLE orders (
			order_id INT NOT NULL AUTO_INCREMENT,
			clients INT NOT NULL,
			order_amount DECIMAL(20,2) NOT NULL,
			order_created_at DATETIME,
			PRIMARY KEY (order_id),
			FOREIGN KEY (clients) REFERENCES customers (customer_id)
		);

	-- B) Inserted values into the orders table
		INSERT INTO orders (clients, order_amount, order_created_at)
			VALUES  (2, 1250.00, now()),
				(3, 150000.00, now()),
				(1, 550000.00, now()),
				(1, 30000.00, now()),
				(4, 150000.00, now());
                    
-- 7) ORDER ITEMS
	-- Created the order items table
		CREATE TABLE order_items (
			item_id INT NOT NULL AUTO_INCREMENT,
			order_id INT NOT NULL,
			product_id INT NOT NULL,
			quantity INT NOT NULL,
			unit_price DECIMAL(8,2) NOT NULL,
			total_amount DECIMAL(20,2) NOT NULL,
			PRIMARY KEY (item_id),
			FOREIGN KEY (order_id) REFERENCES orders (order_id),
			FOREIGN KEY (product_id) REFERENCES products (product_id)
		);
	-- Inserted records into the order items table
		INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_amount) 
			VALUES  (1, 1, 3, 250.00, 1250.00),
				(2, 2, 1, 150000.00, 150000.00),
				(3, 3, 10, 55000.00, 550000.00),
                    		(3, 3, 2, 15000.00, 30000.00),
                    		(3, 3, 2, 150000.00, 300000.00);
