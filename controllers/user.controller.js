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
            message: "Registro exitoso",
            obj: newUser
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ 
           message: "Error al registarse",
           obj: {}
    
        });
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
        
        if(user && user.password == pass){
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
                    
                message: "Contraseña Incorrecta",
                jwt: ""
            })
        }


    }catch(err){
        console.log(err)
    }
}

async function getUser(req, res) {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({
            message: "Información del usuario recuperada",
            obj: user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            message: "Error al recuperar la información del usuario",
            obj: {}
        });
    }
}


async function updateUser(req, res) {
    const { username } = req.params;
    const updateData = req.body;

    console.log('Updating user:', username);
    console.log('Update data:', updateData);

    try {
        const user = await User.findOneAndUpdate({ username }, updateData, { new: true, useFindAndModify: false });
        
        console.log('Updated user:', user);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({
            message: "Información del usuario actualizada",
            obj: user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            message: "Error al actualizar la información del usuario",
            obj: {}
        });
    }
}


module.exports = {registrarUsuario, loginUsuario, updateUser, getUser}