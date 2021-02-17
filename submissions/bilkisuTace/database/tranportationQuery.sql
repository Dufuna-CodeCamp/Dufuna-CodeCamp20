-- 1. The total number of passengers who survived:
SELECT COUNT(*) as Survivors
FROM survival
WHERE Survived = 1;
-- Result: 342

-- 2. The total number of passengers who did not survive: 
SELECT COUNT(*) as Deaths
FROM survival
WHERE survived = 0;
-- Result: 549

-- 3. The name and sex of passengers under the age of 27 that embarked at Queenstown and Cherbourg:
SELECT passenger.name, passenger.sex 
FROM passenger
JOIN traveldetail
ON passenger.PassengerId = traveldetail.PassengerId
WHERE age < 27 
AND (embarked = 'C' OR embarked = 'Q');

-- 4. The number of passengers that embarked at Southampton who survived:
SELECT COUNT(*) as Survivors_at_Southampton
FROM survival
JOIN traveldetail
ON  survival.PassengerId = traveldetail.PassengerId 
WHERE  embarked = 'S' 
AND Survived = 1;
-- Result: 218

-- 5a. The id, name of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board:
SELECT passenger.PassengerId, passenger.name
FROM passenger
JOIN traveldetail
ON passenger.PassengerId = traveldetail.PassengerId
WHERE Fare > 100
AND age > 35
AND SibSp > 0;

-- 5b. The total number of passengers who paid a fare greater than $100 and above the age of 35 had siblings or spouses on board:
SELECT COUNT(*) as Total
FROM passenger
JOIN traveldetail
ON passenger.PassengerId = traveldetail.PassengerId
WHERE Fare > 100
AND age > 35
AND SibSp > 0;