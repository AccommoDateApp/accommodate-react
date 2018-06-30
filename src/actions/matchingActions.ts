import { Dispatch } from "react-redux";
import { api } from "../api/client";
import { MatchedPair, UserMatches } from "../state/match";
import { Action, EmptyAction } from "./index";

export enum MatchingActions {
  MatchingFailure = "matching_failed",

  StartFetching = "start_fetching_matches",
  FinishFetching = "finish_fetching_matches",

  AcceptPotentialMatch = "accept_match",
  RejectPotentialMatch = "reject_match",
}

const startFetchingMatches = () : EmptyAction => ({
  type: MatchingActions.StartFetching,
});

const finishFetchingMatches = (userMatches: UserMatches) : Action<UserMatches> => ({
  type: MatchingActions.FinishFetching,
  value: userMatches,
});

export const fetchUserMatches = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchingMatches());
    try {
      const userMatches = await api.fetchUserMatches();
      dispatch(finishFetchingMatches(userMatches));
    } catch {
      const emptyUserMatches = {potentialMatches: [], actualMatches: []};
      dispatch(finishFetchingMatches(emptyUserMatches));
    }
  };
};

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
