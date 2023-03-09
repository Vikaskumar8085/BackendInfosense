const mongoose = require("mongoose");
const GalleryModel1 = mongoose.Schema({
  title: {
    type: String,
    require: [true, "please provide Title"],
  },
  image: {
    type: String,
    require: [true, "please Provide Image"],
  },
  Category: {
    type: String,
    require: [true, "please Provide Category"],
  },
});
const Gallery1 = mongoose.model("Gallery1", GalleryModel1);
module.exports = Gallery1;
