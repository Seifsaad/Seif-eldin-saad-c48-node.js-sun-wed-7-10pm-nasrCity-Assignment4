const { Router } = require('express');
const reportRouter = Router()
const reportController = require('../report/report.controller')

reportRouter.get('/totalQuantityReport',reportController.totalQuantityReport);
reportRouter.get('/highestStockQuantity',reportController.highestStockQuantity);
reportRouter.get('/startWithF',reportController.startWithF);




module.exports = reportRouter;