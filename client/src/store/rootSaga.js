import { all, fork } from "redux-saga/effects";

import { rootSaga as User } from "./User";

export default function* rootSaga() {
  yield all([fork(User)]);
}
