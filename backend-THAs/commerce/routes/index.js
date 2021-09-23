var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires { email, password,confirmPassword } - req.body
 * @description
 * Security, performance, edge cases
 * email validate - string
 * password validate
 * password == confirmPassword
 * JS / SQL (engine)- THA
 * check if email already exists
 * password hash
 * email lowercase ssh@gmail.com / SSH2gmail.com 
 * save
 */


router.post('/register',)
module.exports = router;
