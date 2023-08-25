-- Drop Tables
DROP TABLE if exists words;
DROP TABLE if exists users;
DROP TABLE if exists invoices;
DROP TABLE if exists category;
DROP TABLE if exists product;

SET foreign_key_checks = 0;
SET foreign_key_checks = 1;


-- Create Tables
CREATE TABLE payments(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    credit_card BIGINT NOT NULL,
    allowed TINYINT(1) NOT NULL
);
CREATE TABLE orders(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    address_1 VARCHAR(255) NOT NULL,
    address_2 VARCHAR(255) NOT NULL,
    postal_code INT NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    final_price DECIMAL(8, 2) NOT NULL,
    payment_id BIGINT NOT NULL,
    fulfilled TINYINT(1) NOT NULL
);
CREATE TABLE users(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    order_id BIGINT NOT NULL
);
CREATE TABLE guests(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    order_id BIGINT NOT NULL
);
CREATE TABLE artists_brand(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_id BIGINT UNSIGNED NOT NULL
);
CREATE TABLE products(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    description LONGTEXT NOT NULL,
    order_id BIGINT NOT NULL,
    units INT NOT NULL
);
CREATE TABLE product_order(
    product_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT INDEX,
    order_id BIGINT NOT NULL,
    product_quantity INT NOT NULL
);

ALTER TABLE
    product_order ADD INDEX product_order_order_id_index(order_id);
ALTER TABLE
    orders ADD CONSTRAINT orders_payment_id_foreign FOREIGN KEY(payment_id) REFERENCES payments(id);
ALTER TABLE
    users ADD CONSTRAINT users_order_id_foreign FOREIGN KEY(order_id) REFERENCES orders(id);
ALTER TABLE
    orders ADD CONSTRAINT orders_product_id_foreign FOREIGN KEY(product_id) REFERENCES product_order(order_id);
ALTER TABLE
    products ADD CONSTRAINT products_order_id_foreign FOREIGN KEY(order_id) REFERENCES product_order(product_id);
ALTER TABLE
    artists_brand ADD CONSTRAINT artists_brand_product_id_foreign FOREIGN KEY(product_id) REFERENCES products(id);
ALTER TABLE
    guests ADD CONSTRAINT guests_order_id_foreign FOREIGN KEY(order_id) REFERENCES orders(id);
