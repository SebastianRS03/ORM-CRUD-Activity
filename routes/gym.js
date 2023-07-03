var express = require("express");
var router = express.Router();

const passport = require('../controllers/GymController');

const {
    rulesValidation,
    GymController
        
    } = require('../controllers/GymController');
    
    const productsORM = require('../models/gymORM');

router.get('/gymadd', function(req, res){
    res.render('gymadd');
})

router.get('/menu', function(req, res){
    res.render('menu');
})

router.get('/gymupdate', function(req, res){
    res.render('gymupdate');
})

router.post('/gymadd', rulesValidation, GymController.addDevice);

router.get('/gymupdate/:id', GymController.getUpdateDevice);

router.get('/gymread', GymController.getAllDevices);

router.post('/gymupdate/:id', rulesValidation, GymController.updateDevice);

router.delete('/gymdelete/:id', rulesValidation, GymController.deleteDevice);

module.exports = router;