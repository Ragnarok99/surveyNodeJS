import * as types from "../actions/types";

const User = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default User