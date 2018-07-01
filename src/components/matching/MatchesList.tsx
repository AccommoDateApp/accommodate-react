import {Col, Row} from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { AccommoDateState } from "../../state";
import { UserMatches } from "../../state/match";
import { Match } from "./Match";

const MatchesListComponent = (props: UserMatches) => {

  const matches = props.actualMatches.map(
    (match, id) => (
      <Row key={id}>
        <Col><Match {...match} /></Col>
      </Row>
    ),
  );

  return (
    <div>
      <h1>Current Matches</h1>
      {matches}
    </div>
  );
};

const mapStateToProps = (state: AccommoDateState) : UserMatches => (
  state.matchingState.userMatches
);

export const MatchesList = connect(mapStateToProps)(MatchesListComponent);
