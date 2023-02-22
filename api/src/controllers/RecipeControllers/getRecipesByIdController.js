require('dotenv').config();
const { Recipe } = require('../../db');
const axios = require('axios');
const {
    API_KEY
   } = process.env;
       
  
const getRecipesById = async (id, source) => {
             const recipe = source === 'api' ?
              (await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformatio=true`)).data :
              await Recipe.findByPk(id);

              return recipe;
              //devuelve objeto y filtrar
           };
   

module.exports = {
     getRecipesById,
}