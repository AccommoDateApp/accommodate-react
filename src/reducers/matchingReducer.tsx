import { Action } from "../actions";
import { MatchingActions } from "../actions/matchingActions";
import {
  ActualMatch,
  defaultMatchingState,
  MatchedPair,
  MatchingState,
  UserMatches,
} from "../state/match";

export const matchingReducer = (
    matchingState: MatchingState = defaultMatchingState,
    action: (Action<MatchedPair> & Action<UserMatches>),
  ) : MatchingState => {
  switch (action.type) {
    case MatchingActions.AcceptPotentialMatch:
      return {
        ...matchingState,
        userMatches: acceptFirstPotentialMatch(matchingState.userMatches),
      };

    case MatchingActions.RejectPotentialMatch:
      return {
        ...matchingState,
        userMatches: rejectFirstPotentialMatch(matchingState.userMatches),
      };

    case MatchingActions.StartFetching:
      return {
        ...matchingState,
        isFetchingUserMatches: true,
      };

    case MatchingActions.FinishFetching:
      return {
        isFetchingUserMatches: false,
        userMatches: action.value as UserMatches,
      };

    default:
      return matchingState;
  }
};

const acceptFirstPotentialMatch = (userMatches: UserMatches) : UserMatches => {
  const firstPotentialMatch = userMatches.potentialMatches[0];
  const newMatch: ActualMatch = {
    ...firstPotentialMatch,
    matchIsFavorite: false,
  };
  const newActualMatches = [...userMatches.actualMatches, newMatch];
  const allPotentialMatchesExceptFirst = userMatches.potentialMatches.slice(1);
  return {
    actualMatches: newActualMatches,
    potentialMatches: allPotentialMatchesExceptFirst,
  };
};

const rejectFirstPotentialMatch = (userMatches: UserMatches) : UserMatches => {
  const potentialMatchesExceptFirst = userMatches.potentialMatches.slice(1);
  return {
    actualMatches: userMatches.actualMatches,
    potentialMatches: potentialMatchesExceptFirst,
  };
};
