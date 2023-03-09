const mongoose=require('mongoose');
const VideoModel=mongoose.Schema({
    title:String,
    video: String
    
})
const Video=mongoose.model('video',VideoModel);
module.exports=Video;