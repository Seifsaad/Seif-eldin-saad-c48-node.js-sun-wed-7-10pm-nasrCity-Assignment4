const { Router } = require('express');
const productRouter = Router()
const productController = require('../product/product.controller');

productRouter.post('/createProduct', productController.createProduct);
productRouter.get('/getProducts', productController.getProducts);
productRouter.get('/:id', productController.getProductsById);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);




module.exports= productRouter;