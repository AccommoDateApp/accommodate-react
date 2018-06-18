import { Col, Divider, Row, Table } from "antd";
import { Carousel } from "antd";
import React = require("react");
import {Card, UserRole} from "../../state/profile";

import "./Card.scss";

export const CardComponent = (props: Card) => {
  const dataSource = props.bio;
  const title = () => <b>Personal Data:</b>;
  const columns = [{
    className: "table-col",
    dataIndex: "label",
    key: "label",
  }, {
    className: "table-col",
    dataIndex: "value",
    key: "value",
  }];
  return (
    <div className="card">
        <Row>
          {/* Right Column */}
          <Col span={12}>
            <Row>
              {/* Image */}
              <Col>
                <Carousel dots={true}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </Col>
            </Row>
            <Row className="description">
              {/* profile description */}
              <Col>
                <div>
                <b>Description:</b>
                </div>
                <div>
                {props.description}
                </div>
              </Col>
            </Row>
          </Col>
          {/* Left column Bio Data */}
          <Col span={10} offset={2}>
            <Row>
              <Col>
                <Table size="small" pagination={false} showHeader={false} title={title} dataSource={dataSource} columns={columns} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider orientation="left">{props.role === UserRole.Tenant ? "Specifications" : "Real States"}</Divider>
      </div>
    );
};
