const { check, validationResult } = require("express-validator");
const GymORM = require("../models/gymORM");
var passport = require('passport');
var LocalStrategy = require('passport-local');

const rulesValidation = [
    check('name').notEmpty().withMessage('name is required'),
    check('image').notEmpty().withMessage('image is required'),
];

class GymController{

    static async getAllDevices(req,res){
        //let results = await userModel.getUsers();
        let results = await GymORM.findAll();
        if (results){
            //res.send(results)
            res.render("gymread", {device: results});
        }
    }

    static async getDevice(req,res){
        let id = req.params.id;
        //let results = await userModel.getUser(id);
        let results =  await GymORM.findByPk(id);
        if (results){
            //res.send(results)
            res.render("gymadd", {device: results});
        }
    }

    static async getUpdateDevice(req,res){
        let id = req.params.id;
        //let results = await userModel.getUser(id);
        let results =  await GymORM.findByPk(id);
        if (results){
            //res.send(results)
            res.render("gymupdate", {device: results});
        }
    }

    static async addDevice(req, res){
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.send(errors.errors[0].msg)
        }
        else{
            // let result = await userModel.addUser(
            //     req.body.username, 
            //     req.body.password, 
            //     req.body.avatar
            //     );
            
            let result = await GymORM.create({
                name: req.body.name, 
                image:req.body.image});

            if(result){
                res.send("A new device has been added.");
            }else{
                res.send("Error.");
            }
        } 
    }

    static async updateDevice(req, res){
        let id = req.params.id; //ROUTE //addUser//id
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.send(errors.errors[0].msg)
        }
        else{
            // let result = await userModel.updateUser(
            //     id,
            //     req.body.username, 
            //     req.body.password, 
            //     req.body.avatar
            //     );
            let result = await GymORM.update({
                name: req.body.name,
                image: req.body.image
            },
            {
                where:{id: id}
            });

            if(result){
                res.redirect('/gym/gymread')
                //res.send("A new user has been updated.");
            }else{
                res.send("Error updating.");
            }
        } 
    }

    static async deleteDevice(req,res){
        let id = req.params.id;
        let result = false;

        if (id){
            result = await GymORM.destroy({

                where:{
                    id: id
                }
                
            });

        }
        res.status(200).send("ok");
    }

}

module.exports = {
    rulesValidation,
    GymController
};