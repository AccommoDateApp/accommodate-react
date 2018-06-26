import { Col, Row } from "antd";
import * as React from "react";
import {BioData as BioDataState, GenderType} from "../../state/profile";

import "./BioData.scss";

interface BioDataProps {
  bio: BioDataState;
}

export function BioData(props: BioDataProps) : JSX.Element {
  return (
    <Row className="bio-data">
      <Col>
        <div className="heading">Personal Details:</div>
        <table>
          <tbody>
            <tr><td>Name</td><td>{props.bio.lastName}, {props.bio.firstName}</td></tr>
            <tr><td>Gender</td><td>{props.bio.gender === GenderType.Male ? "Male" : "Female"}</td></tr>
            <tr><td>Age</td><td>{props.bio.age} years</td></tr>
            <tr><td>Education</td><td>{props.bio.education}</td></tr>
            <tr><td>Language</td><td>{props.bio.language}</td></tr>
            <tr><td>Email</td><td>{props.bio.email}</td></tr>
            <tr><td>Phone Number</td><td>{props.bio.phoneNumber}</td></tr>
          </tbody>
        </table>

      </Col>
    </Row>
  );
}
