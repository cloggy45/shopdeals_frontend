import {
  authReducer
} from './auth';
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCESSFUL
} from '../actions/actionTypes';

import expect from 'expect';

describe('Auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      isLoading: false,
      isAuthenticated: false,
      profile: {},
      error: null
    })
  });
  it('should handle LOGIN_REQUESTED', () => {
    const action = {
      type: LOGIN_REQUESTED
    }
    const expected = {
      isAuthenticated: false,
      isLoading: true,
      profile: {},
      error: null
    }
    expect(authReducer(undefined, action)).toEqual(expected);
  });

  it('should handle LOGIN_SUCCESSFUL', () => {
    const action = {
      type: LOGIN_SUCCESSFUL
    }
    const expected = {
      isAuthenticated: true,
      isLoading: false,
      profile: {},
      error: null
    }
    expect(authReducer(undefined, action)).toEqual(expected);
  });

  it('should handle LOGIN_FAILED', () => {
    const action = {
      type: LOGIN_FAILED
    }
    const expected = {
      isAuthenticated: false,
      isLoading: false,
      profile: {},
      error: "LOGIN FAILED"
    }
    expect(authReducer(undefined, action)).toEqual(expected);

  });

  it('should handle LOGOUT_REQUESTED', () => {
    const action = {
      type: LOGOUT_REQUESTED
    }
    const expected = {
      isAuthenticated: false,
      isLoading: true,
      profile: {},
      error: null
    }
    expect(authReducer(undefined, action)).toEqual(expected);

  });

  it('should handle LOGOUT_SUCCESSFUL', () => {
    const action = {
      type: LOGOUT_SUCCESSFUL
    }
    const expected = {
      isAuthenticated: false,
      isLoading: false,
      profile: {},
      error: null
    }
    expect(authReducer(undefined, action)).toEqual(expected);
  });

});