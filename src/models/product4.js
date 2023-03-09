const mongoose=require('mongoose')
const ProductModel4=mongoose.Schema({
    title:String,
    detail:String,
    image:String
})
const Product4=mongoose.model("Product4",ProductModel4);
module.exports=Product4;


