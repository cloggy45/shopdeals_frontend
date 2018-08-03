import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { logger } from "redux-logger";

import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "./misc/browserHistory";

const middleware = [thunk, logger];

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  compose(applyMiddleware(routerMiddleware(history), ...middleware))
);

export { store };
