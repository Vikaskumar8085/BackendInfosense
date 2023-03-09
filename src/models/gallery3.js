const mongoose = require("mongoose");
const GalleryModel3 = mongoose.Schema({
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

const Gallery3 = mongoose.model("Gallery3", GalleryModel3);
module.exports = Gallery3;
