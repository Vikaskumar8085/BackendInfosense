const mongoose=require('mongoose');
const Login=mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String
    }
})
const loginModel = mongoose.model("login",Login);
module.exports = loginModel;
