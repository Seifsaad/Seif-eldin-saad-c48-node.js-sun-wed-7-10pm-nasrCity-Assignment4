const pool = require('../../common/db/db');

// Q9
const totalQuantityReport = async () => {
    const {rows} = await pool.query(`SELECT p.id AS product_id ,p.name AS product_name, SUM(s.quantitysold) AS total_quantity FROM products p JOIN sales s ON p.id =s.productid GROUP BY p.id, p.name ORDER BY total_quantity `);
    return rows;
}



// QUESTION NO.6>A
/*
SAME AS createSupplier but without arguments
initialized this from postman (freshfood,01001234567)
*/
// const getAllSuppliers = async (req, res) => {
//     const {rows} = await pool.query(`SELECT * FROM suppliers ORDER BY id`);
//     return rows;
// }
//
// const updateSupplier = async (name,contact,id) => {
//     const {rows} = await pool.query(`UPDATE suppliers SET (name,contact_number) = ($1,$2) WHERE id = $3 RETURNING *`,[name,contact,id]);
//     return rows[0];
// }
//
// const deleteSupplier = async (id) => {
//     const result = await pool.query(`DELETE FROM suppliers WHERE id = $1 RETURNING *`,[id]);
//     return result;
// }

module.exports = {
    totalQuantityReport,

}