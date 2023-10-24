var express = require('express');
var router = express.Router();

const {
  createProduct,
  getProducts,
  updateProduct,
  getProductsByCategory
} = require('../controllers/product.controller');

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/category/:category', getProductsByCategory);

router.put('/:id', updateProduct);


module.exports = router;
