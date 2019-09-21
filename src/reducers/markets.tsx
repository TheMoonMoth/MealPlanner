import {
  REQUEST_MARKET_DATA,
  REQUEST_MARKET_SUCCESS,
  REQUEST_MARKET_FAILURE,
} from "../constants";

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MARKET_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case REQUEST_MARKET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case REQUEST_MARKET_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};

export default marketReducer;
