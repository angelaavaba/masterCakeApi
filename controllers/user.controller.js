const { router } = require("../app");
const { route } = require("../routes");
const jwt = require('jsonwebtoken');

const {config} = require('../config/config');


const User = require("../models/user.model").User;


async function registrarUsuario(req, res) {
    const nombreUsuario = req.body.usrn;
    const pass = req.body.password;
    const {fechaNacimiento, domicilio, sexo } = req.body;
    

    try {
        const newUser = await new User({
            username: nombreUsuario,
            password : pass,
            fechaNacimiento,
            domicilio,
            sexo
        }).save();

        res.json({
            obj: newUser
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
}


async function loginUsuario(req,res){
    const nombreUsuario = req.body.usrn;
    const pass = req.body.password;

    console.log(nombreUsuario);
    console.log(pass);

    try{
        const user = await User.findOne({username: nombreUsuario});
        console.log(user);
        
        if(user.password == pass){
            console.log("entro")

            try{
                const nuevoToken = await jwt.sign(
                    {username: nombreUsuario},
                    config.auth.secretKey,
                    {algorithm:'HS256'}
                    );
        
                    res.status(200).json({
                        message: "Login exitoso",
                        jwt: nuevoToken
                    })
         
            }catch(err){
                console.log(err)
                res.status(500).json({
                    
                    message: "Error de autenticacion"
                })
            }
        
        }else{
            res.status(401).json({
                    
                message: "Contraseña Incorrecta"
            })
        }


    }catch(err){
        console.log(err)
    }
}

module.exports = {registrarUsuario, loginUsuario}