
CREATE TABLE products
(
    id SERIAL PRIMARY KEY ,
    name varchar(255),
    price NUMERIC(10,2) CHECK ( price > 0 ),
    stock INT DEFAULT 1 CHECK ( stock >= 0 ),
    supplier_id INT REFERENCES suppliers(id)
);

ALTER TABLE products ADD COLUMN category TEXT;

ALTER TABLE products DROP COLUMN category;

ALTER TABLE products ALTER COLUMN name SET NOT NULL;

-- Q>>9
-- SELECT p.id AS product_id ,p.name AS product_name, SUM(s.quantitysold) AS total_qunantity FROM products p JOIN sales s ON p.id =s.productid GROUP BY p.id, p.name ORDER BY total_qunantity;



