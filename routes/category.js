const express = require('express');
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductsByCategory,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller');

// Rutas para los productos
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

