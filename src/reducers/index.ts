import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  profile : profileReducer,
  user: userReducer,
});
