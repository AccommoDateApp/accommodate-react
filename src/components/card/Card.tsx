import { Col, Row } from "antd";
import React = require("react");

export const Card = (props: any) => (
  <Row>
    <Col>
      <h3>this is a card {props.name}</h3>
    </Col>
  </Row>
);
