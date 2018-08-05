import { combineReducers } from "redux";
import * as fromUser from "./user";
import * as fromAuth from "./auth";

const USER = "USER";
const AUTH = "AUTH";

export default combineReducers({
  [USER]: fromUser.userReducer,
  [AUTH]: fromAuth.authReducer
});

export function isLoadingUser(store) {
  return fromUser.isLoading(store[USER]);
}

export function isUserAuthenticated(store) {
  return fromUser.getAuthStatus(store[USER]);
}
