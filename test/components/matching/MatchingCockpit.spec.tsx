import { shallow } from "enzyme";
import * as React from "react";
import { MatchingCockpitComponent } from "../../../src/components/matching/MatchingCockpit";
import { MatchesList } from "../../../src/components/matching/MatchesList";
import { CandidatesStack } from "../../../src/components/matching/CandidatesStack";
import { fetchUserMatches } from "../../../src/actions/matchingActions";


const matchingCockpitProps = {
  isFetchingUserMatches: false,
  fetchUserMatches: (() => {}) as typeof fetchUserMatches,
};

describe("The MatchingCockpit", () => {
  it("has a MatchesList", () => {
    const matchingCockpit = shallow(<MatchingCockpitComponent {...matchingCockpitProps} />);
    const expected = <MatchesList />;
    expect(matchingCockpit.contains(expected)).toBeTruthy();
  });

  it("has a CandidatesStack", () => {
    const matchingCockpit = shallow(<MatchingCockpitComponent {...matchingCockpitProps} />);
    const expected = <CandidatesStack />;
    expect(matchingCockpit.contains(expected)).toBeTruthy();
  })
});
