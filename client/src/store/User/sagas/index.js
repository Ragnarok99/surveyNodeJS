import { takeLatest } from "redux-saga/effects";

import fetchUser from "./fetchUser";
import * as types from "../actions/types";

export default function* root() {
  yield takeLatest(types.FETCH_USER, fetchUser);
}
