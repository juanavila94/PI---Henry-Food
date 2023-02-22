const { getDiets } = require ('../../controllers/DietsControllers/getDietsController')

   const getDietsHandler = async (req, res) =>{
     try {
      const finalDiets = await getDiets();
      res.status(200).json(finalDiets);
     } catch (error) {
      res.status(400).json({error: error.message});
     }
   }



   module.exports = {
     getDietsHandler,
   };