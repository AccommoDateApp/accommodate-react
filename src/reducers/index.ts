import { combineReducers } from "redux";
import { bioReducer } from "./bioReducer";
import { loginReducer } from "./loginReducer";
import { matchesReducer } from "./matchesReducer";
import { signupReducer } from "./signupReducer";
import { storeReducer } from "./storeReducer";

export const rootReducer = combineReducers({
  bio: bioReducer,
  login: loginReducer,
  signup: signupReducer,
  store: storeReducer,
  userMatches: matchesReducer,
});
