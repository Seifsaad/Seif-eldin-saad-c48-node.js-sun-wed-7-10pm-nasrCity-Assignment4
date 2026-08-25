const supplierRepository = require(`./supplier.repository`);

const createSupplier = async (name, contact) => {
    return await supplierRepository.createSupplier(name, contact);
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
    createSupplier,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}