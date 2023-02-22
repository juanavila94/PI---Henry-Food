const { createRecipes } = require('../../controllers/RecipeControllers/createRecipesController'); 

const createRecipesHandler = async (req, res) => {
     const {  name,  image, dishResume,  healthScore, stepByStep} = req.body;
     try {
          // if(!name || !image || !summary || !healthScore || !steps || !diets) throw Error('Me falta info');
  
          // else{
          //     const newRecipe = await createRecipes(name, image, summary, healthScore, steps, diets);
  
          //     return res.status(200).json(`Se creó la: ${newRecipe.name}`);
          // }
          const newRecipe = await createRecipes(name, image, dishResume, healthScore, stepByStep);
  
          return res.status(200).json(`Se creó la: ${newRecipe.name}`)
  
      } catch (error) {
          return res.status(404).send(error.message)
      }
};


module.exports = {
     createRecipesHandler,
}