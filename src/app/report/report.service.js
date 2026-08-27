const reportRepository = require(`./report.repository`);

const totalQuantityReport = async () => {
    return await reportRepository.totalQuantityReport();
}
const highestStockQuantity = async () => {
    return await reportRepository.highestStockQuantity();
}
const startWithF = async () => {
    return await reportRepository.startWithF();
}




module.exports = {
    totalQuantityReport,
    highestStockQuantity,
    startWithF,
}