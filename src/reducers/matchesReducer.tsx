import { Action } from "../actions";
import { MatchState } from "../state/match";

export const matchesReducer = (state: MatchState[] = [], action: Action<any>) => {
  switch (action.type) {
    default:
      return state;
  }
};
