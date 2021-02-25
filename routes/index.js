var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

   // kats rule read write drool
   let inImgPath = "/images/katpaw.png"; 

   res.render('index',
      {
         title: "The DOG Said No!",
         imgPath: inImgPath
      }
   );
});

module.exports = router;
