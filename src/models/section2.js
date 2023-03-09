const mongoose=require('mongoose');
const section=mongoose.Schema({
    Name: String
   
})
module.exports=mongoose.model('section2',section)