const express = require("express");
const {
  CareerDetail,
  Blogdetail,
  CareerPost,
  NewsDetail,
  ProductDetail,
  ProjectDetail,
  ContactPost,
  GalleryDetail,
  SliderDetail,
  SubscriptionPost,
  GalleryDetail1,
  GalleryDetail2,
  GalleryDetail3,
  PartsDetails,
  ApplyDetail,
  ApplyPost,
  VideoDetail,
  ProductFRP,
  ProductWooden,
  ProductGearbox,
  ProductFRPFan,
  ProductRCCTower,
  EnquieryAdd,
  EnquieryPost,
} = require("../controller/useController");
const router = express.Router();
const session = require("express-session")
const config=require('../../config/config')
var bodyParser = require('body-parser');

router.use(session({secret:config.sessionSecret}))

// import miiddleware here
const auth = require("../../middleware/auth")

// use body parser here
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


 // for ejs files
// router.set("view engine", "ejs");
// router.set("views", "./views");

// for contoller files
const userController = require("../controller/UseController");

//  router.get('/login',auth.isLogout,userController.)


// router.get('/login', auth.isLogout,  userController.loginLoad)
// router.get('/admin',auth.isLogin, userController.loadHome)
// router.get('/logout',auth.isLogin, userController.userLogout)
// router.post('/login',userController.verifyLogin)








//  Bloag api
router.get("/getapi", Blogdetail);

// career api
router.get("/Careerget", CareerDetail);

router.post("/CareerPost", CareerPost);
// News api
router.get("/Newsget", NewsDetail);

// Product api
router.get("/Productget", ProductDetail);

// Enquiery api
router.get("/Enquieryget", EnquieryAdd);

// Product api
router.get("/ProductFRPget", ProductFRP);

// Product api
router.get("/ProductWoodenget", ProductWooden);

// Product api
router.get("/Productgearbox", ProductGearbox);

// Product api
router.get("/ProductFRPFan", ProductFRPFan);

// Product api
router.get("/ProductRccTower", ProductRCCTower);

// Project api
router.get("/Projectget", ProjectDetail);

//Contact us api
router.post("/ContactPost", ContactPost);

//Apply  api
router.get("/Applyget", ApplyDetail);

// ApplyPost
router.post("/process-apply-form", ApplyPost);


// ApplyPost
router.post("/EnquieryPost", EnquieryPost);

// Video  api
router.get("/Videoget", VideoDetail);

//gellery get api
// router.get("/Galleryget", GalleryDetail);

router.get('/Galleryget',GalleryDetail)


//gellery1 get api
router.get("/Galleryget1", GalleryDetail1);

//gellery2 get api
router.get("/Galleryget2", GalleryDetail2);

//gellery3 get api
router.get("/Galleryget3", GalleryDetail3);

//Parts get api
router.get("/Partsget", PartsDetails);

//slider get api
router.get("/SliderGet", SliderDetail);

router.post("/SubPost", SubscriptionPost);
module.exports = router;
