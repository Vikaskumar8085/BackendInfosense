const mongoose=require('mongoose')
const PoliciesModel=mongoose.Schema({
    title:String,
    detail:String
   
})

const Policies=mongoose.model("Privacy_Policies",PoliciesModel);
module.exports=Policies;