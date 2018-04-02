import { call, put } from "redux-saga/effects";
import { delay } from "redux-saga";

import * as api from "../../../api";
import * as actions from "../actions";

export default function* addCredits(action) {
  yield delay(300);

  try {
    const { data } = yield call(api.user.addCredits, action.payload);
    console.log({data})
    yield put(actions.fetchUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
