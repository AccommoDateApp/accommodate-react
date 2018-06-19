import { Col, Row } from "antd";
import * as React from "react";
import {RealstateType} from "../../state/profile";

interface RealStateProps {
  realState: RealstateType[];
}

export function RealStateComponent(props: RealStateProps) : JSX.Element {
  return (
    <Row>
      <Col>{props.realState[0].address}</Col>
    </Row>
  );
}
