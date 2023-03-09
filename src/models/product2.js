const mongoose=require('mongoose')
const ProductModel2=mongoose.Schema({
    title:String,
    detail:String,
    image:String
})
const Product2=mongoose.model("Product2",ProductModel2);
module.exports=Product2;


