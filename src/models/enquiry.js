const mongoose = require("mongoose");
const enquiryModel = mongoose.Schema({
  firstname: {
    type: String,
    require: [true, "please Enter Your Name"],
  },
  lastname: {
    type: String,
    require: [true, "please Enter Your Name"],
  },
  companyname: {
    type: String,
    require: [true, "please Enter Company Name "],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    require: [true, "please Enter your Email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email'
    ]
   
  },
  mobileno: {
    type: Number,
    require: [true, "please Enter your Number"],
    Max: 10,
    Min: 10,
  },

  postalcode: {
    type: String,
    require: [true, "please Enter Your Postal Code"],
  },
 
  country: {
    type: String,
    require: [true, "please Enter Your Country"],
  },
  city: {
    type: String,
    require: [true, "please Enter Your City"],
  },
  Markettype: {
    type: String,
    require: [true, "please Enter Market Type"],
  },
  jobtype: {
    type: String,
    require: [true, "please Enter Job Type"],
  },
  Companytype: {
    type: String,
    require: [true, "please Enter Your Company Type"],
  },
  serialno: {
    type: String,
    require: [true, "please Enter  Serial No"],
  },
  message: {
    type: String,
    require: [true, "please Enter Message"],
  },
  Iamlookingfor: {
    type: String,
    require: [true, "please Enter I am Looking For"],
  },
  agree: {
    type: String,
    require: [true, "Please Select This"],
  },
});

const Enquiry = mongoose.model("Enquiry", enquiryModel);
module.exports = Enquiry;
