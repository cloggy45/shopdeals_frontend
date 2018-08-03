import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { serverInfo } from "../misc/connectionInfo";

import {
  FETCH_THREADS_FAILED,
  FETCH_THREADS_REQUESTING,
  FETCH_THREADS_SUCCESSFUL
} from "./actionTypes";

import { fetchThreadData } from "./threads";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const address = serverInfo.address;
const endpoint = "/thread/";

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

  const actionFailed = {
    type: FETCH_THREADS_FAILED,
    payload: new Error("Request failed with status code 404"),
    isLoading: false
  };
  it("should fetch individual thread by id", () => {
    const threadId = "2";

    const payload = [
      {
        id: 2,
        title: "Pleasure of Being Robbed, The",
        body:
          "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        link:
          "http://epa.gov/in/quis/justo.aspx?in=sapien&hac=ut&habitasse=nunc&platea=vestibulum&dictumst=ante&morbi=ipsum&vestibulum=primis&velit=in&id=faucibus&pretium=orci&iaculis=luctus&diam=et&erat=ultrices&fermentum=posuere&justo=cubilia&nec=curae&condimentum=mauris&neque=viverra&sapien=diam&placerat=vitae&ante=quam&nulla=suspendisse&justo=potenti&aliquam=nullam&quis=porttitor&turpis=lacus&eget=at&elit=turpis&sodales=donec&scelerisque=posuere&mauris=metus&sit=vitae&amet=ipsum&eros=aliquam&suspendisse=non&accumsan=mauris&tortor=morbi",
        author: "celwell1",
        timestamp: "2017-06-08T08:05:08Z"
      }
    ];

    const actionSuccess = {
      type: FETCH_THREADS_SUCCESSFUL,
      payload: payload,
      isLoading: false
    };

    mock.onGet(address + endpoint + threadId).reply(200, payload);
    return store.dispatch(fetchThreadData(threadId)).then(() => {
      expect(store.getActions()).toEqual([actionRequest, actionSuccess]);
    });
  });

  it("should generate a network error", () => {
    mock.onGet(address + endpoint).networkError();
    return store.dispatch(fetchThreadData()).then(() => {
      expect(store.getActions()).toEqual([actionRequest, actionFailed]);
    });
  });
});
