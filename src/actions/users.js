import axios from "axios";
import { serverInfo } from "../misc/connectionInfo";

import {
  FETCH_USER_REQUESTING,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_FAILED
} from "./actionTypes";

export const fetchUserData = id => dispatch => {
  const url = serverInfo.address;
  const endpoint = "/user/";

  dispatch({
    type: FETCH_USER_REQUESTING,
    isLoading: true
  });

  const request = axios({
    method: "GET",
    url: String(url + endpoint + id)
  });

  return request.then(
    response =>
      dispatch({
        type: FETCH_USER_SUCCESSFUL,
        payload: response.data,
        isLoading: false
      }),
    error =>
      dispatch({
        type: FETCH_USER_FAILED,
        payload: error || "failed to fetch user data",
        isLoading: false
      })
  );
};
