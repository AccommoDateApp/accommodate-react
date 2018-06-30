import {
  createMatchBetween,
  rejectMatchBetween
} from "../../src/actions/matchingActions";
import { matchesReducer } from "../../src/reducers/matchesReducer";
import {
  realEstatePlaceholder,
  tenantBiographyPlaceholder
} from "../statePlaceholders/biography";
import { MatchedPair } from "../../src/state/match";
import { userMatchesPlaceholder } from "../statePlaceholders/match";

const MATCHED_PAIR : MatchedPair = {
  realEstate: realEstatePlaceholder,
  tenant: tenantBiographyPlaceholder,
};

describe("The MatchingReducer", () => {
  it("adds an accepted match to the actual matches.", () => {
    const initialNumOfMatches = userMatchesPlaceholder.actualMatches.length;
    const action = createMatchBetween(MATCHED_PAIR);
    const { actualMatches } = matchesReducer(userMatchesPlaceholder, action);

    expect(actualMatches.length).toBe(initialNumOfMatches + 1);
  });

  it("removes an accepted match from the potential matches.", () => {
    const initialNumOfPotentialMatches = userMatchesPlaceholder.potentialMatches.length;
    const action = createMatchBetween(MATCHED_PAIR);
    const { potentialMatches } = matchesReducer(userMatchesPlaceholder, action);

    expect(potentialMatches.length).toBe(initialNumOfPotentialMatches - 1);
  });

  it("removes a rejected match from the potential matches.", () => {
    const initialNumOfPotentialMatches = userMatchesPlaceholder.potentialMatches.length;
    const action = rejectMatchBetween(MATCHED_PAIR);
    const { potentialMatches } = matchesReducer(userMatchesPlaceholder, action);

    expect(potentialMatches.length).toBe(initialNumOfPotentialMatches - 1);
  })
});
