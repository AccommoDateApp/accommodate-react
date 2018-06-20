import { Col, Row } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { AccommoDateState } from "../../state";
import { CandidatesStack } from "./CandidatesStack";
import { MatchesList, MatchesListProps } from "./MatchesList";

export interface MatchingCockpitProps {
  matchesList: MatchesListProps;
}

export const MatchingCockpitComponent = (props: MatchingCockpitProps) => (
  <Row>
    <Col span={8}>
      <MatchesList {...props.matchesList} />
    </Col>
    <Col span={16}>
      <CandidatesStack />
    </Col>
  </Row>
);

const mapStateToProps = (state: AccommoDateState) : MatchingCockpitProps => ({
  matchesList: { matches: state.matches },
});

export const MatchingCockpit = connect(mapStateToProps)(MatchingCockpitComponent);
