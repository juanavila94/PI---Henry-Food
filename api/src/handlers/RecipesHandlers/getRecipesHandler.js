const { getRecipes } = require('../../controllers/RecipeControllers/getRecipesController');
const { getRecipesByName } = require ('../../controllers/RecipeControllers/getRecipesByNameController');


const getRecipesHandler = async (req, res) => {
     const { name } = req.query;
     try {
          // const recipes = await getRecipes();
          //  res.status(200).json(recipes);
          if (name) {
               const recipe = await getRecipesByName(name);
               res.status(200).json(recipe);
          }else {
               const recipes = await getRecipes();
               res.status(200).json(recipes);
          }
     } catch (error) {
          res.status(400).json({ error: error.message});
     }
     // const results = name ? await getRecipesByName(name) :  await getRecipes();
     //       res.status(200).json(results);
     
};//crear dif de name


module.exports = {
     getRecipesHandler,
}