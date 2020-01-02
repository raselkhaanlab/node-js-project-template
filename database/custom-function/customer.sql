DROP FUNCTION IF EXISTS allCustomer;
CREATE FUNCTION allCustomer ()
RETURNS int
READS SQL DATA
BEGIN 
	DECLARE m int;
	select count(*) into m from customers;
	RETURN m;
END;
