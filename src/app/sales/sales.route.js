const { Router } = require('express');
const salesRouter = Router()
const salesController = require('../sales/sales.controller');

salesRouter.post('/createSale',salesController.recordSale);
salesRouter.get('/getSales',salesController.getSales);
salesRouter.get('/:id',salesController.getSalesByProduct);






module.exports = salesRouter;