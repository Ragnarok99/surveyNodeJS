import * as types from "../actions/types";

const User = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state;
  }
};

export default User