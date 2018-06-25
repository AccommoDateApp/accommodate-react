import { combineReducers } from "redux";
import { matchesReducer } from "./matchesReducer";
import { profileReducer } from "./profileReducer";
import { signupReducer } from "./signupReducer";
import { storeReducer } from "./storeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  matches : matchesReducer,
  profile : profileReducer,
  signup: signupReducer,
  store: storeReducer,
  user: userReducer,
});
