const mongoose=require('mongoose')
const TermsModel=mongoose.Schema({
    Heading:String,
    policy:String
   
})
const Terms=mongoose.model("Terms Of Use",TermsModel);
module.exports=Terms;