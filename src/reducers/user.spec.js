import {
  userReducer
} from './user';
import {
  FETCH_USER_REQUESTING,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESSFUL
} from '../actions/actionTypes';
import expect from 'expect';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {}
    )).toEqual({
      isLoading: false,
      isAuthenticated: true,
      user: [],
      error: []
    });
  });

  it('should handle FETCH_USER_SUCCESSFUL', () => {
    const user = {
      username: 'smith'
    };
    const action = {
      type: FETCH_USER_SUCCESSFUL,
      payload: user,
      isLoading: false
    };
    expect(userReducer({}, action)).toEqual({
      isLoading: false,
      user
    });
  });

  it('should handle FETCH_USER_FAILED', () => {
    const error = {
      error: 'Fetch user failed'
    };

    const action = {
      type: FETCH_USER_FAILED,
      payload: error,
      isLoading: false
    };
    expect(userReducer({}, action)).toEqual({
      isLoading: false,
      error
    });
  });

  it('should handle FETCH_USER_REQUESTING', () => {
    const action = {
      type: FETCH_USER_REQUESTING,
      isLoading: true
    };
    expect(userReducer({}, action)).toEqual({
      isLoading: true
    });
  });
});