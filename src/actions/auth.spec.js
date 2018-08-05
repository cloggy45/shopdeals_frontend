import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCESSFUL
} from "./actionTypes";

import * as authActions from "./auth";
import expect from "expect";

describe('auth actions', () => {
   it('should create an action for LOGIN_REQUEST', () => {
    const expectedAction = {
      type: LOGIN_REQUESTED
    };
    expect(authActions.loginRequest()).toEqual(expectedAction);
  });

  it('should create an action for LOGIN_SUCCESS', () => {
    const fakeProfile = { fakeProperty: 'fakeValue' };
    const expectedAction = {
      type: LOGIN_SUCCESSFUL,
      payload: { profile: fakeProfile }
    };
    expect(authActions.loginSuccess(fakeProfile)).toEqual(expectedAction);
  });

  it('should create an action for LOGIN_ERROR', () => {
    const fakeError = 'fakeError';
    const expectedAction = {
      type: LOGIN_FAILED,
      error: fakeError
    };
    expect(authActions.loginError(fakeError)).toEqual(expectedAction);
  });

  it('should create an action for LOGOUT_SUCCESS', () => {
    const expectedAction = {
      type: LOGOUT_SUCCESSFUL
    };
    expect(authActions.logoutSuccess()).toEqual(expectedAction);
  });
});