import { shallow } from "enzyme";
import * as React from "react";
import {
  MatchingCockpitComponent,
  MatchingCockpitProps
} from "../../../src/components/matching/MatchingCockpit";
import { MatchesList } from "../../../src/components/matching/MatchesList";
import { CandidatesStack } from "../../../src/components/matching/CandidatesStack";

const props: MatchingCockpitProps  = {
  matches: []
};

describe("The MatchingCockpit", () => {
  it("has a MatchesList", () => {
    const matchingCockpit = shallow(<MatchingCockpitComponent {...props}/>);
    const expected = <MatchesList matches={props.matches}/>;
    expect(matchingCockpit.contains(expected)).toBeTruthy();
  });

  it("has a CandidatesStack", () => {
    const matchingCockpit = shallow(<MatchingCockpitComponent {...props} />);
    const expected = <CandidatesStack />;
    expect(matchingCockpit.contains(expected)).toBeTruthy();
  })
});
