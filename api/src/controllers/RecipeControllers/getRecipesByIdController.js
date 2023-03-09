require('dotenv').config();
const { Recipe } = require('../../db');
const axios = require('axios');
const {
    API_KEY
   } = process.env;
       
   
  
const getRecipesById = async (id, source) => {
      // let cleanRecipe = {};
             const recipe = source === 'api' ?
              (await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformatio=true`)).data:
              await Recipe.findByPk(id);
            
             

            cleanRecipe = {
                     name:recipe.title,
                     image:recipe.image,
                     dishResume:recipe.summary,
                     healthScore:recipe.healthScore,
                     stepByStep:recipe.analyzedInstructions[0]?.steps.map((e) => e.step),
                     diets:recipe.diets,
                     created: false,
                   }
                  
            
               return cleanRecipe;
            // return recipe;
               //devuelve objeto y filtrar
           };
   

module.exports = {
     getRecipesById,
}