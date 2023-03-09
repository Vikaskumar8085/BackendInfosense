const mongoose = require("mongoose");
const GalleryModel = mongoose.Schema({
  title: {
    type: String,
    require: [true, "please provide Title"],
  },
  image: {
    type: String,
    required:true ,
  },
  Category: {
    type: String,
    require: [true, "please Provide Category"],
  },
});

const Gallery = mongoose.model("Gallery", GalleryModel);
module.exports = Gallery;
