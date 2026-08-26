const { Router } = require('express');
const reportRouter = Router()
const reportController = require('../report/report.controller')

reportRouter.get('/totalQuantityReport',reportController.totalQuantityReport);




module.exports = reportRouter;