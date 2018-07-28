import { userReducer } from "./user";
import {
  RECEIVE_USER_SUCCESS,
  RECEIVE_USER_FAILURE
} from "../actions/actionTypes";
import expect from "expect";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer({}, undefined)).toEqual({});
  });

  it("should handle RECEIVE_USER_SUCCESS", () => {
    const user = {
      username: "smith",
      id: 6
    };
    const action = {
      type: RECEIVE_USER_SUCCESS,
      payload: user
    };
    expect(userReducer({}, action)).toEqual({ user });
  });

  it("should handle RECEIVE_USER_FAILURE", () => {
    const error = { error: "Fetch user failed" };

    const action = {
      type: RECEIVE_USER_FAILURE,
      payload: error
    };
    expect(userReducer({}, action)).toEqual({ error });
  });
});
