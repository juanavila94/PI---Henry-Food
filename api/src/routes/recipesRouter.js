const { getRecipesHandler, getRecipesByIdHandler, createRecipesHandler } = require('../handlers/recipeHandlers');
const recipesRouter = require ('express').Router();

//exportar controller
recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:id", getRecipesByIdHandler);
recipesRouter.post('/', createRecipesHandler);





module.exports = recipesRouter;