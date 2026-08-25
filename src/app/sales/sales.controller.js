const salesServices = require('./sales.service')

const recordSale = async (req, res, next) => {
    try {
        const {productId, quantity,date} = req.body;
        const recordSale = await salesServices.recordSale(productId, quantity,date);
        res.status(201).send({message: 'Sales record successfully', success: true, data: recordSale});
    } catch (error) {
        next(error);
    }
};

const getSales = async (req, res, next) => {
    try {
        const getSales = await salesServices.getSales();
        res.status(200).send({message: 'sales listed successfully', success: true, data: getSales});
    } catch (error) {
        next(error);
    }
};

const getSalesByProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const getSalesByProduct = await salesServices.getSalesByProduct(id);
        res.status(200).send({message: 'Sales listed by product successfully', success: true, data: getSalesByProduct});
    } catch (error) {
        next(error);
    }

}

module.exports = {
    recordSale,
    getSales,
    getSalesByProduct
}

