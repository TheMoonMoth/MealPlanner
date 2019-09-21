import { combineReducers } from 'redux';
import { recipeReducer as recipeData } from "./recipes";
import { ingredientsReducer as ingredientData } from "./ingredients";
import { marketReducer as marketData } from "./markets";

const rootReducer = combineReducers({
  recipeData,
  ingredientData,
  marketData,
});

export default rootReducer;
