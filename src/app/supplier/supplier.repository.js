const pool = require('../../common/db/db');

const createSupplier = async (name, contact) => {
    const {rows} = await pool.query(`INSERT INTO suppliers (name, contact_number) VALUES ($1, $2) RETURNING * `, [name, contact]);
    return rows[0];
}
// QUESTION NO.6>A
/*
SAME AS createSupplier but without arguments
initialized this from postman (freshfood,01001234567)
*/
const getAllSuppliers = async (req, res) => {
    const {rows} = await pool.query(`SELECT * FROM suppliers ORDER BY id`);
    return rows;
}

const updateSupplier = async (name,contact,id) => {
    const {rows} = await pool.query(`UPDATE suppliers SET (name,contact_number) = ($1,$2) WHERE id = $3 RETURNING *`,[name,contact,id]);
    return rows[0];
}

const deleteSupplier = async (id) => {
    const result = await pool.query(`DELETE FROM suppliers WHERE id = $1 RETURNING *`,[id]);
    return result;
}

module.exports = {
    createSupplier,
    getAllSuppliers,
    updateSupplier,
    deleteSupplier
}