const express = require('express')
const UseRouters = require("./routes/UseRouters");
// const { path } = require('express/lib/application')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const Details = require('./models/Detail')
const login = require('./models/login')
const bodyParser = require('body-parser')
// const db=require('./routes/db')
app.use(express.static('public'))
// const db='mongodb://localhost/database'
const dotenv = require('dotenv');
 const db = 'mongodb+srv://shreyash:shreyashsoni@cluster0.ajzhkkh.mongodb.net/db?retryWrites=true&w=majority'
// const db = "mongodb://0.0.0.0:27017/db"
const routes = require('./routes/main')
app.set('view engine', 'ejs')
app.set('views', 'views')
// ejs.registerPartials('views/partials')
const slider = require('./models/slider')
const section = require('./models/section2')
const enquiry = require('./models/enquiry')
const contact = require('./models/contact')
const Blogdetail = require('./models/Blogdetails')
const product = require('./models/product')
const product1 = require('./models/product1')
const product2 = require('./models/product2')
const product3 = require('./models/product3')
const product4 = require('./models/product4')
const product5 = require('./models/product5')
const project = require('./models/project')
const video = require('./models/video')
const gallery = require('./models/gallery')
const gallery1 = require('./models/gallery1')
const gallery2= require('./models/gallery2')
const gallery3 = require('./models/gallery3')
const Policies = require('./models/privacypolicy')
const Terms = require('./models/Terms_of_use')
const career = require('./models/career')
const apply = require('./models/apply')
const Parts=require('./models/parts')
const Subscription=require('./models/Subscription')
const session = require("express-session")
const cors= require("cors");
// const { Session } = require('inspector');
const port = process.env.PORT || 3000




app.use(bodyParser.urlencoded({
  extended: true
}))

// app.use(cookieParser())
app.use(session({
  secret :"mysecretkey",
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:60000}

}))

dotenv.config()


app.use(cors());
app.use(express.json());

//Routes 

app.use("/api/v1",UseRouters);
app.use('', routes)

//Routes 




