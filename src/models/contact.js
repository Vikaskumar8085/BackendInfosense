const mongoose = require("mongoose");
const contactModel = mongoose.Schema({
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
  companyname: {
    type: String,
    require: [true, "please Enter Company Name "],
  },
  subject: {
    type: String,
    require: [true, "please Enter Subject "],
  },
  message: {
    type: String,
    require: [true, "please Enter Message"],
  },
});

const Contact = mongoose.model("contactus", contactModel);
module.exports = Contact;
