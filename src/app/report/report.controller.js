const reportService = require('./report.service');
const totalQuantityReport = async (req, res, next) => {
    try {

        const totalQuantityReport = await reportService.totalQuantityReport();
        res.status(201).send({message: 'report created successfully', success: true, data: totalQuantityReport});
    } catch (error) {
        next(error);
    }
};

const getSuppliers = async (req, res, next) => {
    try {
        const getSuppliers = await supplierService.getSuppliers();
        res.status(200).send({message: 'Suppliers list successfully', success: true, data: getSuppliers});
    } catch (error) {
        next(error);
    }
};

const updateSupplier = async (req, res, next) => {
    try {
        const {name, contact} = req.body;
        const {id} = req.params;
        const updateSupplier = await supplierService.updateSupplier(name, contact, id);
        res.status(200).send({message: 'Supplier updated successfully', success: true, data: updateSupplier});
    } catch (error) {
        next(error);
    }
};

const deleteSupplier = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deleteSupplier = await supplierService.deleteSupplier(id);
        res.status(200).send({message: 'Supplier deleted', success: true});
    } catch (error) {
        next(error);
    }

};


module.exports = {
    totalQuantityReport,
    getSuppliers,
    updateSupplier,
    deleteSupplier,

}