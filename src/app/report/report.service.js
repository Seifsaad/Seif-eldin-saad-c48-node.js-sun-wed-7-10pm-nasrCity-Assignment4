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
const neverSold = async () => {
    return await reportRepository.neverSold();
}
const allSales = async () => {
    return await reportRepository.allSales();
}




module.exports = {
    totalQuantityReport,
    highestStockQuantity,
    startWithF,
    neverSold,
    allSales,
}