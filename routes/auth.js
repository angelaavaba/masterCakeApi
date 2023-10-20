var express = require('express');
var router = express.Router();

const{
    firmarjwt
} = require('../controllers/auth.contoller');

router.post('/get-jwt',firmarjwt);

module.exports = router;



