import axios from "axios";

import { RECEIVE_USER_SUCCESS, RECEIVE_USER_FAILURE } from "./actionTypes";

axios.defaults.baseURL = "http://localhost:4000/api/"

export const receiveUserSuccess = json => {
  return {
    type: RECEIVE_USER_SUCCESS,
    payload: json
  };
};

export const receiveUserFailure = error => {
  return {
    type: RECEIVE_USER_FAILURE,
    payload: error
  };
};

export function fetchUserData(user) {
  return dispatch => {
    return axios.get('/user/' + user).then(response => {
      dispatch(receiveUserSuccess(response.data));
    }).catch(error => {
      dispatch(receiveUserFailure({"error": "Fetch user failed"}));
    })
  }
}

