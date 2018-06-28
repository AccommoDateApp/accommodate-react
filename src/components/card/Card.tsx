import { Col, Divider, Row } from "antd";
import { Carousel } from "antd";
import * as React from "react";
import { Card, UserRole } from "../../state/profile";
import { BioData } from "./BioData";
import { PreferenceComponent } from "./PreferenceSec";
import { RealEstateComponent } from "./RealEstateSec";

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
                    {props.pictures.map((imgurl, index) => <div key={index}><img className="profile-image" src={imgurl} /></div>)}
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
                  <BioData bio={props.bio} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider style={{margin: "20px 0"}} orientation="left">{props.userRole === UserRole.Tenant ? "Preferences" : "Real States"}</Divider>
          {props.userRole === UserRole.Tenant ? <PreferenceComponent specs={props.specs} /> : <RealEstateComponent realEstate={props.realEstate} />}
        </div>
      </Col>
    </Row>
    );
};
