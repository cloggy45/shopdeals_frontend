export const authReducer = (currentState = {
    isLoading: false,
    isAuthenticated: false,
    profile: {},
    error: null
}, action) => {
    switch (action.type) {
        case "LOGIN_REQUESTED":
            return {
                ...currentState,
                isLoading: true
            };
        case "LOGIN_SUCCESSFUL":
            return {
                ...currentState,
                profile: action.payload.profile,
                isLoading: false,
                isAuthenticated: true
            };
        case "LOGIN_FAILED":
            return {
                ...currentState,
                isLoading: false,
                error: "LOGIN FAILED"
            };
        case "LOGOUT_SUCCESSFUL":
            return {
                ...currentState,
                isLoading: false,
                isAuthenticated: false
            }
        case "LOGOUT_REQUESTED":
            return {
                ...currentState,
                isLoading: true,
                isAuthenticated: false
            };
        default:
            return currentState;
    }
};

export const isAuthenticated = store => store.isAuthenticated;

export const getAuthProfile = store => store.profile;

export const getAuthError = store => store.error;