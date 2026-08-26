const reportRepository = require(`./report.repository`);

const totalQuantityReport = async () => {
    return await reportRepository.totalQuantityReport();
}



module.exports = {
    totalQuantityReport,

}