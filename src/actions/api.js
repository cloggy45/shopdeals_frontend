import axios from 'axios';

import {
  FETCH_USER_REQUESTING,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_FAILED
} from './actionTypes';

export const fetchUserData = id => dispatch => {
  dispatch({
    type: FETCH_USER_REQUESTING,
    isLoading: true
  });

  const request = axios({
    method: 'GET',
    url: `http://demo8555433.mockable.io/user/${id}`
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
        payload: error || 'failed to fetch user data',
        isLoading: false
      })
  );
};
