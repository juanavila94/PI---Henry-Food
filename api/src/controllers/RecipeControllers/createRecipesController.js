require('dotenv').config();
const { Recipe, Diet } = require('../../db');

const createRecipes =  async (name, image, dishResume, healthScore, stepByStep, diets) => {
               const createRecipe = await Recipe.create({
                    name, 
                    image, 
                    dishResume, 
                    healthScore, 
                    stepByStep,
               })
     
               const dbDiets=  await Diet.findAll({
                    where: {
                         name
                    }
                   });
               await createRecipe.addDiet(dbDiets);
               return createRecipe;
     
     
           };


module.exports = {
     createRecipes,
}