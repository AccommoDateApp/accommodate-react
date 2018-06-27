import { Col, Divider, Form, Input, Row } from "antd";
import { Carousel } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import { Card, UserRole } from "../../state/profile";
import { RealEstateComponent } from "../card/RealEstateSec";
import { EditBioData } from "./EditBioData";
import "./EditCard.scss";
import { EditPreferenceComponent } from "./EditPreferenceSec";

const FormItem = Form.Item;
const { TextArea } = Input;

interface FormProps extends Card, FormComponentProps {}

const EditCardComponent = (props: FormProps) => {
  const {getFieldDecorator} = props.form;
  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        <div className="card">
          <Form>
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
                    <FormItem>
                      {getFieldDecorator("description")(<TextArea placeholder="Description" />)}
                    </FormItem>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Left column Bio Data */}
              <Col span={10} offset={2}>
                <Row>
                  <Col>
                    <EditBioData bio={props.bio} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider style={{margin: "20px 0"}} orientation="left">{props.userRole === UserRole.Tenant ? "Preferences" : "Real States"}</Divider>
            {props.userRole === UserRole.Tenant ? <EditPreferenceComponent specs={props.specs} /> : <RealEstateComponent realEstate={props.realEstate} />}
          </Form>
        </div>
      </Col>
    </Row>
    );
};

export const WrappedEditCardComponent = Form.create()(EditCardComponent);
