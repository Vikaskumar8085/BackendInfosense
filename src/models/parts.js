const mongoose = require('mongoose')
const Part = mongoose.Schema({  
        title: {
                type: String,
                require: [true, "please provide Title"],
              },
              image: {
                type: String,
                require: [true, "please Provide Image"],
              }
})
const  Parts = mongoose.model("Parts",  Part);
module.exports = Parts;