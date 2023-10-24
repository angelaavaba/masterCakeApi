const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    UserId: {
        type: Number,
        required: true,
    },
    ProductId: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    state: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;

