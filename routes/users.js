var express = require('express');
var router = express.Router();

const{
  registrarUsuario
}= require('../controllers/user.controller.js')

const{
  loginUsuario
}= require('../controllers/user.controller.js')




/* GET users listing. */
router.get('/',verifyjwt, function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registrar',registrarUsuario);
router.post('/login',loginUsuario)

module.exports = router;
