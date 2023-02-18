const getRecipesHandler = (req, res) => {
     res.send('busco recetasasdadsdsa');
};//crear dif de name

const getRecipesByIdHandler = (req, res) => {
     const { id } = req.params
     res.send('busco rpor id');
};

const createRecipesHandler = (req, res) => {
     res.send('creo');
};



module.exports = {
     getRecipesHandler,
     getRecipesByIdHandler,
     createRecipesHandler,
}