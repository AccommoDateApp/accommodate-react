import { shallow } from "enzyme";
import * as React from "react";
import {
  MatchingCockpit,
} from "../../../src/components/matching/MatchingCockpit";
import { MatchesList } from "../../../src/components/matching/MatchesList";
import { CandidatesStack } from "../../../src/components/matching/CandidatesStack";


describe("The MatchingCockpit", () => {
  it("has a MatchesList", () => {
    const matchingCockpit = shallow(<MatchingCockpit />);
    const expected = <MatchesList />;
    expect(matchingCockpit.contains(expected)).toBeTruthy();
  });

  it("has a CandidatesStack", () => {
    const matchingCockpit = shallow(<MatchingCockpit />);
    const expected = <CandidatesStack />;
    expect(matchingCockpit.contains(expected)).toBeTruthy();
  })
});
