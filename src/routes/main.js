const express = require("express");
const routes = express.Router();
// const Login = require("../models/login")
const { route, path } = require("express/lib/application");
const multer = require("multer");
const ejs = require("ejs");

const session = require("express-session");
const flash = require("connect-flash");
const app = express();
const fileupload = require("express-fileupload");
const product = require("../models/product");
const product1 = require("../models/product1");
const product2 = require("../models/product2");
const product3 = require("../models/product3");
const product4 = require("../models/product4");
const product5 = require("../models/product5");
const Detail = require("../models/Detail");
const section2 = require("../models/section2");
const slider = require("../models/slider");
const Blogdetail = require("../models/Blogdetails");
const contact = require("../models/contact");
const filePath = require("path");
// const { response } = require('express')
const enquiry = require("../models/enquiry");
const login = require("../models/login");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const bodyParser = require("body-parser");
const gallery = require("../models/gallery");
const gallery1 = require("../models/gallery1");
const gallery2 = require("../models/gallery2");
const gallery3 = require("../models/gallery3");
// const { findByIdAndUpdate } = require("../models/Detail");
const project = require("../models/project");
const Terms = require("../models/Terms_of_use");
const Policies = require("../models/privacypolicy");
const Career = require("../models/career");
const apply = require("../models/apply");
const video = require("../models/video");
const Parts = require("../models/parts");
const Subscription = require("../models/Subscription");
// const bcrypt = require('bcrypt')
const auth = require("../../middleware/auth")
const config = require('../../config/config')

const { generateToken } = require("../../common/token")




// const storage = multer.diskStorage({
//   destination: "./public/images/",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// for contoller files
const userController = require("../controller/UseController");



routes.get('/', auth.isLogout, userController.loginLoad)
routes.get('/login', auth.isLogout, userController.loginLoad)
// routes.get('/admin',auth.isLogin, userController.loginLoad)
routes.get('/admin',auth.isLogin, userController.loadHome)
routes.post('/login',userController.verifyLogin)

routes.get('/logout', auth.isLogin, userController.userLogout)
// routes.get()

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/images");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const storage1 = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "public/video");
  },
  filename: (req, file, cd) => {
    cd(null, Date.now() + filePath.extname(file.originalname));
  },
});
const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/resume/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + filePath.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
      // file.mimetype === "application/pdf" ||
      //      file.mimetype === "application/doc"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only jpeg, jpg, png, gif images allow"));
    }
  },
});
var videoupload = multer({
  storage: storage1,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "video/mp4" || file.mimetype == "video/mkv") {
      return cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("only videos are allowed"));
    }
  },
});
var resumeupload = multer({
  storage: storage2,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/doc"
    ) {
      return cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("only resumes are allowed"));
    }
  },
});

