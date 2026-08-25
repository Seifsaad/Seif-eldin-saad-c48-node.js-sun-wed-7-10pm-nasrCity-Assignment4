const { Router } = require('express');
const supplierRouter = Router()
const supplierController = require('../supplier/supplier.controller')

supplierRouter.post('/createSupplier',supplierController.createSupplier);
supplierRouter.get('/getSuppliers',supplierController.getSuppliers);
supplierRouter.put('/:id',supplierController.updateSupplier);
supplierRouter.delete('/:id',supplierController.deleteSupplier);



module.exports = supplierRouter;