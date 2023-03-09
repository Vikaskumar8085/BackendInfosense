const mongoose=require('mongoose')
const ProductModel=mongoose.Schema({
    title:String,
    detail:String,
    image:String
})
const Product=mongoose.model("Product",ProductModel);
module.exports=Product;


