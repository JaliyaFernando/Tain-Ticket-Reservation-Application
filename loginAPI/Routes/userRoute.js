const express = require('express');
const userRoutes = express.Router();
const User = require('../Models/User');


userRoutes.route('/add').post( (req,res) => {
    const {body} =req;
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

userRoutes.route('/login').get( (req,res) => {

});
module.exports = userRoutes;