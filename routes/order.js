const express = require('express');
const router = express.Router();
const {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
    getOrdersByUserId
} = require('../controllers/order.controller');

const{verifyjwt} = require('../controllers/auth.contoller');

router.post('/',verifyjwt, createOrder);
router.get('/',verifyjwt, getAllOrders);
router.get('/:id',verifyjwt, getOrderById);
router.put('/:id', verifyjwt,updateOrder);
router.delete('/:id', verifyjwt,deleteOrder);
router.get('/user/:userId',verifyjwt, getOrdersByUserId);



module.exports = router;
