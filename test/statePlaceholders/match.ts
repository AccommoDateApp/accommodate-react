import {MatchingState, UserMatches} from "../../src/state/match";
import {tenantBiographyPlaceholder} from "./biography";

const userMatchesPlaceholder: UserMatches = {
  actualMatches: Array(2).fill(tenantBiographyPlaceholder),
  potentialMatches: Array(5).fill(tenantBiographyPlaceholder),
};

export const matchingStateFixture: MatchingState = {
  userMatches: userMatchesPlaceholder,
  isFetchingUserMatches: false,
};
