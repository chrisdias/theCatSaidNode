var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

   let inImgPath = "/images/dogpaw.png";

   if (myPlatform != "linux") {
      inImgPath = "/images/dogpaw.png"
   }

   res.render('index',
      {
         title: "The Dog Said No!",
         imgPath: inImgPath
      }
   );
});

module.exports = router;
