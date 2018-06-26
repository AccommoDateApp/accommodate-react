import {
  acceptMatchWithEmail,
  rejectMatchWithEmail
} from "../../src/actions/matchingActions";
import {
  matchesReducer,
  userMatchesPlaceholder
} from "../../src/reducers/matchesReducer";

const matchEmailAddress = "hello.world@tum.de";

describe("The MatchingReducer", () => {
  it("adds an accepted match to the actual matches.", () => {
    const action = acceptMatchWithEmail(matchEmailAddress);
    const { actualMatches } = matchesReducer(userMatchesPlaceholder, action);
    const expected = actualMatches
      .find(match => match.userProfile.bio.email === matchEmailAddress);

    expect(expected).not.toBeUndefined();
  });

  it("removes an accepted match from the potential matches.", () => {
    const action = acceptMatchWithEmail(matchEmailAddress);
    const { potentialMatches } = matchesReducer(userMatchesPlaceholder, action);
    const expectedNum = userMatchesPlaceholder.potentialMatches.length - 1;

    expect(potentialMatches.length).toBe(expectedNum);
  });

  it("removes a rejected match from the potential matches.", () => {
    const action = rejectMatchWithEmail(matchEmailAddress);
    const { potentialMatches } = matchesReducer(userMatchesPlaceholder, action);
    const expectedNum = userMatchesPlaceholder.potentialMatches.length - 1;

    expect(potentialMatches.length).toBe(expectedNum);
  })
});
