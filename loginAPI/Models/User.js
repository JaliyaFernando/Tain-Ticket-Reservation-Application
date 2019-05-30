const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    Email : {
        type : String,
        default : ''
    },
    Password : {
        type : String,
        default: ''
    }
});
User.methods.generateHash = function(Password){
    return bcrypt.hashSync(Password, bcrypt.genSaltSync(8),null);
};

User.methods.validPassword = function(Password){
    return bcrypt.compareSync(Password, this.Password);
};
module.exports = mongoose.model('User',User);