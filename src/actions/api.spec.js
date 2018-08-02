import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { serverInfo } from "../misc/connectionInfo";

import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUESTING,
  FETCH_USER_SUCCESSFUL
} from "./actionTypes";

import { fetchUserData } from "./api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const serverAddress = serverInfo.address;

describe("Test Async Actions", () => {
  let store = mockStore({ api: [] });

  afterEach(() => {
    mock.reset();
    store.clearActions();
  });

  afterAll(() => {
    mock.restore();
  });

  describe("User api actions", () => {
    const actionRequest = {
      type: FETCH_USER_REQUESTING,
      isLoading: true
    };

    const actionFailed = {
      type: FETCH_USER_FAILED,
      payload: new Error("Request failed with status code 404"),
      isLoading: false
    };

    it("should fetch user details", () => {
      const endpoint = "/user/";
      const userId = 5;

      const somePayload = {
        id: 5,
        username: "lgedney4",
        first_name: "Linus",
        last_name: "Gedney",
        email: "lgedney4@homestead.com",
        ip_address: "76.57.59.93",
        last_login: "12/26/2017"
      };

      const actionSuccess = {
        type: FETCH_USER_SUCCESSFUL,
        payload: somePayload,
        isLoading: false
      };
      mock.onGet(serverAddress + endpoint + userId).reply(200, somePayload);

      return store.dispatch(fetchUserData(userId)).then(() => {
        expect(store.getActions()).toEqual([actionRequest, actionSuccess]);
      });
    });

    it("should generate error", () => {
      mock.onGet(serverAddress).networkError();
      return store.dispatch(fetchUserData()).then(() => {
        expect(store.getActions()).toEqual([actionRequest, actionFailed]);
      });
    });
  });
});
