const pool = require('../../common/db/db');

// Q9
const totalQuantityReport = async () => {
    const {rows} = await pool.query(`SELECT p.id AS product_id ,p.name AS product_name, SUM(s.quantitysold) AS total_quantity FROM products p JOIN sales s ON p.id =s.productid GROUP BY p.id, p.name ORDER BY total_quantity `);
    return rows;
}





module.exports = {
    totalQuantityReport,

}