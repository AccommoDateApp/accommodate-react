import { combineReducers } from "redux";
import { bioReducer } from "./bioReducer";
import { matchesReducer } from "./matchesReducer";
import { signupReducer } from "./signupReducer";
import { storeReducer } from "./storeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  bio: bioReducer,
  signup: signupReducer,
  store: storeReducer,
  user: userReducer,
  userMatches: matchesReducer,
});
