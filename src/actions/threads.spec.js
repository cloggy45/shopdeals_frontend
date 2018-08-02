import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  FETCH_THREADS_FAILED,
  FETCH_THREADS_REQUESTING,
  FETCH_THREADS_SUCCESSFUL
} from "./actionTypes";

import { fetchThreads } from "./threads";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe("The async thread functions", () => {
  let store = mockStore({ threads: [] });

  afterEach(() => {
    mock.reset();
    store.clearActions();
  });

  afterAll(() => {
    mock.restore();
  });

  const actionRequest = {
    type: FETCH_THREADS_REQUESTING,
    isLoading: true
  };

  const actionSuccessful = {
    type: FETCH_THREADS_SUCCESSFUL,
    isLoading: false
  };

  const actionFailed = {
    type: FETCH_THREADS_FAILED,
    isLoading: false
  };

  it("should fetch threads", () => {
    const payload = {};
  });
});
