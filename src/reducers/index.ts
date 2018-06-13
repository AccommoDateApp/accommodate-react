import { combineReducers, Reducer } from "redux";
import { Action } from "../actions";
import { ProfileReducer } from "../reducers/profileReducer";
import { RootState } from "../state";

export const rootReducer: Reducer<RootState, Action<any>> = combineReducers({
  profile : ProfileReducer,
});
