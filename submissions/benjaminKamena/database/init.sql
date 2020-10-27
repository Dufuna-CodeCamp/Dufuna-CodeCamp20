--
-- Database: `ecommerce_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  `category_desc` text NOT NULL,
  `category_image` text NOT NULL,
  PRIMARY KEY (`category_id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `contact_details`
--

CREATE TABLE `contact_details` (
  `contact_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `street_address` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `zip_code` varchar(100) DEFAULT NULL,
  `country` varchar(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  PRIMARY KEY (`contact_details_id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_first_name` varchar(100) NOT NULL,
  `customer_last_name` varchar(100) NOT NULL,
  `customer_email_address` varchar(100) NOT NULL,
  `customer_password` varchar(100) NOT NULL,
  `customer_contact_address_id` int(11) NOT NULL,
  `customer_order_id` int(11) NOT NULL,
  PRIMARY KEY (`customer_id`),
  FOREIGN KEY (`customer_contact_address_id`) REFERENCES `contact_details` (`contact_details_id`),
  FOREIGN KEY (`customer_order_id`) REFERENCES `orders` (`order_id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_amount` decimal(10,2) NOT NULL,
  `order_date` date NOT NULL,
  PRIMARY KEY (`order_id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_items_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_item_quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_items_id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_desc` text NOT NULL,
  `product_image` text NOT NULL,
  `product_unit_price` decimal(6,2) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `stock_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`),
  FOREIGN KEY (`stock_id`) REFERENCES `stock_levels` (`stock_id`),
  FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  FOREIGN KEY (`admin_id`) REFERENCES `user_admins` (`admin_id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `stock_levels`
--

CREATE TABLE `stock_levels` (
  `stock_id` int(11) NOT NULL AUTO_INCREMENT,
  `total_quantity` int(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`stock_id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `user_admins`
--

CREATE TABLE `user_admins` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(100) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `admin_password` varchar(200) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  PRIMARY KEY (`admin_id`)
);