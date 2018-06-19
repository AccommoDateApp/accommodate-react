import { Col, Divider, Row } from "antd";
import { Carousel } from "antd";
import * as React from "react";
import { Card, UserRole} from "../../state/profile";
import {BioData} from "./BioData";
import {PreferenceComponent} from "./PreferenceSec";
import {RealStateComponent} from "./RealStateSec";

import "./Card.scss";

export const CardComponent = (props: Card) => {
  return (
    <Row type="flex" justify="center">
      <Col span={24}>
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
                  <BioData bio={props.bio} editMode={props.editMode} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider style={{margin: "20px 0"}} orientation="left">{props.role === UserRole.Tenant ? "Preferences" : "Real States"}</Divider>
          {props.role === UserRole.Tenant ? <PreferenceComponent specs={props.specs} /> : <RealStateComponent realState={props.realState} />}
        </div>
      </Col>
    </Row>
    );
};
