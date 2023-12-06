const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    ProductId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);

