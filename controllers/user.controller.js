const { router } = require("../app");
const { route } = require("../routes");

const User = require("../models/user.model").User;


async function registrarUsuario(req,res){
    const nombreUsuario = req.body.usrn;
    const pass = req.body.password;

    try{
        const newUser = await new User({
            username:nombreUsuario,
            password:pass
        }).save();

        res.json({
            obj: newUser
        })

    }catch(err){
        console.log(err)
    }
}

async function loginUsuario(req,res){
    const nombreUsuario = req.body.usrn;
    const pass = req.body.password;

    try{
        const user = await User.findOne({username: nombreUsuario});
        
        if(user.password == pass){
            res.json({
                username: user.username,
                password: user.password
            });
        
        }else{
            res.status(401).json('Contraseña incorrecta')
        }


    }catch(err){
        console.log(err)
    }
}

module.exports = {registrarUsuario, loginUsuario}