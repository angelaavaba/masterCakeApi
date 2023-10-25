const express = require('express');
const router = express.Router();

const {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} = require('../controllers/category.controller');

const{verifyjwt} = require('../controllers/auth.contoller');



// Rutas para los productos
router.post('/', verifyjwt, createCategory);
router.get('/',verifyjwt, getAllCategories);
router.get('/:id',verifyjwt, getCategoryById);
router.put('/:id',verifyjwt, updateCategory);
router.delete('/:id',verifyjwt, deleteCategory);

module.exports = router;

