import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT_SUCCESSFUL
} from './actionTypes'

export const loginRequest = () => ({
  type: LOGIN_REQUESTED
});

export const loginSuccess = profile => ({
  type: LOGIN_SUCCESSFUL,
  payload: { profile }
});

export const loginError = error => ({
  type: LOGIN_FAILED,
  error
});

export const logoutSuccess = () => ({
  type:LOGOUT_SUCCESSFUL
});