import {
  REQUEST_RECIPE_DATA,
  REQUEST_RECIPE_SUCCESS,
  REQUEST_RECIPE_FAILURE,
} from "../constants";

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPE_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case REQUEST_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case REQUEST_RECIPE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};

export default recipeReducer;
