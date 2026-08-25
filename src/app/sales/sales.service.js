const salesRepository = require('./sales.repository')

const recordSale = async (productId,quantity,date)=>{
    return await salesRepository.recordSale(productId,quantity,date);
}

const getSales = async ()=>{
    return await salesRepository.getSales();
}

const getSalesByProduct = async (id)=>{
    return await salesRepository.getSalesByProduct(id);
}



module.exports = {
    recordSale,
    getSales,
    getSalesByProduct,
}