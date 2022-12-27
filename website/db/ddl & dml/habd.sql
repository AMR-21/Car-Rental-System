INSERT INTO reservations VALUES ("1", "53ad3aab08", "4ea4503c00", "2022-12-20", "cairo", "2022-12-30", "alex", "2022-12-25", "active");

--update car table after reservation
UPDATE car
SET status = "not active" 
WHERE car_id = "";

-- Get All Users
SELECT *
FROM customer

SELECT *
FROM reservations r
NATURAL JOIN car c

SELECT *
FROM car
NATURAL JOIN 
