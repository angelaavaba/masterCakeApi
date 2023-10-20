const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

async function firmarjwt(req,res){

    try{
        const nuevoToken = await jwt.sign(
            {email: "angelaavalos2410@gmail.com"},
            config.auth.secretKey,
            {algorithm:'HS256'}
            );

            res.status(200).json({
                message: "OK",
                jwt: nuevoToken
            })

    }catch(err){
        res.status(500).json({
            message: "Error al crear el token jwt"
        })
    }
    
}

async function verifyjwt(req,res){

  const headerToken = req.headers.authorization;
  console.log(headerToken);
  res.status(200);
  (next);
    
}



module.exports = {
    firmarjwt,
    verifyjwt
}