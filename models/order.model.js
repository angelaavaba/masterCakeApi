const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        index: true 
    },
    items: [{
        productId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
            required: true,
            index: true 
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }],
    date: {
        type: Date,
        default: Date.now,
        index: true 
    },
    status: {
        type: String,
        enum: ['cart', 'pending', 'shipped', 'delivered', 'cancelled'],
        default: 'cart'
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;

