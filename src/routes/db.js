// const mongoose=require('mongoose');
// const server='127.0.0.1:2707';
// const database='db';
// const connectDB=async()=>{
//   try{

//     await  mongoose.connect(`mongodb://localhost/db`,()=>{
//           console.log("Db connected");
//           Details.create({
//               brandName:"Mahakal Cooling Tower",
//               brandIconUrl:"",
//               links:[{
//                   label:"Home",
//                   url:"/"
      
      
//               },{
      
//                   label:"Service",
//                   url:"/service"
      
//               }]
              
//           })
      
//       });
//   }catch(err){
//     console.log("Not connected");
//   }
// }
// module.exports=connectDB;