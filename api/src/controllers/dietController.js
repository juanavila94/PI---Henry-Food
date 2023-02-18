const { Diet } = require('../db');
require('dotenv').config();
const axios = require('axios');
const {
    API_KEY
   } = process.env;

   
   
   const getDiets = () => {

   };

   module.exports = {
    getDiets,
   }