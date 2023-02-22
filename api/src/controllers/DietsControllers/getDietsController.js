const { Diet } = require('../../db');
require('dotenv').config();
const axios = require('axios');
const {
    API_KEY
   } = process.env;


const getDiets = async () =>{
     const apiDiets = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results;
    
      let diets = [];

      apiDiets.forEach(d => {
         if (d.vegetarian === true)  diets = [...diets, Object.keys(d).shift()];
         diets = [...diets, ...d.diets];
      })
         
      diets = [...new Set(diets)];

      const dietsCreate = async (diets) => {
         for (let diet of diets) {
            await Diet.findOrCreate({
               where : {name : diet}
            })
      }
   }

   await dietsCreate(diets);
   return await Diet.findAll();
}

   module.exports = {
    getDiets,
   }