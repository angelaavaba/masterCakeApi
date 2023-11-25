var express = require('express');
var router = express.Router();

const {
  createProduct,
  getProducts,
  updateProduct,
  getProductsByCategory,
  deleteProduct
} = require('../controllers/product.controller');

const{verifyjwt} = require('../controllers/auth.contoller');


router.post('/',verifyjwt, createProduct);

router.get('/',verifyjwt, getProducts);

router.get('/category/:category',verifyjwt, getProductsByCategory);

router.put('/:id',verifyjwt, updateProduct);

router.delete('/:id',verifyjwt, deleteProduct)

module.exports = router;
