const reportService = require('./report.service');
const totalQuantityReport = async (req, res, next) => {
    try {

        const totalQuantityReport = await reportService.totalQuantityReport();
        res.status(201).send({message: 'report created successfully', success: true, data: totalQuantityReport});
    } catch (error) {
        next(error);
    }
};


module.exports = {
    totalQuantityReport,
}