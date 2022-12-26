-- Select All cars
SELECT *
FROM car 
-- Select All active cars
SELECT *
FROMcar
WHERE status = "active" -- Select All active cars and get count by color
SELECT color, COUNT(*) AS count
FROM car
WHERE status = "active"
GROUP BY color 
-- Select All active cars and get count by transmission
SELECT transmission, COUNT(*) AS count
FROM car
WHERE status = "active"
GROUP BY transmission 
-- Select All active cars and get count by brand
SELECT brand, COUNT(*) AS count
FROM car
WHERE status = "active"
GROUP BY brand 
-- Select All active cars and get count by powertrain
SELECT powertrain, COUNT(*) AS count
FROM car
WHERE status = "active"
GROUP BY powertrain 
-- Select All active cars and get count by type
SELECT type, COUNT(*) AS count
FROM car
WHERE status = "active"
GROUP BY type 
-- Select All Reservations with car info
SELECT *
FROM reservations 
NATURAL JOIN car
WHERE status != "active";
-- Insert new car
insert into car(car_id,brand,model,type,color,year,seating,powertrain,transmission,rate,plate_no,region,status)
values
  (
    id,
    "hyundai",
    "bayon",
    "suv",
    "white",
    year(now()),
    4,
    "fuel",
    "manual",
    350,
    "c447e",
    "Algeria",
    "active"
  );