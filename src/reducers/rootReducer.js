import {combineReducers} from "redux";
import * as fromUser from "./user";
import * as fromAuth from "./auth";

const USER = "USER";
const AUTH = "AUTH";

export default combineReducers({
    [USER]: fromUser.userReducer,
    [AUTH]: fromAuth.authReducer
});

// User Selectors
export function isLoadingUser(store) {
    return fromUser.isLoading(store[USER]);
}

export function isUserAuthenticated(store) {
    return fromUser.getAuthStatus(store[USER]);
}


// Auth Selectors

export function getAuthError(store) {
    return fromAuth.getAuthError(store[AUTH]);
}

export function isAuthenticated(store) {
    return fromAuth.isAuthenticated(store[AUTH]);
}

export function getAuthProfile(store) {
    return fromAuth.getAuthProfile(store[AUTH]);
}