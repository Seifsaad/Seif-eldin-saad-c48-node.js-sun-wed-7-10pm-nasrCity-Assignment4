const reportService = require('./report.service');
const totalQuantityReport = async (req, res, next) => {
    try {

        const totalQuantityReport = await reportService.totalQuantityReport();
        res.status(201).send({message: 'report created successfully', success: true, data: totalQuantityReport});
    } catch (error) {
        next(error);
    }
};
const highestStockQuantity = async (req, res, next) => {
    try {

        const highestStockQuantity = await reportService.highestStockQuantity();
        res.status(201).send({message: 'report created successfully', success: true, data:highestStockQuantity});
    } catch (error) {
        next(error);
    }
};
const startWithF = async (req, res, next) => {
    try {

        const startWithF = await reportService.startWithF();
        res.status(201).send({message: 'report created successfully', success: true, data:startWithF});
    } catch (error) {
        next(error);
    }
};


module.exports = {
    totalQuantityReport,
    highestStockQuantity,
    startWithF
}