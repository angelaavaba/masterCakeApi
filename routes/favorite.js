const express = require('express');
const router = express.Router();
const {
    addFavorite,
    getUserFavorites,
    removeFavorite
} = require('../controllers/favorite.controller');

const{verifyjwt} = require('../controllers/auth.contoller');

router.post('/',verifyjwt, addFavorite);
router.get('/user/:userId',verifyjwt, getUserFavorites);
router.delete('/:userId/:productId',verifyjwt, removeFavorite); // Aquí esperamos que UserId y ProductId sean enviados en el cuerpo de la solicitud

module.exports = router;

