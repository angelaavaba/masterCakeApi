var express = require('express');
var router = express.Router();

const {
  createProduct,
  getProducts,
  updateProduct,
  getProductsByCategory
} = require('../controllers/product.controller');

const{verifyjwt} = require('../controllers/auth.contoller');


router.post('/',verifyjwt, createProduct);

router.get('/',verifyjwt, getProducts);

router.get('/category/:category',verifyjwt, getProductsByCategory);

router.put('/:id',verifyjwt, updateProduct);



module.exports = router;
