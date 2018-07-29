const initState = {
  isLoading: false,
  user: [],
  error: []
};

export const userReducer = (currentState = initState, action) => {
  if (action === undefined) return currentState;

  switch (action.type) {
    case 'FETCH_USER_SUCCESSFUL':
      return Object.assign({}, currentState, {
        user: action.payload,
        isLoading: false
      });
    case 'FETCH_USER_FAILED':
      return Object.assign({}, currentState, {
        error: action.payload,
        isLoading: false
      });
    case 'FETCH_USER_REQUESTING':
      return Object.assign({}, currentState, {
        isLoading: true
      });
    default:
      return currentState;
  }
};

export const isLoading = store => {
  return store.isLoading;
};

export const getUser = store => {
  return store.user;
};

export const getError = store => {
  return store.error;
};
