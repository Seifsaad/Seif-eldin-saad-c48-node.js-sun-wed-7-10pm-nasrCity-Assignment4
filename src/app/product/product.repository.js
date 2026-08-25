const pool = require("../../common/db/db");

const getProducts = async ()=>{
    let query = 'SELECT * FROM products order by id';
    const {rows} = await pool.query(query);
    return rows;
};
const getProductsById =async (id)=>{
    let query = 'SELECT * FROM products where id = $1' ;
    const {rows: productById} =await pool.query(query,[id] );
    return productById;
};
const createProduct = async (name,price,stock,supplierId) => {
    const {rows} = await pool.query(`INSERT INTO products(name, price, stock, supplier_id)
                               VALUES ($1, $2, $3, $4)
                               RETURNING *`, [name, price, stock, supplierId]);
    return rows;
};
// QUESTION NO.6>B
/*
SAME AS createProduct
initialized this from postman
*/

const updateProduct = async (name,price,stock,supplierId,id) => {
    const {rows} = await pool.query(`UPDATE products SET (name,price,stock,supplier_id) = ($1,$2,$3,$4)    WHERE id = $5 RETURNING *`, [name,price,stock,supplierId,id]);
    return rows;
}
// QUESTION NO.7
/*
SAME AS updateProduct
initialized this from postman
*/

const deleteProduct = async (id)=>{
    return await pool.query(`DELETE FROM products WHERE id=$1`, [id]);

}
// QUESTION NO.8
/*
SAME AS deleteProduct
initialized this from postman
*/

module.exports = {
    createProduct,
    getProducts,
    getProductsById,
    updateProduct,
    deleteProduct

};