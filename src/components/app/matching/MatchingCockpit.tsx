import * as React from "react";
import { MatchProps } from "./Match";
import { MatchesList } from "./MatchesList";

interface MatchingCockpitState {
  matches: MatchProps[];
}

const MATCHES_PLACEHOLDER = {
  matches: [
    {
      chatStatusIcon: "Chatty",
      matchIsStarred: true,
      matchName: "Tomas",
      matchPicture: "awesome",
    } as MatchProps,
  ],
} as MatchingCockpitState;

class MatchingCockpit extends React.Component<any, MatchingCockpitState> {

  public state = MATCHES_PLACEHOLDER;

  public render() {
    return (
      <div>
        <h1>Matches</h1>
        <MatchesList matches={this.state.matches} />
        <h1>Candidates Stack</h1>
        <p>Candidate Stack placeholder</p>
      </div>
    );
  }
}

export default MatchingCockpit;
