export const authReducer = (currentState = {
  isLoading: false,
  isAuthenticated: false,
  profile: {},
  error: null
}, action) => {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return { ...currentState,
        isLoading: true
      };
    case "LOGIN_SUCCESSFUL":
      return { ...currentState,
        isLoading: false,
        isAuthenticated: true
      };
    case "LOGIN_FAILED":
      return { ...currentState,
        isLoading: false,
        error: "LOGIN FAILED"
      };
    case "LOGOUT_REQUESTED":
      return {
        ...currentState,
        isLoading:true,
        isAuthenticated: false
      };
    default:
      return currentState;
  }
}