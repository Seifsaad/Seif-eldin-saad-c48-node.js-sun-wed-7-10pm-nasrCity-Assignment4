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
    const {rows} = await pool.query(`SELECT *
                                     FROM suppliers
                                     WHERE name ILIKE 'F%'`);
    return rows;
}

const neverSold = async () => {
    const {rows} = await pool.query(`SELECT *
                                     FROM products p
                                              LEFT JOIN
                                          sales s ON p.id = s.productId
                                     WHERE s.productId IS NULL
    `);
    return rows;
}
const allSales = async () => {
    const {rows} = await pool.query(`SELECT
                                         p.name AS product_name,
                                         s.quantitySold AS quantity_sold,
                                         s.saleDate AS sale_date
                                     FROM
                                         sales s
                                             INNER JOIN
                                         products p ON s.productId = p.id
    `);
    return rows;
}


module.exports = {
    totalQuantityReport,
    highestStockQuantity,
    startWithF,
    neverSold,
    allSales,

}