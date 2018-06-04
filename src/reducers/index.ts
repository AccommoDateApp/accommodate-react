import { combineReducers } from "redux";
import ProfileReducer from "../reducers/profileReducer";

const rootReducer = combineReducers({
  profile : ProfileReducer,
});

export {rootReducer};
