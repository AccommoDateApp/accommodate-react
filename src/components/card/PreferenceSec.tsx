import { Col, Icon, Row } from "antd";
import * as React from "react";
import {ApartmentType, TenantSpecs} from "../../state/profile";

interface PreferenceSecProps {
  specs: TenantSpecs;
}

export function PreferenceComponent(props: PreferenceSecProps) : JSX.Element {
  const checkIconStyle = { fontSize: 20, color: "#339a5c" };
  const crossIconStyle = { fontSize: 20, color: "#b73939" };
  return (
    <Row>
        <Col span={12}>
          <h3>Looking for:</h3>
          <div className="looking-for">
            <table>
              <tbody>
                <tr>
                  <td>WG</td>
                  <td>
                    <Icon style={checkIconStyle} type={props.specs.searchingFor === ApartmentType.WG ? "check-circle" : ""} />
                  </td>
                </tr>
                <tr>
                  <td>Apartment</td>
                  <td>
                    <Icon style={checkIconStyle} type={props.specs.searchingFor === ApartmentType.Apartment ? "check-circle" : ""} />
                  </td>
                </tr>
                <tr>
                  <td>House</td>
                  <td>
                    <Icon style={checkIconStyle} type={props.specs.searchingFor === ApartmentType.House ? "check-circle" : ""} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col span={10} offset={2}>
          <div className="preferences">
            <table>
              <tbody>
                <tr>
                  <td>Budget</td>
                  <td>{props.specs.budget} Euros</td>
                </tr>
                <tr>
                  <td>Length of lease</td>
                  <td>{props.specs.leaseLength} Months</td>
                </tr>
                <tr>
                  <td>Onsite parking</td>
                  <td>
                    <Icon type={props.specs.onsiteParking ? "check-circle" : "close-circle"} style={props.specs.onsiteParking ? checkIconStyle : crossIconStyle} />
                  </td>
                </tr>
                <tr>
                  <td>Onsite Storage</td>
                  <td>
                    <Icon type={props.specs.onsiteStorage ? "check-circle" : "close-circle"} style={props.specs.onsiteStorage ? checkIconStyle : crossIconStyle} />
                  </td>
                </tr>
                <tr>
                  <td>Pet Friendly</td>
                  <td>
                    <Icon type={props.specs.petFriendly ? "check-circle" : "close-circle"} style={props.specs.petFriendly ? checkIconStyle : crossIconStyle} />
                  </td>
                </tr>
                <tr>
                  <td>Smoke Friendly</td>
                  <td>
                    <Icon type={props.specs.smokeFriendly ? "check-circle" : "close-circle"} style={props.specs.smokeFriendly ? checkIconStyle : crossIconStyle} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
  );
}
