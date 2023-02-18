require('dotenv').config();
const { Recipe } = require('../db');
const axios = require('axios');
const {
    API_KEY
   } = process.env;
// 📍 GET | /diets
// Obtiene un arreglo con todos los tipos de dietas existentes.
// En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la documentación.
// Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo).
//  Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.

// const getApiInfo = async () =>{
//      const apiUrl = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);
// }

const getRecipes = (req, res) => {
     res.send('busco recetasasdadsdsa');
};//crear dif de name

const getRecipesById = (req, res) => {
     const { id } = req.params
     res.send('busco rpor id');
};

const createRecipes = (req, res) => {
     res.send('creo');
};



module.exports = {
     getRecipes,
     getRecipesById,
     createRecipes,
}