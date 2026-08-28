const { Router } = require('express');
const reportRouter = Router()
const reportController = require('../report/report.controller')

reportRouter.get('/totalQuantityReport',reportController.totalQuantityReport);
reportRouter.get('/highestStockQuantity',reportController.highestStockQuantity);
reportRouter.get('/startWithF',reportController.startWithF);
reportRouter.get('/neverSold',reportController.neverSold);
reportRouter.get('/allSales',reportController.allSales);




module.exports = reportRouter;