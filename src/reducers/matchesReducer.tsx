import { Action } from "../actions";
import { MatchProps } from "../components/matching/Match";

export const matchesReducer = (state: MatchProps[] = [], action: Action<any>) => {
  switch (action.type) {
    default:
      return state;
  }
};
