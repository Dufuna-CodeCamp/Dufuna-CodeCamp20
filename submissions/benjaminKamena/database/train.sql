--
-- Database: `train`
--
-- --------------------------------------------------------
CREATE DATABASE train;
USE train;
SHOW TABLES;

--
-- Table structure for table `passeger`
--

CREATE TABLE `passeger` (
  `PassegerId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Sex` varchar(10) NOT NULL,
  `Age` int(11) NULL,
  PRIMARY KEY (`PassegerId`)
);

-- --------------------------------------------------------

--
-- Table structure for table `survival`
--

CREATE TABLE `survival` (
  `PassegerId` int(11) NOT NULL AUTO_INCREMENT,
  `Survived` tinyint(1) NOT NULL,
  `Passeger_id` int(11) NOT NULL,
  PRIMARY KEY (`PassegerId`),
  FOREIGN KEY(`Passeger_id`) REFERENCES Passeger(`PassegerId`)
);

-- --------------------------------------------------------

--
-- Table structure for table `traveldetail`
--

CREATE TABLE `traveldetail` (
  `PassegerId` int(11) NOT NULL AUTO_INCREMENT,
  `Ticket` varchar(100) NOT NULL,
  `Fare` decimal(5,5) NOT NULL,
  `Cabin` varchar(10) NOT NULL,
  `Embarked` varchar(10) NOT NULL,
  `Pclass` int(11) NOT NULL,
  `SibSp` int(11) NOT NULL,
  `Parch` int(11) NOT NULL,
  `Passeger_id` int(11) NOT NULL,
  PRIMARY KEY (`PassegerId`),
  FOREIGN KEY(`Passeger_id`) REFERENCES Passeger(`PassegerId`)
);

-- The above is the train database, below are the queries made to answer the task;

-- Q1. What is the total number of passengers who survived?
SELECT COUNT(*)
FROM survival
WHERE Survived = 1;

-- After running the query above the answer is 342.

-- Q2. What is the total number of passengers who did not survive?
SELECT COUNT(*)
FROM survival
WHERE Survived = 0;

-- After running the query above the answer is 549.

-- Q3. Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?
USE train;
SELECT passeger.name, passeger.sex 
FROM passeger
INNER JOIN traveldetail
ON passeger.PassegerId = traveldetail.PassegerId
WHERE age < 27 
AND Embarked = 'Q'
  OR Embarked = 'C';

-- Q4.   How many of the passengers that embarked at Southampton survived?
USE train;
SELECT COUNT(*)
FROM traveldetail
RIGHT JOIN survival
ON survival.PassegerId = traveldetail.PassegerId
WHERE Embarked = 'S'
AND survived = 1;
-- After running the query above the answer is 0.

-- Q5. Get the id, name and the total number of passengers who paid a fare greater 
-- than $100 and above the age of 35 had siblings or spouses on board?
USE train;
SELECT passeger.PassegerId, passeger.Name
FROM passeger
INNER JOIN traveldetail
ON passeger.PassegerId = traveldetail.PassegerId
WHERE Fare > 100
AND age > 35
  OR SibSp = 0;
  



