import * as types from "./types";

export const fetchUser = () => {
  return {
    type: types.FETCH_USER
  };
};

export const addCredits = token => {
  return {
    type: types.ADD_CREDITS,
    payload: token
  }
}

export const fetchUserSuccess = (data) => {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: {
      data
    }
  };
};
