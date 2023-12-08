const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
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

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

