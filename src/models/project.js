const mongoose=require('mongoose')
const ProjectModel=mongoose.Schema({
    title:String,
    data:String,
    image:String
})

const Project =mongoose.model("Project",ProjectModel);
module.exports= Project