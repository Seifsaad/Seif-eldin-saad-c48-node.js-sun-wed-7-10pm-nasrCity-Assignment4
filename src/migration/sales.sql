CREATE TABLE sales
(
    id SERIAL PRIMARY KEY ,
    productId INT REFERENCES products(id),
    quantitySold INT ,
    saleDate TIMESTAMP DEFAULT NOW()
);