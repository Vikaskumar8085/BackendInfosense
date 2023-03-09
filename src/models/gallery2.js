const mongoose = require("mongoose");
const GalleryModel2 = mongoose.Schema({
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

const Gallery2 = mongoose.model("Gallery2", GalleryModel2);
module.exports = Gallery2;
