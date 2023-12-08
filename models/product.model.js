const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
        index: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true,
        index:true
    },
    price: {
        type: Number,
        required: true,
        index:true
    },
    description: {
        type: String,
        required: false,
        index:true
    },
    image: {
        type: String,
        required: false
    }
});



const Product = mongoose.model('Product', productSchema);
module.exports = Product;
