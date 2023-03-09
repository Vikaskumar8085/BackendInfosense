const mongoose=require('mongoose')
const Blogdetail=mongoose.Schema({
    name:String,
    Photo:String,
    post:String
})
const Blog=mongoose.model("Blogdetails",Blogdetail);
module.exports= Blog;