const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        index:true
        
    },
    ProductId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true,
        index:true
    }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);

