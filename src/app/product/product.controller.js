const productService = require("./product.service");
const createProduct = async (req, res, next) => {
    try {
        const {name, stock, price, supplierId} = req.body;
        const createdProduct = await productService.createProduct(name, stock, price, supplierId);
        res.status(201).send({message: "Product created successfully.", success: true, data: createdProduct});
    } catch (error) {
        next(error)
    }
};

const getProducts = async (req, res, next) => {
    try {
        const allProducts = await productService.getProducts();
        res.status(200).send({message: "Product list successfully.", success: true, data: allProducts});
    } catch (error) {
        next(error)
    }
};

const getProductsById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const productById = await productService.getProductsById(id)
        res.status(200).send({message: "Product with id successfully.", success: true, data: productById});
    } catch (error) {
        next(error)
    }
};

const updateProduct = async (req, res,next) => {
    try {


        const {name, stock, price, supplierId} = req.body;
        const {id} = req.params;
        const updatedProduct = await productService.updateProduct(name, price, stock, supplierId,id);
        res.status(201).send({message: "Product updated successfully.", success: true, data: updatedProduct});
    } catch (error) {
        next(error)
    }

};
const deleteProduct = async (req, res,next) => {
try {
    const {id} = req.params;
    const deletedProduct = await productService.deleteProduct(id);
    res.status(200).send({message: "Product deleted successfully.", success: true});
}catch (error) {
    next(error)
}
};


module.exports = {
    createProduct,
    getProducts,
    getProductsById,
    updateProduct,
    deleteProduct,
}
