var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

   // cats rule dogs drool
   let inImgPath = "/images/catpaw.png";

   res.render('index',
      {
         title: "The cat Said No!",
         imgPath: inImgPath
      }
   );
});

router.get('/catNames', function (req, res, next) {
   let catNames = ['Whiskers', 'Mittens', 'Felix', 'Luna'];
   res.json(catNames);
});
module.exports = router;
