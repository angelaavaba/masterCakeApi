const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type : String,
        require : true
    },
    category: {
        type : String,
        require : true
    },
    price:{
        type : Number,
        require : true
    },
    description:{
        type : String,
        require : false
    }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;