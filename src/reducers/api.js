export const api = (currentState = {}, action) => {
  if(action === undefined) return currentState;

  switch(action.type) {
    case "RECEIVE_USER_SUCCESS":
      return Object.assign({}, currentState, {
        user: action.payload
      });
    case "RECEIVE_USER_FAILURE":
      return Object.assign({}, currentState, {
        error: action.payload
      })
    default:
      return currentState;
  }

}