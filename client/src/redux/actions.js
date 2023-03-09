import axios from 'axios';

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_DIETS = 'GET_DIETS';

export const getAllRecipes = () => async (dispatch) => {
     const allRecipes = await axios(`http://localhost:3001/recipes`);
     return dispatch({type: GET_ALL_RECIPES, payload: allRecipes.data}) 
}

export const getDetails = (id) => async (dispatch) => {
     const details = await axios(`http://localhost:3001/recipes/${id}`);
     return dispatch ({type: GET_DETAILS, payload: details.data});
}

export const getDiets = () => async (dispatch) => {
     const diets = await axios(`http://localhost:3001/diets`);
     return dispatch ({type: GET_DIETS, payload: diets.data});
}

