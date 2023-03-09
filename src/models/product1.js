const mongoose=require('mongoose')
const ProductModel1=mongoose.Schema({
    title:String,
    detail:String,
    image:String
})
const Product1=mongoose.model("Product1",ProductModel1);
module.exports=Product1;


