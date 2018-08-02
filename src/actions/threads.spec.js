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

  const actionFailed = {
    type: FETCH_THREADS_FAILED,
    isLoading: false
  };

  it("should fetch threads", () => {
    const payload = [
      {
        id: 1,
        title: "Prisoner of Shark Island, The",
        body:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        link:
          "https://nsw.gov.au/volutpat/in/congue/etiam/justo/etiam/pretium.png?nullam=enim&orci=lorem&pede=ipsum&venenatis=dolor&non=sit&sodales=amet&sed=consectetuer&tincidunt=adipiscing&eu=elit&felis=proin&fusce=interdum&posuere=mauris&felis=non&sed=ligula&lacus=pellentesque",
        author: "ewoodhouse0",
        timestamp: "2017-06-08T00:05:01Z"
      },
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

    const actionSuccessful = {
      type: FETCH_THREADS_SUCCESSFUL,
      payload: payload,
      isLoading: false
    };
  });
});
