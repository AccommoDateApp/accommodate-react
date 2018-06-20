import * as React from "react";
import { connect } from "react-redux";
import { AccommoDateState } from "../../state";
import { MatchState } from "../../state/match";
import { Match } from "./Match";

const MatchesListComponent = (props: MatchesListProps) => {

  const matches = props.matches.map(
    (match, id) => <Match key={id} {...match} />,
  );

  return (
    <div>
      <h1>Matches</h1>
      {matches}
    </div>
  );
};

const mapStateToProps = (state: AccommoDateState) : MatchesListProps => ({
  matches: state.matches,
});

export interface MatchesListProps {
  matches: MatchState[];
}

export const MatchesList = connect(mapStateToProps)(MatchesListComponent);
