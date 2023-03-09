require('dotenv').config();
const { Recipe, Diet } = require('../../db');
const axios = require('axios');
const {
    API_KEY
   } = process.env;
     

   const getRecipes = async () => {
     const apiData= (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data;
       
     const recipes = await apiData.results.map((e) => {
          return {
               id : e.id,
               name : e.title,
               image : e.image,
               dishResume: e.summary,
               healthScore : e.healthScore,
               stepByStep : e.analyzedInstructions[0]?.steps.map((e) => e.step),
               created : false,
          }
          });

    const dbData =  await Recipe.findAll({
     include : {
          model: Diet,
          attributes: ['name'],
          through : {
               attributes: [],
          }
     }
    });

    return [...dbData, ...recipes];

       };


   module.exports = {
     getRecipes,
   }