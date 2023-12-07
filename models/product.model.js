const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
});



const Product = mongoose.model('Product', productSchema);
module.exports = Product;
