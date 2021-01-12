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