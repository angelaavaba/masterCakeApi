var express = require('express');
var router = express.Router();

const{
  registrarUsuario
}= require('../controllers/user.controller.js')

const{
  loginUsuario
}= require('../controllers/user.controller.js')

const{verifyjwt} = require('../controllers/auth.contoller');


/* GET users listing. */
router.get('/',verifyjwt, function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registrar', verifyjwt,registrarUsuario);
router.post('/login',verifyjwt,loginUsuario)

module.exports = router;
