const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
