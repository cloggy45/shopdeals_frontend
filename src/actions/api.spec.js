import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { RECEIVE_USER_SUCCESS, RECEIVE_USER_FAILURE } from "./actionTypes";

import { fetchUserData } from "./api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe("Test Async Actions", () => {
  let store = mockStore({ api: [] });
  const url = "http://localhost:4000/api";

  afterEach(() => {
    mock.reset();
    store.clearActions();
  });

  afterAll(() => {
    mock.restore();
  });

  describe("User api actions", () => {
    const endpoint = "/user/";

    it("should get user details", () => {
      const param = "smith";

      const payload = {
        data: {
          username: "smith",
          id: 6
        }
      };
      const expectedAction = [
        {
          type: RECEIVE_USER_SUCCESS,
          payload: payload
        }
      ];

      mock.onGet(url + endpoint + param).reply(200, payload);

      return store.dispatch(fetchUserData("smith")).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it("should generate error", () => {
      const param = "john";
      
      const payload = {"error": "Fetch user failed"}

      const expectedAction = [
        {
          type: RECEIVE_USER_FAILURE,
          payload: payload
        }
      ]
      
      mock.onGet(url + endpoint + param).reply(404, payload);

      return store.dispatch(fetchUserData("john")).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
    })
  });
});
