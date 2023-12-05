var express = require('express');
var router = express.Router();

const { registrarUsuario, loginUsuario, getUser, updateUser } = require('../controllers/user.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:username', getUser); // New route to get user information
router.post('/registrar', registrarUsuario);
router.post('/login', loginUsuario);
router.put('/update/:username', updateUser);

module.exports = router;


