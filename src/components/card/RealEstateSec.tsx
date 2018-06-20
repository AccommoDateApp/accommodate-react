import { Col, Row } from "antd";
import * as React from "react";
import {RealEstateType} from "../../state/profile";

interface RealEstateProps {
  realEstate: RealEstateType[];
}

export function RealEstateComponent(props: RealEstateProps) : JSX.Element {
  return (
    <Row>
      <Col>{props.realEstate[0].address}</Col>
    </Row>
  );
}
