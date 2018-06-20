import { Col, Icon, Row, Steps } from "antd";
import * as React from "react";
import { Container } from "../Container";
import { Navbar } from "../navigation/Navbar";
import { Login } from "./Login";
import { Signup } from "./Signup";

const { Step } = Steps;

const userIcon = (
  <Icon type="user" />
);
const bioIcon = (
  <Icon type="solution" />
);
const matchIcon = (
  <Icon type="heart-o" />
);

const steps = [
  {
    description: (
      <>
        <p>Sign up using your email and a secure password using the form on the right.</p>
        <br />
      </>
    ),
    icon: userIcon,
    title: "Create your account",
  },
  {
    description: (
      <>
        <p>By providing us with your accommodation preferences, we'll improve your experience.</p>
        <br />
      </>
    ),
    icon: bioIcon,
    title: "Edit your bio",
  },
  {
    description: (
      <>
        <p>Match with housing that's really relevant to you.</p>
        <br />
      </>
    ),
    icon: matchIcon,
    title: "Fall in love with your next home",
  },
].map((step, index) => (
  <Step key={index} status="finished" {...step} />
));

export const Landing = () => (
  <>
    <Navbar>
      <Login />
    </Navbar>
    <Container>
      <Row gutter={48}>
        <Col span={8}>
          <h1>How it works</h1>
          <br />
          <p>AccommoDate helps you get the most out of your accommodation hunt using three simple steps:</p>
          <br />
          <Steps direction="vertical">
            {steps}
          </Steps>
        </Col>
        <Col span={12} push={3}>
          <Signup />
        </Col>
      </Row>
    </Container>
  </>
);
