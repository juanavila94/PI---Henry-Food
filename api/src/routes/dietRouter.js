const dietsRouter = require ('express').Router();
const { getDietsHandler } = require ('../handlers/dietHandlers');

//controller
 dietsRouter.get('/',getDietsHandler)
module.exports = dietsRouter; 