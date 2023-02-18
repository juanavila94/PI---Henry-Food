//const { Diet } = require('../db');
// require('dotenv').config();
// const axios = require('axios');
// const {
//     API_KEY
//    } = process.env;


   const getDietsHandler = (req, res) =>{
     res.send('traigo dietas');
   }

   module.exports = {
     getDietsHandler,
   };