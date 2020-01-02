
DROP PROCEDURE IF EXISTS allCustomer;
delimeter \\
CREATE PROCEDURE allCustomer ()
BEGIN 
	SELECT * FROM `customers` ORDER BY `customerNumber` limit 10
	select * from employees limit 10
END \\
delimeter ;