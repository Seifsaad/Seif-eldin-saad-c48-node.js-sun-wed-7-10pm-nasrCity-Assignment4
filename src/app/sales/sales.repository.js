const pool = require('../../common/db/db')

const recordSale = async (productId,quantity,date) => {
    const {rows} = await pool.query(`INSERT INTO sales (productid, quantitysold,saledate) VALUES ($1,$2,$3) RETURNING *`, [productId,quantity,date]);
    await pool.query(`UPDATE products SET stock = stock - $2 WHERE products.id = $1 `,[productId,quantity]);
    return rows;
}
// QUESTION NO.6>C
/*
SAME AS recordSale but without arguments
initialized this from postman (12,2,"2025-05-20")
*/
const getSales = async ()=>{
    const {rows} = await pool.query(`SELECT * FROM sales`);
    return rows;
}

const getSalesByProduct = async (id)=>{
    const {rows} = await pool.query(`SELECT * FROM sales WHERE productid = $1`, [id]);
    return rows;
}




module.exports = {
    recordSale,
    getSales,
    getSalesByProduct,
}