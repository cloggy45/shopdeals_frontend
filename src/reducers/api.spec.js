import { api } from "./api";
import {
  RECEIVE_USER_SUCCESS, RECEIVE_USER_FAILURE
} from "../actions/actionTypes";
import expect from "expect";

describe("api reducer", () => {
  it("should return the initial state", () => {
    expect(api({}, undefined)).toEqual({});
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
    expect(api({}, action)).toEqual({ user });
  });

  it("should handle RECEIVE_USER_FAILURE", () => {
    const error = {"error": "Fetch user failed"}

    const action = {
      type: RECEIVE_USER_FAILURE,
      payload: error
    }
    expect(api({}, action)).toEqual({error})
  })
});
