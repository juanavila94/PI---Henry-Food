const dietsRouter = require ('express').Router();
const { getDietsHandler } = require ('../handlers/DietsHandler/getDietsHandler')

//controller
 dietsRouter.get('/',getDietsHandler)
module.exports = dietsRouter; 