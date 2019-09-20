const HOST = "http://10.0.0.238:3000";
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../constants';

export function getData() {
  return {
    type: FETCHING_DATA
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  };
}

export function fetchData() {}

export const fetchRecipes = async () => {
  try {
    const res = await fetch(`${HOST}/recipes`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: null
    });
    return res.json();
  } catch (err) {
    return console.warn(err);
  }
};

