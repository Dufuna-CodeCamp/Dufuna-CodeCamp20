--
-- Database: `e_commerce_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin users`
--

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone_number` varchar(13) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL.
  PRIMARY KEY (`id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `contact details`
--

CREATE TABLE `contact_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street_address` text NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `zip_code` int(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL.
  PRIMARY KEY (`id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fName` varchar(255) NOT NULL,
  `lName` varchar(255) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contact_info` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`contact_info`) REFERENCES `contact details` (`id`)
);

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(100) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `qauntity` varchar(255) NOT NULL,
  `total` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `unit_price` int(10) NOT NULL,
  `category` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total_quantity` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`status`) REFERENCES `stock_status` (`id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `stock_status`
--

CREATE TABLE `stock_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `in_stock` varchar(100) NOT NULL,
  `out_of_stock` varchar(100)NOT NULL,
  `low_stock` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id`) REFERENCES `stocks` (`id`)
);
