import { GET_ALL_RECIPES, GET_DETAILS, GET_DIETS  } from "./actions"
const initialState = {
     recipes : [],
     recipeDetails : {},
     diets: [],
     
}



const reducer = (state = initialState, action) =>{
 switch (action.type){
    case (GET_ALL_RECIPES):
     return ({...state, recipes: action.payload});
    case (GET_DETAILS):
     return({...state, recipeDetails: action.payload});
    case (GET_DIETS):
     return({...state, diets: action.payload});
     default: 
     return{
     ...state,
     }
 }
}

export default reducer