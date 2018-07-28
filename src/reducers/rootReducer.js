import { combineReducers } from "redux";
import * as fromUser from "./user";

const USER = "USER";

export default combineReducers({
  [USER]: fromUser.userReducer
});

export function isLoadingUser(store) {
  return fromUser.isLoading(store[USER]);
}
