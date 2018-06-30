import * as React from "react";
import { connect } from "react-redux";
import { AccommoDateState } from "../../state";
import { UserMatches } from "../../state/match";
import { Match } from "./Match";

const MatchesListComponent = (props: UserMatches) => {

  const matches = props.actualMatches.map(
    (match, id) => <Match key={id} {...match} />,
  );

  return (
    <div>
      <h1>Current Matches</h1>
      {matches}
    </div>
  );
};

const mapStateToProps = (state: AccommoDateState) : UserMatches => (state.userMatches);

export const MatchesList = connect(mapStateToProps)(MatchesListComponent);
