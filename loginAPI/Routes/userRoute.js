const express = require('express');
const userRoutes = express.Router();
const User = require('../Models/User');


userRoutes.route('/add').post( (req,res) => {
    let user = new User(req.body);
    const {body} =req;
    let {
        Email
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
    })
    user.save().then( user => {
        res.status(200).send({message:'user added', data:user});
    }).catch( err => {
        res.status(400).send('Unable to insert the data');
    });
});
module.exports = userRoutes;