app.set("view engine", "ejs");
// var publicDir = require('path').join(__dirname,'/public');
// app.use(express.static(publicDir));
app.use(express.static(__dirname + "/public"));
// app.use(express.static('public'));
app.use("/images", express.static("images"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "nodejs",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());

app.use(function (req, res, next) {
  res.locals.success = req.flash("success");
  res.locals.err = req.flash("err");
  next();
});

// routes.get("/", async (req, res) => {
//   const detail = await Detail.findOne({ id: "63a1880f0c6127827869d809" });
//   const slides = await slider.find();
//   const section = await section2.find();
//   // const contactus=await contact.find()
//   // console.log(detail)
//   res.render("index", {
//     detail: detail,
//     slides: slides,
//     section: section,
//     // contactus:contactus
//   });
// });

//      <---All Routes Set---->

routes.get("/contactus", async (req, res) => {
  const detail = await Detail.findOne({ id: "63a1880f0c6127827869d809" });

  res.render("contactus", {
    detail: detail,
  });
});
routes.get("/edit-page-slideupdate/admin", (req, res) => {
  res.render("admin");
});

// routes.get("/video/admin",(req,res)=>{
//       res.render("admin");
// })


routes.get("/Blogdetails", (req, res) => {
  res.render("Blogdetails");
});

routes.get("/profile1", (req, res) => {
  res.render("profile1");
});

routes.get("/login", auth.isLogout, (req, res) => {
  res.render("login");
});

routes.get("/admin",  (req, res) => {
  res.render("admin");
});

routes.get("/add-page-product", (req, res) => {
  res.render("add-page-product");
});
routes.get("/add-page-product1", (req, res) => {
  res.render("add-page-product1");
});
routes.get("/add-page-product2", (req, res) => {
  res.render("add-page-product2");
});
routes.get("/add-page-product3", (req, res) => {
  res.render("add-page-product3");
});
routes.get("/add-page-product4", (req, res) => {
  res.render("add-page-product4");
});
routes.get("/add-page-product5", (req, res) => {
  res.render("add-page-product5");
});
routes.get("/add-project-page", (req, res) => {
  res.render("add-project-page");
});

routes.get("/edit-page-project/admin", (req, res) => {
  res.render("admin");
});

routes.get("/edit-page-project/gallery", (req, res) => {
  res.render("gallery");
});

routes.get("/apply", (req, res) => {
  res.render("apply");
});

routes.get("/apply-page", (req, res) => {
  apply.find({}).then((x) => {
    res.render("apply-page", { x });
  });
});



routes.get("/enquiry", (req, res) => {
  res.render("Enquiry");
});

routes.get("/Blogdetails-page", (req, res) => {
  Blogdetail.find({})
    .then((x) => {
      res.render("page-file", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/slider-page", (req, res) => {
  slider
    .find({})
    .then((x) => {
      res.render("slider-page", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/privacypolicies", (req, res) => {
  Policies.find({})
    .then((x) => {
      res.render("privacypolicies", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/Terms_of_Use", (req, res) => {
  Terms.find({})
    .then((x) => {
      res.render("Terms_of_Use", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/video", (req, res) => {
  video
    .find({})
    .then((x) => {
      res.render("video", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/edit-page-privacypolicies/:id", (req, res) => {
  Policies.findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-privacypolicies", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});



routes.get("/edit-page-Terms_of_use/:id", (req, res) => {
  Terms.findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-Terms_of_use", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/edit-page/:id", (req, res) => {
  Blogdetail.findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});



routes.get("/edit-product/:id", (req, res) => {
  product
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-product", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/edit-page-career/:id", (req, res) => {
  Career.findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-career", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});





routes.get("/edit-page-product1/:id", (req, res) => {
  product1
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-product1", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/edit-page-product2/:id", (req, res) => {
  product2
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-product2", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-product3/:id", (req, res) => {
  product3
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-product3", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-product4/:id", (req, res) => {
  product4
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-product4", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-product5/:id", (req, res) => {
  product5
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-product5", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-slide/:id", (req, res) => {
  slider
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-slide", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/edit-page-gallery/:id", (req, res) => {
  gallery
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-gallery", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-gallery1/:id", (req, res) => {
  gallery1
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-gallery1", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-gallery2/:id", (req, res) => {
  gallery2
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-gallery2", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-gallery3/:id", (req, res) => {
  gallery3
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-gallery3", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-parts/:id", (req, res) => {
  Parts.findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-parts", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

// routes.get('/edit-page-slideupdate/:id',(req,res)=>{
//       slider.findOne({_id:req.params.id})
//       .then((x)=>{
//             res.render('edit-page-slide',{x})
//       })
//       .catch((y)=>{
//             console.log(y)
//       })
// })

routes.get("/edit-page-project/:id", (req, res) => {
  project
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-project", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/add-page", (req, res) => {
  res.render("add-page");
});

routes.get("/profile", (req, res) => {
  res.render("profile");
});

routes.get("/add-slider-page", (req, res) => {
  res.render("add-slider-page");
});
routes.get("/add-page-project", (req, res) => {
  res.render("add-page-project");
});

routes.get("/add-page-gallery", (req, res) => {
  res.render("add-page-gallery");
});

routes.get("/add-page-gallery1", (req, res) => {
  res.render("add-page-gallery1");
});
routes.get("/add-page-gallery2", (req, res) => {
  res.render("add-page-gallery2");
});
routes.get("/add-page-gallery3", (req, res) => {
  res.render("add-page-gallery3");
});
routes.get("/add-page-parts", (req, res) => {
  res.render("add-page-parts");
});
routes.get("/add-page-career", (req, res) => {
  Career.find({}).then((x) => {
    res.render("add-page-career", { x });
  });
});
routes.get("/video/add-video-page", (req, res) => {
  res.render("add-page-video");
});

routes.get("/project", (req, res) => {
  project
    .find({})
    .then((x) => {
      res.render("project", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/gallery", (req, res) => {
  gallery
    .find({})
    .then((x) => {
      res.render("gallery", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/gallery1", (req, res) => {
  gallery1
    .find({})
    .then((x) => {
      res.render("gallery1", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/gallery2", (req, res) => {
  gallery2
    .find({})
    .then((x) => {
      res.render("gallery2", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/gallery3", (req, res) => {
  gallery3
    .find({})
    .then((x) => {
      res.render("gallery3", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/parts", (req, res) => {
  Parts.find({})
    .then((x) => {
      res.render("parts", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/edit-page-slide/:id", (req, res) => {
  slider
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-slide", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/edit-page-video/:id", (req, res) => {
  video
    .findOne({ _id: req.params.id })
    .then((x) => {
      res.render("edit-page-video", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/page-file", (req, res) => {
  Blogdetail.find({})
    .then((x) => {
      res.render("page-file", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/product", (req, res) => {
  product
    .find({})
    .then((x) => {
      res.render("product", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/product1", (req, res) => {
  product1
    .find({})
    .then((x) => {
      res.render("product1", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/product2", (req, res) => {
  product2
    .find({})
    .then((x) => {
      res.render("product2", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/product3", (req, res) => {
  product3
    .find({})
    .then((x) => {
      res.render("product3", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/product4", (req, res) => {
  product4
    .find({})
    .then((x) => {
      res.render("product4", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/product5", (req, res) => {
  product5
    .find({})
    .then((x) => {
      res.render("product5", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/layout-static", (req, res) => {
  res.render("layout-static");
});

routes.get("/layout-sidenav-light", (req, res) => {
  res.render("layout-sidenav-light");
});

routes.get("/Service", (req, res) => {
  res.render("Service");
});

routes.get("/project-page", (req, res) => {
  project
    .find({})
    .then((x) => {
      res.render("project", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/contactus-page",auth.isLogin, (req, res) => {
  contact
    .find({})
    .then((x) => {
      res.render("contactus-page", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/Subscription-page", auth.isLogout, (req, res) => {
  Subscription.find({})
    .then((x) => {
      res.render("Subscription-page", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
routes.get("/career-page", auth.isLogout, (req, res) => {
  Career.find({})
    .then((x) => {
      res.render("career-page", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});

routes.get("/delete-page-slide/slider-page", (req, res) => {
  res.render("slider-page");
});

routes.get("/enquiry-page", auth.isLogout, (req, res) => {
  enquiry
    .find({})
    .then((x) => {
      res.render("enquiry-page", { x });
    })
    .catch((y) => {
      console.log(y);
    });
});
// routes.get('/privacypolicies/:id',(req,res)=>{
//       Policies.find({})
//       .then((x)=>{

//             res.render('privacypolicies',{x})
//       })
//       .catch((y)=>{
//          console.log(y)
//       })

// })

// <------- All Post Method ---------------------------->

routes.post("/edit-page-project/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    project
      .updateOne(
        { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            data: req.body.data,
            //     image:req.file.filename,
          },
        }
      )

      .then((x) => {
        // req.flash('success','Your data has been Succesfully Updated into Database')
        res.redirect("/project");
      });
  } else {
    project
      .updateOne(
        { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            data: req.body.data,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )

      .then((x) => {
        // req.flash('success','Your data has been Succesfully Updated into Database')
        res.redirect("/project");
      });
  }
});

routes.post(
  "/edit-page-slideupdate/:id",
  upload.single("photo"),
  (req, res) => {
    if (req.file) {
      slider
        .updateOne(
          { _id: req.params.id },
          {
            $set: {
              photo: "http://192.168.1.34:3000/images/" + req.file.filename,
            },
          }
        )
        .then((x) => {
          res.redirect("/slider-page");
        });
    }
  }
);

routes.post(
  "/edit-page-privacypolicies/:id",
  upload.single("photo"),
  (req, res) => {
    Policies.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          detail: req.body.detail,
        },
      }
    ).then((x) => {
      res.redirect("/privacypolicies");
    });
  }
);
routes.post(
  "/edit-page-Terms_of_use/:id",
  upload.single("photo"),
  (req, res) => {
    Terms.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Heading: req.body.Heading,
          policy: req.body.policy,
        },
      }
    ).then((x) => {
      res.redirect("/Terms_of_Use");
    });
  }
);

routes.post("/edit-page-career/:id", upload.single("image"), (req, res) => {
  Career.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        position: req.body.position,
        location: req.body.location,
        qualification: req.body.qualification,
        exprerience: req.body.exprerience,
        ctc: req.body.ctc
      },
    }
  ).then((x) => {
    res.redirect("/career-page");
  });
});

routes.post("/edit-page-video/:id", videoupload.single("video"), (req, res) => {
  if (req.file) {
    video
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,

            video: req.file.filename,
          },
        }
      )

      .then((x) => {
        res.redirect("/video");
      });
  } else {
    video
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            // video:req.file.filename
          },
        }
      )

      .then((x) => {
        res.redirect("/video");
      });
  }
});

routes.post("/edit-product-page/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    product
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            //     image:"http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/product");
      });
  } else {
    product
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )

      .then((x) => {
        res.redirect("/product");
      });
  }
});
routes.post("/edit-page-product1/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    product1
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/product1");
      });
  } else {
    product1
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )

      .then((x) => {
        res.redirect("/product1");
      });
  }
});
routes.post("/edit-page-product2/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    product2
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/product2");
      });
  } else {
    product2
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )

      .then((x) => {
        res.redirect("/product2");
      });
  }
});
routes.post("/edit-page-product3/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    product3
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/product3");
      });
  } else {
    product3
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )

      .then((x) => {
        res.redirect("/product3");
      });
  }
});
routes.post("/edit-page-product4/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    product4
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/product4");
      });
  } else {
    product4
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )

      .then((x) => {
        res.redirect("/product4");
      });
  }
});
routes.post("/edit-page-product5/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    product5
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/product5");
      });
  } else {
    product5
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            detail: req.body.detail,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )

      .then((x) => {
        res.redirect("/product5");
      });
  }
});

routes.post("/edit-page-gallery/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    gallery
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery");
      });
  } else {
    gallery
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery");
      });
  }
});

routes.post("/edit-page-gallery1/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    gallery1
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery1");
      });
  } else {
    gallery1
      .updateOne(
        { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery1");
      });
  }
});
routes.post("/edit-page-gallery2/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    gallery2
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery2");
      });
  } else {
    gallery2
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery2");
      });
  }
});
routes.post("/edit-page-gallery3/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    gallery3
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            //     image:req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery3");
      });
  } else {
    gallery3
      .updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            image: "http://192.168.1.34:3000/images/" + req.file.filename,
          },
        }
      )
      .then((x) => {
        res.redirect("/gallery3");
      });
  }
});

routes.post("/edit-page-parts/:id", upload.single("image"), (req, res) => {
  if (!req.file) {
    Parts.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          title: req.body.title,
          //     image:req.file.filename,
        },
      }
    ).then((x) => {
      res.redirect("/parts");
    });
  } else {
    Parts.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          title: req.body.title,
          image: "http://192.168.1.34:3000/images/" + req.file.filename,
        },
      }
    ).then((x) => {
      res.redirect("/parts");
    });
  }
});

//   routes.post("/edit-page-slide/:id",upload.single('photo'),(req,res)=>{

//       if(req.file){

//             slider.updateOne({_id:req.params.id},{$set:{

//                   photo:req.file.filename,

//             }})
//             .then((x)=>{
//                   res.redirect('slider-page')
//             })

//       }

//   }
// )

routes.post(
  "/edit-page-blogdetailupdate/:id",
  upload.single("Photo"),
  (req, res) => {
    if (!req.file) {
      Blogdetail.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            //     Photo:req.file.filename,
            post: req.body.post,
          },
        }
      ).then((x) => {
        // req.flash('success','Your data has been Succesfully Updated into Database')
        res.redirect("/page-file");
      });
    } else {
      Blogdetail.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            Photo: "http://192.168.1.34:3000/images/" + req.file.filename,
            post: req.body.post,
          },
        }
      ).then((x) => {
        // req.flash('success','Your data has been Succesfully Updated into Database')
        res.redirect("/page-file");
      });
    }

    // }
    // else{
    //       slider.updateOne({photo:req.params.id},{$set:{

    // photo:req.file.filename,

    //   }})
    //   .then((x)=>{
    //   req.flash('Success','Your data has been Succesfully Updated into Database')
    //         res.redirect('edit-page-slide')
    //   })
  }
);

// routes.get("/Contact Us",async(req,res)=>{
//       const detail=await Detail.findOne({"id":"63a1880f0c6127827869d809"})
//       const slides=await slider.find()
//       const section=await section2.find()
//       res.render("contactus",{
//             detail:detail,
//             slides:slides,
//             section:section
//       })
// })

routes.post("/process-contact-form", (req, res) => {
  //  console.log('form is submitted') ;
  // console.log(req.body);
  try {
    const data = contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

routes.post("/process-enquiry-form", (req, res) => {
  try {
    const data = enquiry.create(req.body);
    console.log(data);
    res.redirect("/");

  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

// routes.post('/login',async(req,res)=>{
//   try {
//     const { email, password } = req.body;

//     const userData = await Login.findOne({ email: email });

//     if (userData) {
//       const passwordMatch = await bcrypt.compare(password, userData.password);
//       if (passwordMatch) {
//         if (userData.is_varified === 0) {
//           res.render("login", { message: "Please verify your mail" });
//         } else {
//           // middleware auth.js (req.session.user_id)
//           req.session.user_id = userData._id;
//           res.redirect("/admin");
//         }
//       } else {
//         res.render("login", { message: "email and password is incorrect" });
//       }
//     } else {
//       res.render("login", { message: "email and password is incorrect" });
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// })




//Handling user login
// routes.post("/login", async function(req, res){
 
//   try {
//       // check if the user exists
//       const user = await Login.findOne({ email: req.body.email });
//       console.log("user---->", user)
//       if (!user) {
//         //check if password matches
//         const result = req.body.password === user.password;
//         if (result) {
//           res.render("admin");
//         // req.session.user_id = user._id;
//         } else {
//           res.status(400).json({ error: "password doesn't match" });
//         }
//       } else {
//         res.status(400).json({ error: "User doesn't exist" });
//       }
//     } catch (error) {
//       res.status(400).json({ error });
//     }
// });


// login api

// routes.post('/login', async (req, res) => {
//   try {

//     const { email, password } = req.body;
//     // console.log("request--->", req.body)

//     const user = await login.findOne({ email: email })
//     // console.log("user--->", user)

//     if (!user) {
//       return res.status(409).json({
//         status: 409,
//         message: "Email or password incorrect"
//       })
//     }

//     const token = await generateToken({
//       id: user
//     });

//     res.cookie("adminSession", token, {
//       expires: new Date(Date.now() + 24 * 60 * 60 * 1000),

//     })

//     return res.render("admin")
//     // return res.status(200).json({
//     //   status: 200,
//     //   message: "User login",
//     //   token: token
//     // })

//   } catch (error) {
//     console.log("error-->",error.message)
//     return res.status(500).json({
//       status: 500,
//       message: "Error"
//     })

//   }
// })



// logout

// routes.get('/logout', async(req,res)=>{
//   try {
//     res.clearCookie("adminSession");
//     return res.status(200).json({
//       status:200,
//       message:"user logout"
//     })
    
//   } catch (error) {
//     console.log(error.message)
//     return res.status(500).json({
//       status: 500,
//       message: "Error"
//     })
    
//   }
// })








// routes.get('/logout', auth.isLogin, function (req, res) {
//   try {
//     req.session.destroy();
//     res.redirect("/login");
//   } catch (error) {
//     console.log(error.message);
//   }
// });
// 


routes.post("/process-Blogdetails-form", upload.single("Photo"), (req, res) => {
  if (!req.file) {
    Blogdetail.create({
      name: req.body.name,
      Photo: "http://192.168.1.34:3000/images/" + req.file.filename,
      post: req.body.post,
    });
    try {
      // const data= Blogdetail.create(req.body)
      res.redirect("page-file");
      // console.log(data)
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  } else {
    Blogdetail.create({
      name: req.body.name,
      //  Photo:req.file.filename,
      post: req.body.post,
    });
    try {

      res.redirect("page-file");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/process-apply-form", resumeupload.single("resume"), (req, res) => {
  if (req.file) {
    apply.create({
      name: req.body.name,
      email: req.body.email,
      mobileno: req.body.mobileno,
      exprerience: req.body.exprerience,
      current_ctc: req.body.current_ctc,
      Expected_ctc: req.body.Expected_ctc,
      city: req.body.city,
      state: req.body.state,
      address: req.body.address,
      resume: "http://192.168.1.34:3000/resume/" + req.file.filename,

    });

    try {
      // res.redirect("/");
      console.log(req.file)
      res.status(200).json({ message: "data added successfully" })
    } catch (e) {
      console.log(e);
      // res.redirect("/");
    }
  }

}
);


routes.post("/add-blog-details", upload.single("Photo"), (req, res) => {
  if (!req.file) {
    Blogdetail.create({
      name: req.body.name,
      //     Photo:req.file.filename,
      post: req.body.post,
    });
    try {
      // const data=  Blogdetail.create(req.body)
      res.redirect("page-file");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  } else {
    Blogdetail.create({
      name: req.body.name,
      Photo: "http://192.168.1.34:3000/images/" + req.file.filename,
      post: req.body.post,
    });
    try {
      //      const data=  Blogdetail.create(req.body)
      // console.log(data)
      res.redirect("page-file");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

routes.post("/add-project-page", upload.single("image"), (req, res) => {
  if (req.file) {
    project.create({
      title: req.body.title,
      data: req.body.data,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/project");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

routes.post("/add-page-video", videoupload.single("video"), (req, res) => {
  if (req.file) {
    video.create({
      title: req.body.title,
      video: req.file.filename,
    });
    try {
      res.redirect("/video");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

routes.post("/add-page-slide", upload.single("photo"), (req, res) => {
  if (req.file) {
    slider.create({
      photo: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("slider-page");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

routes.post("/add-page-product", upload.single("image"), (req, res) => {
  if (req.file) {
    product.create({
      title: req.body.title,
      detail: req.body.detail,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/product");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

routes.post("/add-page-product1", upload.single("image"), (req, res) => {
  if (req.file) {
    product1.create({
      title: req.body.title,
      detail: req.body.detail,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/product1");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/add-page-product2", upload.single("image"), (req, res) => {
  if (req.file) {
    product2.create({
      title: req.body.title,
      detail: req.body.detail,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/product2");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

routes.post("/add-page-product3", upload.single("image"), (req, res) => {
  if (req.file) {
    product3.create({
      title: req.body.title,
      detail: req.body.detail,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/product3");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/add-page-product4", upload.single("image"), (req, res) => {
  if (req.file) {
    product4.create({
      title: req.body.title,
      detail: req.body.detail,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/product4");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/add-page-product5", upload.single("image"), (req, res) => {
  if (req.file) {
    product5.create({
      title: req.body.title,
      detail: req.body.detail,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/product5");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

routes.post("/add-page-gallery", upload.single("image"), (req, res) => {
  if (req.file) {
    gallery.create({
      title: req.body.title,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {

      // console.log(req.file)
      res.redirect("/gallery");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/add-page-gallery1", upload.single("image"), (req, res) => {
  if (req.file) {
    gallery1.create({
      title: req.body.title,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/gallery1");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/add-page-gallery2", upload.single("image"), (req, res) => {
  if (req.file) {
    gallery2.create({
      title: req.body.title,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/gallery2");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/add-page-gallery3", upload.single("image"), (req, res) => {
  if (req.file) {
    gallery3.create({
      title: req.body.title,
      image: "http://192.168.1.34:3000/images/" + req.file.filename,
    });
    try {
      res.redirect("/gallery3");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
routes.post("/add-page-career", upload.single("image"), (req, res) => {
  Career.create({
    title: req.body.title,
    position: req.body.position,
    location: req.body.location,
    qualification: req.body.qualification,
    exprerience: req.body.exprerience,
    ctc: req.body.ctc,
  });
  try {
    res.redirect("/career-page");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

routes.post("/add-page-parts", upload.single("image"), (req, res) => {
  if (req.file) {
    Parts.create({
      title: req.body.title,
      image: req.file.filename,
    });
    try {
      res.redirect("/parts");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

// <-------------- All Delete Post Method---------------------->

routes.post("/delete-page-slide/:id", (req, res) => {
  slider.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/slider-page");
  });
});
routes.post("/delete-page-gallery/:id", (req, res) => {
  gallery.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/gallery");
  });
});
routes.post("/delete-page-gallery1/:id", (req, res) => {
  gallery1.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/gallery1");
  });
});
routes.post("/delete-page-gallery2/:id", (req, res) => {
  gallery2.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/gallery2");
  });
});
routes.post("/delete-page-career/:id", (req, res) => {
  Career.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/career-page");
  });
});
routes.post("/delete-page-gallery3/:id", (req, res) => {
  gallery3.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/gallery3");
  });
});
routes.post("/delete-page-parts/:id", (req, res) => {
  Parts.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/parts");
  });
});

routes.post("/delete-page-project/:id", (req, res) => {
  project.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/project");
  });
});

routes.post("/delete-page-blogdetail/:id", (req, res) => {
  Blogdetail.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/page-file");
  });
});

routes.post("/delete-page-product/:id", (req, res) => {
  product.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/product");
  });
});
routes.post("/delete-page-product1/:id", (req, res) => {
  product1.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/product1");
  });
});
routes.post("/delete-page-product2/:id", (req, res) => {
  product2.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/product2");
  });
});
routes.post("/delete-page-product3/:id", (req, res) => {
  product3.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/product3");
  });
});
routes.post("/delete-page-product4/:id", (req, res) => {
  product4.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/product4");
  });
});
routes.post("/delete-page-product5/:id", (req, res) => {
  product5.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/product5");
  });
});

routes.post("/delete-page-video/:id", (req, res) => {
  video.findOneAndDelete({ _id: req.params.id }).then((x) => {
    res.redirect("/video");
  });
});
// try{
//       const data= Blogdetails.create(req.body)
//       console.log(data)
//       res.redirect("/add-page")

// }catch(e)
// {
//       console.log(e);
//       res.redirect("")
// }

module.exports = routes;


