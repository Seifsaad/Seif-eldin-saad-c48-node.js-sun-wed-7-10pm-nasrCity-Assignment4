const productRepository = require('./product.repository');
const createProduct = async (name,price,stock,supplierId) => {
    return await productRepository.createProduct(name,price,stock,supplierId);
};

const getProducts =async () => {
    return  allProducts =await productRepository.getProducts()
};

const getProductsById =  async (id) => {
    return productById = await productRepository.getProductsById(id)
};

const updateProduct = async (name,price,stock,supplierId,id) => {
    return updatedProduct = await productRepository.updateProduct(name,price,stock,supplierId,id)
};

const deleteProduct = async (id) => {
    return deletedProduct = await productRepository.deleteProduct(id)
};


module.exports = {
    createProduct,
    getProducts,
    getProductsById,
    updateProduct,
    deleteProduct,
}