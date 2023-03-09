const mongoose = require("mongoose");
const applyModel = mongoose.Schema({
  name: {
    type: String,
    require: [true, "please Enter Your Name"],
  },
  email: {
    type: String,
    require: [true, "please Enter your Email"],
  },
  mobileno: {
    type: Number,
    require: [true, "please Enter your Number"],
    Max: 10,
    Min: 10,
  },
  exprerience: {
    type: String,
    require: [true, "please Enter your Total_Exp"],
  },
  current_ctc: {
    type: Number,
    require: [true, "please Enter your CTC"],
  },

  Expected_ctc: {
    type: Number,
    require: [true, "please Enter your Expected CTC"],
  },

  city: {
    type: String,
    require: [true, "please Enter Your City"],
  },
  state: {
    type: String,
    require: [true, "please Enter your State"],
  },
  address: {
    type: String,
    require: [true, "please Enter your Address"],
  },

  resume: {
    type: Object,
    require: [true, "please Add Pdf File"],
  },
});
const Apply = mongoose.model("apply", applyModel);
module.exports = Apply;