// dotenv.config()
mongoose.set('strictQuery', true)
mongoose.connect(db,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then( ()=>{
  console.log("Db connected")
})


// mongoose.connect(db, () => {
//   console.log('Database connected')
// mongoose.set("strictQuery",true)
// mongoose.connect(db, () => {
//   console.log('Database connected')



  //     career.create({
  //           title:"Business unit head",
  //           position:"Business unit head",
  //           location:"Indore, Madhya Pardesh",
  //           qualification:"Mechanical / Chemical Eng ",
  //           exprerience: "10 years",
  //           ctc: "5-8 CTC"
    //   })
//   apply.create({
//     name:"shreyash",
//     email:"dem@gmail.com",
//     mobileno:"1234321235",
//     exprerience:"6",
//     current_ctc:"2000000",
//     Expected_ctc:"1098765432",
//     city:"dtfesr",
//     state:"rfedtgrf",
//     address:"retrfertretretsz",
//     resume:"resume.pdf"

//   })
  //     video.create({
  //           title:"Demo",
  //           video:"demo.mp4",

  // })
  //     video.create({
  //           title:"Demo1",
  //           video:"demo1.mp4",

  // })

  //     Policies.create({
  //         title:"Privacy Policy",
  //           detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  // })
  //         Terms.create({
  //        Heading:"Terms Of Use",
  //           policy:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  // }) 
  // 

  //     
  // gallery.create({
  //                          title:"FRP Axial Fan",

  //                        image:"productimg.png",
  //                 },{
  //                             title:"FRP Cooling Tower Fan",

  //                         image:"product1.png",
  //                     },{
  //                            title:"FRP Fan Stack",

  //                         image:"product2.png",
  //       },{
  //                           title:"Honeycom Fills",

  //                         image:"product3.jpeg",

  //                     },{
  //                        title:"Cooling Tower Nozzels",

  //                         image:"pic4.jpg"

  //     },{
  //         title:"PVC Splash Bar",

  //                             image:"/images/pic4.jpg",
  //     })

  //  Parts.create({
  //                            title:"Cooling Tower Fan",
  
  //                          image:"productimg.png",
  // })

//  gallery1.create({
//                            title:"Cooling Tower Fan",

//                          image:"productimg.png",
//                   })


//  gallery2.create({
//                            title:"FRP Cooling Tower Fan",

//                          image:"productimg.png",
//                   })


//  gallery3.create({
//                            title:"FRP Fan stack",

//                          image:"productimg.png",
//                   })


//  product1.create({
//                            title:"FAN Blade",
//                           detail:"Mahakal designs its own parts and components specifically for cooling",

//                          image:"productimg.png",
//                   })


//  product2.create({
//                            title:"Wooden Cooling",
//                              detail:"Mahakal designs its own parts and components specifically for cooling",
//                          image:"productimg.png",
//                   })


//  product3.create({
//                            title:"Gear Box",
//                             detail:"Mahakal designs its own parts and components specifically for cooling",
//                          image:"productimg.png",
//                   })

//  product4.create({
//                            title:"FRP Fan",
//                             detail:"Mahakal designs its own parts and components specifically for cooling",
//                          image:"productimg.png",
//                   })
//  product5.create({
//                            title:"RCC Cooling Tower",
//                             detail:"Mahakal designs its own parts and components specifically for cooling",
//                          image:"productimg.png",
//                   })





















  // project.create({
  //     title:"Our Successful Overseas Installed Cooling Tower in Thailand",
  //     data:"ASSIGNMENT  Supply & Conversion of Bottle Type Counter Flow to Pultruded FRP IDCT of 450 m3/hr ( 1 Cell) (1487 TR) PARAMETERS DESIGN VALUES Capacity 450 m3/hr HOT WATER TEMPERATURE 41 ",
  //     image:"pic1.jpg"   
  // })

  //  login.create({
  //     email:'ab@gmail.com',
  //     password:'123'
  //  })
  // Blogdetail.create({
  //    name:"What makes Mahakal Cooling Tower a market leader in Cooling Towers from Local to Global.",
  //     Photo:"/images/pic4.jpg ",
  //     post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam explicabo hic eum, tempora laudantium amet voluptatibus dignissimos distinctio dolores! Iste voluptatem laborum exercitationem architecto error accusamus. Assumenda ut rerum deserunt perspiciatis, expedita aliquam maxime magni quidem? Dolor repellat, quisquam porro fuga amet animi et inventore architecto, quam deleniti, perferendis modi laudantium voluptatibus mollitia asperiores officia! Beatae quia quis voluptates corporis voluptatum! <br><br><br> Ipsam dolore exercitationem id, corporis veritatis suscipit harum expedita quos neque quis impedit veniam fugiat at nemo est hic ratione perspiciatis dicta nesciunt? Nesciunt recusandae aliquid eius? Quod ab aperiam reprehenderit amet suscipit voluptatum molestiae tenetur quas laborum quasi, nobis error culpa repudiandae unde quis ea! Aut, doloribus quibusdam iusto cumque rerum quasi molestias perferendis libero odit nesciunt earum perspiciatis facere quis. Doloremque non vitae dignissimos enim voluptatem? "
  // })
  // 
  //             product.create({
  //                      title:"FRP Axial Flow Fan",
  //                    detail: "We Are manufacturer, Exporter And Domestic Supplier For PVC Splash Bar. PVC V-Bar Available in three size (a)28X28mm (b) 35X35mm (c) 65X65mm. And thickness 1mm And 1.3mm. Color Gray.",
  //                    image:"/images/productimg.png",
  //             },{
  //                         title:"Fan Stick",
  //                     detail:"FRP Fan Stack, which is available in diverse sizes and shapes. These ranges from a diameter of 6 feet to 36 feet and height from 1 meter to 5 meter. These high precision FRP Fan Stacks are available in ribbed construction and aerodynamic inlet bell mouth, which helps in reducing frictional losses and velocity pressure. To maintain mechanical items, these FRP Fan Stacks are provided with inspection door.These FRP Fan Stack Cooling Tower are extensively used in industries for transferring process waste heat in environment. Our FRP Fan Stack Cooling Towers are manufactured with great precision and reduces frictional losses and velocity pressure. Designed based on theory of airflow path uniformity and constitute of three sections which includes suction section, work section and velocity recovery section. Suction section decreases the resistance by suddenly decreasing air path. Further fans at work section are used to push air upward. Owing to their special design, profile are able to recover some of velocity of exhaust air at velocity section, thus improving efficiency of fan and saving operation cost.",

  //                     image:"/images/product1.png",
  //                 },{
  //                        title:"Gear Boxes",
  //                    detail:"Mahakal designs its own parts and components specifically for cooling tower operation. We have 5 series of gear reducers or gearboxes designed according to specific tower capacities and are designed in order to require minimum maintenance and deliver high transmission efficiency. Gears are made of high strength allow steel conforming to EN & SAE standards and are duly case hardened. Time-tested reliable performanc  Minimum maintenance requiredHigh transmission efficienc Weatherproof build means long service lifeTrouble-free splash type lubrication system.Fan shafts are made of high strength steel as per relevant IS standards and are machine & heat treated for greater yield strengthBearings are conservatively selected heavy-duty taper roller type 7.5 HP to 200 HP applications",

  //                     image:"/images/product2.png",
  //   },{
  //                       title:"FRP cooling Towers Fan",
  //                       detail:"MCT F.R.P. Fans are specially designed for cooling systems applications. The main reasons for the high efficiency is there tapered and twisted aerofoil design. Each transverse cross section of the blade is a true replica of AERODYNAMIC SECTION which is not possible in other makes of fans.Life of F.R.P. Fan Blade minimum 05 Year not proper maintenance. And Proper maintenance then F.R.P. Fan Blade life external more. F.R.P. Fan Blade light weight compression aluminum Fan Blade. This is a Big Advantage for F.R.P. Fan Blade. Because easily Drive and never failure. The ultimate axial strength of the laminate in the fillet radius that joins the hub to the blade was approximately 30, 000 psi thus a safety factor of 22 would be produced under operating conditions. This was more than adequate to assure longer life expectancy for the fan so that the client could look . a. Light in weight compare to the conventional fan resulting in increased life of the mechanical drives of the fan. b. FRP impeller has better Air Flow rate. c. Lower energy consummation for same air Flow. d. Lower noise levels. e. Lighter FRP Blades consume approx 15% lesser energy as compared to conventional metallic blade fans.",

  //                     image:"/images/product3.jpeg",

  //                 },{
  //                    title:"FRP Round Tape Cooling Fan",
  //                      detail:"We are manufacture exporter and domestic supplier round type FRP cooling towers.  DETAILS CASING :- Casing of tower is made of fiber glass/reinforced plastic. The cooling tower is designed and constructed for minimum maintenance and long life. You can operate in aggressive environment & resistant water born contaminates. P.V.C. FILL :- A pre-eminent quality and long life fill consists of modular block of PVC honey combs construction to create prolonged contact time of hot air with water for maximum heat transfer. The air pressure drop through the fill is negligible. SPRINKLER :- The uniform distribution of water over the honey combs fills this sprinkler, rotates by self propulsion and eliminates the need for atomizing the water nozzles. The head side includes ball bearing requiring minimum maintenance. MOTOR :- Elector Magnetic designs of the entire range of New India and Bharat Motor covered by 3N series have been developed in keeping with the Latest national and international practices and confirm in general to 1 EC recommendations FAN :- An aero-dynamically designed axial flow type fan is a well balanced construction. The fan blades are of case aluminum alloy. Fan with variable pitched blades is dynamically balanced  for low vibration and high efficiency. Nozzles :- Nozzles are constructed of Brass/Plastic Nylon used in cooling tower. The design ensures a fine water spray system.",

  //                     image:"/images/pic4.jpg"

  // })
  app.listen(port , () => {
    console.log('Server started')
  })
  // 
  // 
  // 
  // 
  // 
  //     
  //     contact.create
  //     ({
  //                     No:'1',
  //                     name:'Shreyash Soni',
  //                     email:'abc@gmail.com',
  //                     mobileno:'1234321124',
  //                     companyname:'Infosense',
  //                     subject:'Hello',
  //                     message:'I am shreyash Soni'
  //     },{
  //                  No:'2',
  //                 name:'Jayesh Yadav',
  //                 email:'afd@gmail.com',
  //                 mobileno:'1234321234',
  //                 companyname:'Infosense',
  //                 subject:'Hello',
  //                 message:'I am Jayesh Yadav'

  //     },{
  //                 No:'3',
  //                 name:'Quaid Jhohar',
  //                 email:'atyd@gmail.com',
  //                 mobileno:'4561239878',
  //                 companyname:'Infosense',
  //                 subject:'Hello',
  //              message:'I am Quaid Johar'

  //     },{
  //                  No:'4',
  //                 name:'Priyanka Yadav',
  //                 email:'wsd@gmail.com',
  //                 mobileno:'4578963212',
  //                 companyname:'Pta nahi',
  //                 subject:'Hello',
  //              message:'I am Priyanka Yadav'
  //     }
  // )

  // })
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 

  // // 
  // enquiry.create({
  
  //     firstname:"Jayesh",
  //     lastname:"Yadav",
  //     companyname:"Infosense",
  //     email:"test3@gmail.com",   
  //     mobileno:"4567897894",
  //     city:"Indore",
  //     postalcode:"456789",
  //     country:"India",
  //     city:"Indore",
  //     Markettype:"Abc",
  //     jobtype:"Abc",
  //     Companytype:"IT",
  //     serialno:"123432123",
  //     message:"Hello",
  //     I_am_looking_for:"Job",
  //     agree:"yes"
      

  // })

// })

//  section.create({
//     Name:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem excepturi hic voluptate eum. Atque sed, quam ab quidem qui quia non eveniet, sunt ullam placeat fuga iure, dignissimos culpa.'
//  })
// slider
// .create({
//     photo:"pic1.jpg"
// },{
//     photo:"pic2.jpg"
// },{
//    photo:"pic3.jpg"
// }
// )
//       Details.create({
//         brandName: 'Mahakal Cooling Tower',
//         brandIconUrl: 'https://www.freepik.com/free-photos-vectors/marketing-logo',
//         links: [{
//             label: 'Parts',
//               url: '/'

//            }, {
//              label: 'Service',
//             url: '/service'

//            },{
//              label: 'Product',
//              url: '/product'
//            },{
//              label:'FRP Cooling Tower Fan',
//              url:'/FRP Cooling Tower Fan'
//           },{
//                  label:'FRP Fan Stack',
//                   url:'/FRP Cooling Tower Fan'
//            },{
//                  label:'FRP Round Type Cooling Fan',
//                  url:'/FRP Cooling Tower Fan'
//          },{
//                  label:'Cooling Tower Drive Stafts',
//                  url:'/FRP Cooling Tower Fan'
//          },{
//                  label:'Axail Flow FRP',
//                 url:'/FRP Cooling Tower Fan'
//          },{
//                       label:'Cooling Tower Gear Box',
//                      url:'/FRP Cooling Tower Fan'
//         },

//         {
//           label: 'R&D Laboratory',
//           url: '/R&D Laboratory'

//         },{
//           label: 'Blogs',
//           url: '/Blogs'

//         },{
//           label: 'Industries',
//           url: '/Industries'

//         },{
//           label: 'About Us',
//           url: '/About Us'

//         },{
//           label: 'Contact Us',
//           url: '/Contact Us'

//         }]

// })

//   catch(err){
//     console.log("Not connected")

//   }
 
//192.168.0.89 
//192.168.0.1
//submast 255.255.255.0