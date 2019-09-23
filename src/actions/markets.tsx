const HOST = 'http://10.0.0.238:3000';

import {
  REQUEST_MARKET_DATA,
  REQUEST_MARKET_SUCCESS,
  REQUEST_MARKET_FAILURE
} from '../constants';

export function getData() {
  return {
    type: REQUEST_MARKET_DATA
  };
}

export function getDataSuccess(data) {
  return {
    type: REQUEST_MARKET_SUCCESS,
    data
  };
}

export function getDataFailure(data) {
  return {
    type: REQUEST_MARKET_FAILURE,
    data
  };
}

export function fetchMarkets() {
  return dispatch => {
    dispatch(getData());
    fetch(`${HOST}/markets`)
      .then(data => {
        return data.json();
      })
      .then(json => {
        dispatch(getDataSuccess(json.markets));
        return json;
      })
      .catch(err => {
        dispatch(getDataFailure(err));
        console.warn(err);
      });
  };
}
