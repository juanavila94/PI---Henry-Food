// require('dotenv').config();
// const { Recipe, Diet } = require('../db');
// const axios = require('axios');
// const { Op } = require('sequelize');
// const {
//     API_KEY
//    } = process.env;
       
  
//     const getRecipes = async () => {
//           const apiData= (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data;
            
//           const recipes = await apiData.results.map((e) => {
//                return {
//                     id : e.id,
//                     name : e.title,
//                     Image : e.image,
//                     dishResume: e.summary,
//                     healthScore : e.healthScore,
//                     stepByStep : e.analyzedInstructions[0]?.steps.map((e) => e.step),
//                     created : false,
//                }
//                });

//          const dbData =  await Recipe.findAll({
//           include : {
//                model: Diet,
//                attributes: ['name'],
//                through : {
//                     attributes: [],
//                }
//           }
//          });

//          return [...dbData, ...recipes];
    
//             };
     
     // const getRecipesByName = async (name) => {
     //     const dbRecipes = await Recipe.findAll({
     //      where: {
     //           name: {
     //                [Op.iLike]: `%${name}%`,
     //           },
     //      },
     //      include : {
     //           model: Diet,
     //           attributes: ['name'],
     //           through : {
     //                attributes: [],
     //           }
     //      }
     //     })
         
     //     const apiData = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data;

     //     const recipes = await apiData.results.map((e) => {
     //      return {
     //           id : e.id,
     //           name : e.title,
     //           Image : e.image,
     //           dishResume: e.summary,
     //           healthScore : e.healthScore,
     //           stepByStep : e.analyzedInstructions[0]?.steps.map((e) => e.step),
     //           created : false,
     //      }
     //      });
         
     //     const apiByName = recipes.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
         
     //     const recipesNames = [...dbRecipes, ...apiByName];
           
     //     if(recipesNames.length) {
     //      return recipesNames;
     //     }else{
     //      throw new Error(`There are no recipes matching ${name}`);
     //     }
          
     // }
     
   
//    const getRecipesById = async (id, source) => {
//              const recipe = source === 'api' ?
//               (await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformatio=true`)).data :
//               await Recipe.findByPk(id);

//               return recipe;
//               //devuelve objeto y filtrar
//            };

   
   
//       const createRecipes =  async (name, image, dishResume, healthScore, stepByStep, diets) => {
//           const createRecipe = await Recipe.create({
//                name, 
//                image, 
//                dishResume, 
//                healthScore, 
//                stepByStep,
//           })

//           const dbDiets=  await Diet.findAll({
//                where: {
//                     name
//                }
//               });
//           await createRecipe.addDiet(dbDiets);
//           return createRecipe;


//       };

// module.exports = {
//      getRecipes,
//      getRecipesByName,
//      getRecipesById,
//      createRecipes,
// }