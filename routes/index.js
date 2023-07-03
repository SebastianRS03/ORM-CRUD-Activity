var express = require('express');
var router = express.Router();

//const usersController = require('../controllers/UsersController');
const {validationRules, UsersController} = require("../controllers/UsersController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'layout2' });
});

router.get('/allusers', UsersController.getAllUsers);

router.get('/adduser', (req, res)=>{
  res.render("adduser");
});

router.get('/adduser/:id', UsersController.getUser);

router.post('/adduser', validationRules, UsersController.addUser);
router.post('/adduser/:id', validationRules, UsersController.updateUser);

router.delete('/deleteuser/:id', validationRules, UsersController.deleteUser);

module.exports = router;
