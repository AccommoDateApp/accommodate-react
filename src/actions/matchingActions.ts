import { Dispatch } from "react-redux";
import { api } from "../api/client";
import { MatchedPair } from "../state/match";
import { Action, EmptyAction } from "./index";

export enum MatchingActions {
  MatchingFailure = "matching_failed",

  AcceptPotentialMatch = "accept_match",
  RejectPotentialMatch = "reject_match",
}

const matchingFailure = () : EmptyAction => ({
  type: MatchingActions.MatchingFailure,
});

export const createMatchBetween = (matchedPair: MatchedPair) : Action<MatchedPair> => ({
  type: MatchingActions.AcceptPotentialMatch,
  value: matchedPair,
});

export const rejectMatchBetween = (matchedPair: MatchedPair) : Action<MatchedPair> => ({
  type: MatchingActions.RejectPotentialMatch,
  value: matchedPair,
});

export const createMatch = (matchedPair: MatchedPair) => {
  return async (dispatch: Dispatch) => {
    try {
      await api.createMatch(matchedPair);
      dispatch(createMatchBetween(matchedPair));
    } catch {
      dispatch(matchingFailure());
    }
  };
};

export const rejectMatch = (matchedPair: MatchedPair) => {
  return async (dispatch: Dispatch) => {
    try {
      await api.rejectMatch(matchedPair);
      dispatch(rejectMatchBetween(matchedPair));
    } catch {
      dispatch(matchingFailure());
    }
  };
};
