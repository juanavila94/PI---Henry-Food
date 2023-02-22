// const { getRecipesHandler, getRecipesByIdHandler, createRecipesHandler } = require('../handlers/recipeHandlers');
const { getRecipesHandler } = require('../handlers/RecipesHandlers/getRecipesHandler');
const { getRecipesByIdHandler } = require('../handlers/RecipesHandlers/getRecipesByIdHandler');
const { createRecipesHandler } = require('../handlers/RecipesHandlers/createRecipesHandler');
const recipesRouter = require ('express').Router();

//exportar controller
recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:id", getRecipesByIdHandler);
recipesRouter.post("/", createRecipesHandler);





module.exports = recipesRouter;