import { combineReducers, Reducer } from "redux";
import { IAction } from "../actions";
import ProfileReducer from "../reducers/profileReducer";
import { RootState } from "../state";

const rootReducer: Reducer<RootState, IAction> = combineReducers({
  profile : ProfileReducer,
});

export { rootReducer };
