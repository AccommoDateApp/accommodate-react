import { Col, Row } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { AccommoDateState } from "../../state";
import { CandidatesStack } from "./CandidatesStack";
import { MatchProps } from "./Match";
import { MatchesList } from "./MatchesList";

export interface MatchingCockpitProps {
  matches: MatchProps[];
}

export const MatchingCockpitComponent = (props: MatchingCockpitProps) => (
  <Row>
    <Col span={8}>
      <MatchesList matches={props.matches} />
    </Col>
    <Col span={16}>
      <CandidatesStack />
    </Col>
  </Row>
);

const mapStateToProps = (state: AccommoDateState) => ({
  matches: state.matches,
});
export const MatchingCockpit = connect(mapStateToProps)(MatchingCockpitComponent);
