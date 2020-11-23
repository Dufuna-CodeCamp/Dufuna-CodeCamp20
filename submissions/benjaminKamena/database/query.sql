USE train;
SHOW TABLES;
SHOW COLUMNS FROM survival;
SELECT * FROM survival;


-- Q1. What is the total number of passengers who survived?
SELECT COUNT(*)
FROM survival
WHERE survived = 1;

-- After running the query above the answer is 342.

-- Q2. What is the total number of passengers who did not survive?
SELECT COUNT(*)
FROM survival
WHERE survived = 0;

-- After running the query above the answer is 549.

-- Q3. Get the name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg?
SELECT passenger.name, passenger.sex 
FROM passenger
INNER JOIN traveldetail
ON passenger.PassengerId = traveldetail.PassengerId
WHERE age < 27 
AND (Embarked = 'Q' OR Embarked = 'C');

-- Q4.  How many of the passengers that embarked at Southampton survived?
SELECT COUNT(*)
FROM survival
RIGHT JOIN traveldetail
ON traveldetail.PassengerId = survival.PassengerId
WHERE  Embarked = 'S' 
AND Survived = 1;
-- After running the query above the answer is 218.

-- Q5. A. Get the id, name and the total number of passengers who paid a fare greater 
-- than $100 and above the age of 35 had siblings or spouses on board?
SELECT passenger.PassengerId, passenger.Name
FROM passenger
LEFT JOIN traveldetail
ON passenger.PassengerId = traveldetail.PassengerId
WHERE Fare > 100
AND age > 35
AND SibSp != 0;
  
-- Q5. B. the total number of passengers who paid a fare greater than $100 
-- and above the age of 35 had siblings or spouses on board?
SELECT COUNT(*)
FROM passenger
INNER JOIN traveldetail
ON passenger.PassengerId = traveldetail.PassengerId
WHERE Fare > 100
AND age > 35
AND SibSp != 0;

-- answer = 9
  