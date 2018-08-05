import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import registerServiceWorker from "./registerServiceWorker";

import App from "../src/containers/App";
// import Callback from "../src/components/Callback";

import { ConnectedRouter } from "connected-react-router";

import { history } from "./misc/browserHistory";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
