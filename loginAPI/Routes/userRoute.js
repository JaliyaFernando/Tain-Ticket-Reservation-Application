const express = require('express');
const userRoutes = express.Router();
let User = require('../Models/User');


userRoutes.route('/add').post( (req,res) => {
    let {body} =req;
    let {
        Email,
        Password
    } = body;

    User.find({
        Email:Email
    }, (err, user) => {
        if(err){
            return res.send({
                message: 'Error: Server error'
            });
        }else if(user.length > 0){
            return res.send({
                message : 'Account is already exist'
            });
        }
        const newUser = new User();
        newUser.Email = Email;
        newUser.Password = newUser.generateHash(Password);
        newUser.save( (err, user) => {
            if(err){
                return res.send({ message : 'Server error'});
            }
            return res.send({
                message: 'Signed up'
            });
        });
    });
});

userRoutes.route('/login/:Email/:Password').get( (req,res) => {
    const user = new User();
    let Email = req.params.Email;
    let Password = req.params.Password
    User.find({Email : Email, Password : user.validPassword(Password)}, (err,user) => {
        if(err){
            console.error(err);
        }else if(user.length > 0){
            res.status(200).send({message : 'Found'});
        }else{
            res.status(404).send({message: 'Not found'});
        }
    });
});
userRoutes.route('/update').put( (req,res) => {

});
module.exports = userRoutes;