import { Col, Row } from "antd";
import * as React from "react";
import { CandidatesStack } from "./CandidatesStack";
import { MatchProps } from "./Match";
import { MatchesList } from "./MatchesList";

interface MatchingCockpitProps {
  matches: MatchProps[];
}

export const MatchingCockpit = (props: MatchingCockpitProps) => (
  <Row>
    <Col span={8}>
      <MatchesList matches={props.matches} />
    </Col>
    <Col span={16}>
      <CandidatesStack />
    </Col>
  </Row>
);
