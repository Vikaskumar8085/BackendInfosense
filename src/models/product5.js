const mongoose=require('mongoose')
const ProductModel5=mongoose.Schema({
    title:String,
    detail:String,
    image:String
})
const Product5=mongoose.model("Product5",ProductModel5);
module.exports=Product5;


