import * as types from "./types";

export const fetchUser = () => {
  return {
    type: types.FETCH_USER
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: {
      data
    }
  };
};
