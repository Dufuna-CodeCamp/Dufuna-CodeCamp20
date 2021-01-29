
USE mix_stores;
    CREATE TABLE customer_details(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        full_name VARCHAR(30) NOT NULL,
        email_address VARCHAR(50) NOT NULL UNIQUE,
        created_at DATETIME
    );

    INSERT INTO customer_details(full_name, email_address, created_at) VALUES
        ('Onyeme Florence', 'onyeme@gmail.com', now()),
        ('Tolu Chanda', 'tolu@gahoo.com', now()),
        ('Paul Zuck', 'zuck@gmail.com', now()),
        ('Victoria Philip', 'vicky@gmail.com', now());