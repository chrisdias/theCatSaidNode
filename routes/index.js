var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

   let inImgPath = "/images/catpaw.png";

   res.render('index',
      {
         title: "The KAT Said No!",
         imgPath: inImgPath
      }
   );
});

module.exports = router;
