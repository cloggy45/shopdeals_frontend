import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { logger } from "redux-logger";

import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

const middleware = [thunk, logger];
const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  compose(applyMiddleware(routerMiddleware(history), ...middleware))
);

export { store };
