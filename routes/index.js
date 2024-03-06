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


router.get('/dogs', function (req, res, next) {
   let dogNames = ['Buddy', 'Max', 'Charlie', 'Lucy', 'Bailey'];
   res.json(dogNames);
});

module.exports = router;
