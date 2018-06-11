import { combineReducers, Reducer } from "redux";
import { IAction } from "../actions";
import { ProfileReducer } from "../reducers/profileReducer";
import { RootState } from "../state";

export const rootReducer: Reducer<RootState, IAction<any>> = combineReducers({
  profile : ProfileReducer,
});
