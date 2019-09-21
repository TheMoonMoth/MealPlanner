import {
  REQUEST_INGREDIENTS_DATA,
  REQUEST_INGREDIENTS_SUCCESS,
  REQUEST_INGREDIENTS_FAILURE,
} from "../constants";

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INGREDIENTS_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case REQUEST_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case REQUEST_INGREDIENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
