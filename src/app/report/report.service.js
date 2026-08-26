const reportRepository = require(`./report.repository`);

const totalQuantityReport = async () => {
    return await reportRepository.totalQuantityReport();
}

const getSuppliers = async () => {
    return await supplierRepository.getAllSuppliers()
}
const updateSupplier = async (name,contact,id) => {
    return await  supplierRepository.updateSupplier(name,contact,id)
}

const deleteSupplier = async (id) => {
    return await supplierRepository.deleteSupplier(id)
}

module.exports = {
    totalQuantityReport,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}