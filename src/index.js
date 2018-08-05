import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import registerServiceWorker from "./registerServiceWorker";

import App from "../src/containers/App";
import Callback from "../src/components/Callback";

import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./misc/browserHistory";



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Switch>
          <Route exact path={"/callback"} component={Callback} />
          <Route path={"/"} component={App} />
        </Switch>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
