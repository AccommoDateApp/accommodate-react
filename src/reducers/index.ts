import { Action } from "redux";
import { AccommoDateState } from "../state";

export const rootReducer = (state: AccommoDateState, action: Action) => {
  if (action) {console.log(action); } // temporary not to get noparam used error
  return state;
};
