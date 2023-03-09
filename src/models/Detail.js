const mongoose=require('mongoose');
const Details =mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links:[{
        label:String,
        url:String
    }],
})
// async function run() {
//     // Create a new connection and connect to MongoDB...
//     const conn = await mongoose.
//       createConnection('mongodb://localhost:27017/db').
//       asPromise();
  
//     // But register a model on Mongoose's default connection
//     mongoose.model('detail', schema);
  
//     await mongoose.model('detail').findOne(); // Error: buffering timed out
//   }
  
//   run();
module.exports=mongoose.model("db",Details);