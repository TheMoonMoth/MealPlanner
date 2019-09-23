const HOST = 'http://10.0.0.238:3000';

import {
  REQUEST_INGREDIENTS_DATA,
  REQUEST_INGREDIENTS_SUCCESS,
  REQUEST_INGREDIENTS_FAILURE
} from '../constants';

export function getData() {
  return {
    type: REQUEST_INGREDIENTS_DATA
  };
}

export function getDataSuccess(data) {
  return {
    type: REQUEST_INGREDIENTS_SUCCESS,
    data
  };
}

export function getDataFailure(data) {
  return {
    type: REQUEST_INGREDIENTS_FAILURE,
    data
  };
}

export function fetchIngredients() {
  return dispatch => {
    dispatch(getData());
    fetch(`${HOST}/ingredients`)
      .then(data => {
        return data.json();
      })
      .then(json => {
        dispatch(getDataSuccess(json.ingredients));
        return json;
      })
      .catch(err => {
        dispatch(getDataFailure(err));
        console.warn(err);
      });
  };
}
