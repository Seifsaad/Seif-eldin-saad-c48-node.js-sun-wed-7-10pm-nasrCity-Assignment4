CREATE TABLE suppliers
(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255)  ,
    contact_number TEXT
);

ALTER TABLE suppliers ALTER COLUMN contact_number TYPE VARCHAR(15);

