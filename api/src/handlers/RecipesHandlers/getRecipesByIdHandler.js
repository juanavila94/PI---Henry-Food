const { getRecipesById } = require('../../controllers/RecipeControllers/getRecipesByIdController')


const getRecipesByIdHandler = async (req, res) => {
     const { id } = req.params
    
     const source = isNaN(id) ? 'db' : 'api' ;
    
     try {
          const recipe = await getRecipesById(id, source);
          res.status(200).json(recipe);
     } catch (error) {
          res.status(400).json({ error: error.message});
          
     }
};


module.exports = {
     getRecipesByIdHandler,
}