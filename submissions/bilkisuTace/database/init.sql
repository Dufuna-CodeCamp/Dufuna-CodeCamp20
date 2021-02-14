-- ----------------------------
-- Table structure for customers
-- ----------------------------
CREATE TABLE customers (
  customer_id int(11) NOT NULL AUTO_INCREMENT,
  first_name varchar(20) NOT NULL,
  last_name varchar(20) NOT NULL,
  email varchar(20) NOT NULL,
  password varchar(20) NOT NULL,
  PRIMARY KEY (customer_id)
)

 -- ----------------------------
-- Table structure for addresses
-- ----------------------------
CREATE TABLE addresses (
  customer_id int(11) NOT NULL,
  street_address varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  state varchar(255) NOT NULL,
  zipcode int(11) DEFAULT NULL,
  country varchar(255) NOT NULL,
  mobile_phone varchar(255) NOT NULL,
  PRIMARY KEY (customer_id),
  CONSTRAINT addresses_fk_1 FOREIGN KEY (customer_id) REFERENCES customers (customer_id) ON DELETE CASCADE ON UPDATE CASCADE
) 

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
  admin_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(70) NOT NULL,
  phone_number varchar(20) NOT NULL,
  PRIMARY KEY (admin_id)
) 

-- ----------------------------
-- Table structure for categories
-- ----------------------------
CREATE TABLE categories (
  category_id int(11) NOT NULL AUTO_INCREMENT,
  category_name varchar(255) NOT NULL,
  PRIMARY KEY (category_id)
) 

-- ----------------------------
-- Table structure for orders
-- ----------------------------
CREATE TABLE orders (
  orders_id int(11) NOT NULL AUTO_INCREMENT,
  customer_id int(11) NOT NULL,
  amount decimal(10,0) NOT NULL,
  date_and_time datetime NOT NULL,
  PRIMARY KEY (orders_id),
  KEY customer_id (customer_id),
  CONSTRAINT orders_fk_1 FOREIGN KEY (customer_id) REFERENCES customers (customer_id) ON DELETE CASCADE ON UPDATE CASCADE
) 

-- ----------------------------
-- Table structure for order_items
-- ----------------------------
CREATE TABLE order_items (
  order_id int(11) NOT NULL,
  product_id int(11) NOT NULL,
  quantity int(11) NOT NULL,
  unit_price decimal(10,2) NOT NULL,
  total_amount decimal(10,2) NOT NULL,
  PRIMARY KEY (order_id,product_id),
  KEY product_id (product_id),
  CONSTRAINT order_items_fk_1 FOREIGN KEY (order_id) REFERENCES orders (orders_id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT order_items_fk_2 FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE ON UPDATE CASCADE
) 

-- ----------------------------
-- Table structure for products
-- ----------------------------
CREATE TABLE products (
  product_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  description varchar(250) NOT NULL,
  image blob NOT NULL,
  unit_price decimal(10,2) NOT NULL,
  category_id int(10) NOT NULL,
  admin_id int(20) unsigned NOT NULL,
  reorder_level int(4) NOT NULL,
  stock_level int(4) NOT NULL,
  status enum('Low Stock','Out of Stock','In Stock') NOT NULL,
  PRIMARY KEY (product_id),
  CONSTRAINT products_fk_1 FOREIGN KEY (category_id) REFERENCES categories (category_id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT products_fk_2 FOREIGN KEY (admin_id) REFERENCES admins (admin_id) ON DELETE CASCADE ON UPDATE CASCADE
) 

