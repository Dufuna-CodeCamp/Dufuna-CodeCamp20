USE dufuna;
CREATE TABLE customer_details(
	id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(30) NOT NULL,
    email_address VARCHAR(30) NOT NULL,
    created_at DATETIME,
    PRIMARY KEY (id)
);

INSERT INTO customer_details (full_name, email_address, created_at) VALUES 
('Micheal Scofield', 'scofield@gmail.com', now()),
('Lincoln Burrows', 'burrows@gmail.com', now()),
('Theodore Bagwell', 'bagwell@gmail.com', now()),
('John Abruzzi', 'abruzzi@gmail.com', now());

CREATE TABLE orders(
	id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    order_unit_price DECIMAL(5, 2) NOT NULL,
    order_quantity INT NOT NULL,
    order_total_price DECIMAL(10,2) NOT NULL,
    created_date DATETIME,
    customer_location VARCHAR(80) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(customer_id) REFERENCES customer_details (id)
);

INSERT INTO orders (customer_id, product_name, order_unit_price, order_quantity, order_total_price, created_date, customer_location) VALUES
(1, 'iphone', 200.00, 2, 400.00, now(), '10_Ekenwan_Benin_Edo_Nigeria'),
(2, 'samsung', 150.00, 1, 150.00, now(), '11_Ekenwan-Benin_Edo_Nigeria'),
(3, 'xiaomi', 100.00, 3, 300.00, now(), '12_Ekenwan_Benin_Edo_Nigeria'),
(4, 'huawei', 250.00, 3, 750.00, now(), '13_Ekenwan_Benin_Edo_Nigeria');