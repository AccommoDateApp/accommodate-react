import { Col, Row } from "antd";
import * as React from "react";
import { CandidatesStack } from "./CandidatesStack";
import { MatchesList } from "./MatchesList";

export const MatchingCockpit = () => (
  <Row>
    <Col span={8}>
      <MatchesList />
    </Col>
    <Col span={16}>
      <CandidatesStack />
    </Col>
  </Row>
);
