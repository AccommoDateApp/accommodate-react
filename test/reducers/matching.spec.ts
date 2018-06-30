import {
  createMatchBetween,
  rejectMatchBetween
} from "../../src/actions/matchingActions";
import {
  realEstatePlaceholder,
  tenantBiographyPlaceholder
} from "../statePlaceholders/biography";
import { MatchedPair } from "../../src/state/match";
import { matchingReducer } from "../../src/reducers/matchingReducer";
import { matchingStateFixture } from "../statePlaceholders/match";

const MATCHED_PAIR : MatchedPair = {
  realEstate: realEstatePlaceholder,
  tenant: tenantBiographyPlaceholder,
};

describe("The MatchingReducer", () => {
  it("adds an accepted match to the actual matches.", () => {
    const initialNumOfMatches = matchingStateFixture.userMatches.actualMatches.length;
    const action = createMatchBetween(MATCHED_PAIR);
    const newMatchingState = matchingReducer(matchingStateFixture, action);
    const newNumOfMatches = newMatchingState.userMatches.actualMatches.length;

    expect(newNumOfMatches).toBe(initialNumOfMatches + 1);
  });

  it("removes an accepted match from the potential matches.", () => {
    const initialNumOfPotentialMatches = matchingStateFixture.userMatches.potentialMatches.length;
    const action = createMatchBetween(MATCHED_PAIR);
    const newMatchingState = matchingReducer(matchingStateFixture, action);
    const newNumOfPotentialMatches = newMatchingState.userMatches.potentialMatches.length;

    expect(newNumOfPotentialMatches).toBe(initialNumOfPotentialMatches - 1);
  });

  it("removes a rejected match from the potential matches.", () => {
    const initialNumOfPotentialMatches = matchingStateFixture.userMatches.potentialMatches.length;
    const action = rejectMatchBetween(MATCHED_PAIR);
    const newMatchingState = matchingReducer(matchingStateFixture, action);
    const newNumOfPotentialMatches = newMatchingState.userMatches.potentialMatches.length;

    expect(newNumOfPotentialMatches).toBe(initialNumOfPotentialMatches - 1);
  })
});
