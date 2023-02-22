require('dotenv').config();
const { Recipe, Diet } = require('../../db');
const axios = require('axios');
const { Op } = require('sequelize');
const {
    API_KEY
   } = process.env;


const getRecipesByName = async (name) => {
     const dbRecipes = await Recipe.findAll({
      where: {
           name: {
                [Op.iLike]: `%${name}%`,
           },
      },
      include : {
           model: Diet,
           attributes: ['name'],
           through : {
                attributes: [],
           }
      }
     })
     
     const apiData = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data;

     const recipes = await apiData.results.map((e) => {
      return {
           id : e.id,
           name : e.title,
           Image : e.image,
           dishResume: e.summary,
           healthScore : e.healthScore,
           stepByStep : e.analyzedInstructions[0]?.steps.map((e) => e.step),
           created : false,
      }
      });
     
     const apiByName = recipes.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
     
     const recipesNames = [...dbRecipes, ...apiByName];
       
     if(recipesNames.length) {
      return recipesNames;
     }else{
      throw new Error(`There are no recipes matching ${name}`);
     }
      
 }
 
module.exports = {
     getRecipesByName,
}