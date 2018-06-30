import { userMatchesPlaceholder } from "../../test/statePlaceholders/match";
import { Action } from "../actions";
import { MatchingActions } from "../actions/matchingActions";
import { ActualMatch, MatchedPair, UserMatches } from "../state/match";

export const matchesReducer = (userMatches: UserMatches = userMatchesPlaceholder,
                               action: Action<MatchedPair>) : UserMatches => {
  switch (action.type) {
    case MatchingActions.AcceptPotentialMatch:
      return acceptFirstPotentialMatch(userMatches);
    case MatchingActions.RejectPotentialMatch:
      return rejectFirstPotentialMatch(userMatches);
    default:
      return userMatches;
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
