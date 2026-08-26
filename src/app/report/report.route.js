const { Router } = require('express');
const reportRouter = Router()
const reportController = require('../report/report.controller')

reportRouter.get('/totalQuantityReport',reportController.totalQuantityReport);
reportRouter.get('/getSuppliers',reportController.getSuppliers);
reportRouter.put('/:id',reportController.updateSupplier);
reportRouter.delete('/:id',reportController.deleteSupplier);



module.exports = reportRouter;