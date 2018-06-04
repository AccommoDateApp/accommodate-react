import { Col, Row } from "antd";
import * as React from "react";
import { Card } from "../card/Card";

class Profile extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Row>
        <Col>
          <Card />
        </Col>
      </Row>
    );
  }
}

export { Profile };
