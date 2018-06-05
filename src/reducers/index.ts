import { combineReducers } from "redux";
import ProfileReducer from "../reducers/profileReducer";

const rootReducer: any = combineReducers({
  profile : ProfileReducer,
});

export { rootReducer };
