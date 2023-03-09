const mongoose=require('mongoose')
const ProductModel3=mongoose.Schema({
    title:String,
    detail:String,
    image:String
})
const Product3=mongoose.model("Product3",ProductModel3);
module.exports=Product3;


