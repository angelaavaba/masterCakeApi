const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
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
        required: false
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro'], 
        required: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
