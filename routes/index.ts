import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {

   // cats rule dogs drool
   let inImgPath: string = "/images/catpaw.png";

   res.render('index',
      {
         title: "The cat Said No!",
         imgPath: inImgPath
      }
   );
});

export default router;
