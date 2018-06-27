import { combineReducers } from "redux";
import { biographyReducer } from "./biographyReducer";
import { loginReducer } from "./loginReducer";
import { matchesReducer } from "./matchesReducer";
import { signupReducer } from "./signupReducer";
import { storeReducer } from "./storeReducer";

export const rootReducer = combineReducers({
  bio: biographyReducer,
  login: loginReducer,
  signup: signupReducer,
  store: storeReducer,
  userMatches: matchesReducer,
});
