import { Col, Row } from "antd";
import * as React from "react";

class Card extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Row>
                <Col>
                <h3>this is a card</h3>
                </Col>
            </Row>
        );
    }
}

export { Card };
