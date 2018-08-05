export const userReducer = (currentState = {
  isLoading: false,
  isAuthenticated: true,
  user: [],
  error: []
}, action) => {

  switch (action.type) {
    case "FETCH_USER_SUCCESSFUL":
      return {...currentState,
        user: action.payload,
        isLoading: false
      }
    case "FETCH_USER_FAILED":
      return  {...currentState, 
        error: action.payload,
        isLoading: false
      };
    case "FETCH_USER_REQUESTING":
      return {...currentState,
        isLoading: true
      };
    default:
      return currentState;
  }
};

export const isLoading = store => {
  return store.dog;
};

export const getUser = store => {
  return store.user;
};

export const getError = store => {
  return store.error;
};

export const getAuthStatus = store => {
  return store.isAuthenticated;
};