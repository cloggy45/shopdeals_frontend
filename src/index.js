import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "../src/containers/App";
import registerServiceWorker from "./registerServiceWorker";

import { Router, Route, browserHistory } from "react-router";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path={"/"} component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
