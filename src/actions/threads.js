import axios from "axios";
import { serverInfo } from "../misc/connectionInfo";

import {
  FETCH_THREADS_REQUESTING,
  FETCH_THREADS_SUCCESSFUL,
  FETCH_THREADS_FAILED
} from "./actionTypes";

export const fetchThreadData = id => dispatch => {
  const url = serverInfo.address;
  const endpoint = "/thread/";

  dispatch({
    type: FETCH_THREADS_REQUESTING,
    isLoading: true
  });

  const request = axios({
    method: "GET",
    url: String(url + endpoint + id)
  });

  return request.then(
    response =>
      dispatch({
        type: FETCH_THREADS_SUCCESSFUL,
        payload: response.data,
        isLoading: false
      }),
    error =>
      dispatch({
        type: FETCH_THREADS_FAILED,
        payload: error || "Failed to fetch thread",
        isLoading: false
      })
  );
};
