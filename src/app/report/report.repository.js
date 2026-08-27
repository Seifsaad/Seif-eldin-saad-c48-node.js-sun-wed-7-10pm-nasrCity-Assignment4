const pool = require('../../common/db/db');

// Q9
const totalQuantityReport = async () => {
    const {rows} = await pool.query(`SELECT p.id                AS product_id,
                                            p.name              AS product_name,
                                            SUM(s.quantitysold) AS total_quantity
                                     FROM products p
                                              JOIN sales s ON p.id = s.productid
                                     GROUP BY p.id, p.name
                                     ORDER BY total_quantity DESC `);
    return rows;
}

//Q10
const highestStockQuantity = async () => {
    const {rows} = await pool.query(`SELECT *
                                     FROM products
                                     ORDER BY stock DESC `);
    return rows[0];
}


const startWithF = async () => {
    const {rows} = await pool.query(`SELECT * FROM suppliers WHERE name ILIKE 'F%'`);
    return rows;
}


module.exports = {
    totalQuantityReport,
    highestStockQuantity,
    startWithF,

}