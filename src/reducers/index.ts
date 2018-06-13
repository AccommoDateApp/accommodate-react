import { combineReducers } from "redux";
import { profileReducer } from "../reducers/profileReducer";

export const rootReducer = combineReducers({
  profile : profileReducer,
});
