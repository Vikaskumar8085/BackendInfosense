const mongoose=require('mongoose');
const sliderModel=mongoose.Schema({
    photo: String,
    class:String
})
const Slider=mongoose.model('slider',sliderModel);
module.exports=Slider;
