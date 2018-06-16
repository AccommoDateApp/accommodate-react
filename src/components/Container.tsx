import { Col, Row } from "antd";
import * as React from "react";

export const Container = (props: React.Props<any>) => (
  <Row>
    <Col span={20} push={2}>
      {props.children}
    </Col>
  </Row>
);
