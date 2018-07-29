const initState = {
  isLoading: false,
  user: {},
  error: {}
};

export const userReducer = (currentState = initState, action) => {
  if (action === undefined) return currentState;

  switch (action.type) {
    case 'RECEIVE_USER_SUCCESS':
      return Object.assign({}, currentState, {
        user: action.payload
      });
    case 'RECEIVE_USER_FAILURE':
      return Object.assign({}, currentState, {
        error: action.payload
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
