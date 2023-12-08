const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true 
    },
    password: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: false
    },
    domicilio: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro'],
        required: true,
        index: true 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
