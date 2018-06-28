import { combineReducers } from "redux";
import { biographyReducer } from "./biographyReducer";
import { editorReducer } from "./editorReducer";
import { loginReducer } from "./loginReducer";
import { matchesReducer } from "./matchesReducer";
import { signupReducer } from "./signupReducer";
import { storeReducer } from "./storeReducer";

export const rootReducer = combineReducers({
  biography: biographyReducer,
  editor: editorReducer,
  login: loginReducer,
  signup: signupReducer,
  store: storeReducer,
  userMatches: matchesReducer,
});
