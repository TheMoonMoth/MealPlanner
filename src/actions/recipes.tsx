const HOST = 'http://10.0.0.238:3000';

import {
  REQUEST_RECIPE_DATA,
  REQUEST_RECIPE_SUCCESS,
  REQUEST_RECIPE_FAILURE
} from '../constants';

export function getData() {
  return {
    type: REQUEST_RECIPE_DATA,
  };
}

export function getDataSuccess(data) {
  return {
    type: REQUEST_RECIPE_SUCCESS,
    data
  };
}

export function getDataFailure(data) {
  return {
    type: REQUEST_RECIPE_FAILURE,
    data
  };
}

export function fetchRecipes() {
  return dispatch => {
    dispatch(getData());
    fetch(`${HOST}/recipes`)
      .then(data => {
        return data.json();
      })
      .then(json => {
        dispatch(getDataSuccess(json.recipes));
        return json;
      })
      .catch(err => {
        dispatch(getDataFailure(err));
        console.warn(err);
      });
  };
}
