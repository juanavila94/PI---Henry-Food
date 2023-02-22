// const { getRecipesById, getRecipesByName, createRecipes } = require('../controllers/recipeController');





// const { getRecipes } = require('../controllers/RecipeControllers/getRecipesController');
// const getRecipesHandler = async (req, res) => {
//      const { name } = req.query;
//      try {
//           // const recipes = await getRecipes();
//           //  res.status(200).json(recipes);
//           if (name) {
//                const recipe = await getRecipesByName(name);
//                res.status(200).json(recipe);
//           }else {
//                const recipes = await getRecipes();
//                res.status(400).json(recipes);
//           }
//      } catch (error) {
//           res.status(400).json({ error: error.message});
//      }
//      // const results = name ? await getRecipesByName(name) :  await getRecipes();
//      //       res.status(200).json(results);
     
// };//crear dif de name



// const getRecipesByIdHandler = async (req, res) => {
//      const { id } = req.params
    
//      const source = isNaN(id) ? 'db' : 'api' ;
    
//      try {
//           const recipe = await getRecipesById(id, source);
//           res.status(200).json(recipe);
//      } catch (error) {
//           res.status(400).json({ error: error.message});
          
//      }
// };


// const createRecipesHandler = async (req, res) => {
//      const {  name,  image, dishResume,  healthScore, stepByStep} = req.body;
//      try {
//           // if(!name || !image || !summary || !healthScore || !steps || !diets) throw Error('Me falta info');
  
//           // else{
//           //     const newRecipe = await createRecipes(name, image, summary, healthScore, steps, diets);
  
//           //     return res.status(200).json(`Se creó la: ${newRecipe.name}`);
//           // }
//           const newRecipe = await createRecipes(name, image, dishResume, healthScore, stepByStep);
  
//           return res.status(200).json(`Se creó la: ${newRecipe.name}`)
  
//       } catch (error) {
//           return res.status(404).send(error.message)
//       }
// };



// module.exports = {
//      getRecipesHandler,
//      getRecipesByIdHandler,
//      createRecipesHandler,
// }