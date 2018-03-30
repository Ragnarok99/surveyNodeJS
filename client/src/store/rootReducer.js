import { combineReducers } from "redux";

import { rootReducer as User } from "./User";

const entities = combineReducers({
  User
});

export default entities;
