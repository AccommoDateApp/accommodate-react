import { combineReducers } from "redux";
import { biographyReducer } from "./biographyReducer";
import { editorReducer } from "./editorReducer";
import { loginReducer } from "./loginReducer";
import { matchingReducer } from "./matchingReducer";
import { signupReducer } from "./signupReducer";
import { storeReducer } from "./storeReducer";

export const rootReducer = combineReducers({
  biography: biographyReducer,
  editor: editorReducer,
  login: loginReducer,
  matchingState: matchingReducer,
  signup: signupReducer,
  store: storeReducer,
});
