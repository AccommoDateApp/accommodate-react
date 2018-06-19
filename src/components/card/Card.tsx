import { Col, Divider, Icon, Row } from "antd";
import { Carousel } from "antd";
import * as React from "react";
import {ApartmentType, Card, UserRole} from "../../state/profile";
import {BioData} from "./BioData";

import "./Card.scss";

export const CardComponent = (props: Card) => {
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
              <BioData bio={props.bio} editMode={props.editMode} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider style={{margin: "20px 0"}} orientation="left">{props.role === UserRole.Tenant ? "Preferences" : "Real States"}</Divider>
      <Row>
        <Col span={12}>
          <h3>Looking for:</h3>
          <div className="looking-for">
            <table>
              <tbody>
                <tr><td>WG</td><td><Icon style={{ fontSize: 20, color: "#339a5c" }} type={props.specs.searchingFor === ApartmentType.WG ? "check-circle" : ""} /></td></tr>
                <tr><td>Apartment</td><td><Icon style={{ fontSize: 20, color: "#339a5c" }} type={props.specs.searchingFor === ApartmentType.Apartment ? "check-circle" : ""} /></td></tr>
                <tr><td>House</td><td><Icon style={{ fontSize: 20, color: "#339a5c" }} type={props.specs.searchingFor === ApartmentType.House ? "check-circle" : ""} /></td></tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col span={10} offset={2}>
          <div className="preferences">
            <table>
              <tbody>
                <tr><td>Budget</td><td>{props.specs.budget} Euros</td></tr>
                <tr><td>Length of lease</td><td>{props.specs.leaseLength} Months</td></tr>
                <tr><td>Onsite parking</td><td><Icon type={props.specs.onsiteParking ? "check-circle" : "close-circle"} style={props.specs.onsiteParking ? { fontSize: 20, color: "#339a5c" } : { fontSize: 20, color: "#b73939" }} /></td></tr>
                <tr><td>Onsite Storage</td><td><Icon type={props.specs.onsiteStorage ? "check-circle" : "close-circle"} style={props.specs.onsiteStorage ? { fontSize: 20, color: "#339a5c" } : { fontSize: 20, color: "#b73939" }} /></td></tr>
                <tr><td>Pet Friendly</td><td><Icon type={props.specs.petFriendly ? "check-circle" : "close-circle"} style={props.specs.petFriendly ? { fontSize: 20, color: "#339a5c" } : { fontSize: 20, color: "#b73939" }} /></td></tr>
                <tr><td>Smoke Friendly</td><td><Icon type={props.specs.smokeFriendly ? "check-circle" : "close-circle"} style={props.specs.smokeFriendly ? { fontSize: 20, color: "#339a5c" } : { fontSize: 20, color: "#b73939" }} /></td></tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
    );
};
