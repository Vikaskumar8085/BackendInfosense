const mongoose = require("mongoose");
const CareerModel = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please Enter Title"],
  },
  position: {
    type: String,
    require: [true, "Please Enter Position"],
  },
  location: {
    type: String,
    require: [true, "Please Enter Loacation"],
  },
  qualification: {
    type: String,
    require: [true, "Please Enter Qualification"],
  },
  exprerience: {
    type: String,
    require: [true, "Please Enter Experience"],
  },
  ctc: {
    type: String,
    require: [true, "Please Enter Your CTC"],
  },
});

const Career = mongoose.model("Career", CareerModel);
module.exports = Career;
