import { Button, Col, Row } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { AccommoDateState } from "../../state";
import { UserMatches } from "../../state/match";
import { CardComponent} from "../card/Card";

const CandidatesStackComponent = (props: UserMatches) => (
  <Row>
    <Col>
      <h1>Candidates Stack</h1>
      <CardComponent {...props.potentialMatches[0]} />
      {matchingButtons}
    </Col>
  </Row>
);

const matchingButtons = (
  <Row type="flex" justify="center">
    <Col>
      <Button size="large" type="primary">Yes!</Button>
    </Col>
    <Col>
      <Button size="large" type="danger">Nay!</Button>
    </Col>
  </Row>
);

const mapStateToProps = (state: AccommoDateState) : UserMatches => state.userMatches;

export const CandidatesStack = connect(mapStateToProps)(CandidatesStackComponent);
