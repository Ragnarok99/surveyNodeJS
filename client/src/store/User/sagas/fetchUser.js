import { call, put } from "redux-saga/effects";
import { delay } from "redux-saga";

import * as actions from "../actions";
import * as api from "../../../api";

export default function* fetchUser(action) {
  yield delay(300);
  try {
    const { data } = yield call(api.user.fetchUser);
    console.log({ data });
    yield put(actions.fetchUserSuccess(data || false));
  } catch (error) {
    console.log(error);
  }
}
