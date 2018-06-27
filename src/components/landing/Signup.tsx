import { Alert, Button, Col, Form, Icon, Input, Radio, Row } from "antd";
import autobind from "autobind-decorator";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { signup } from "../../actions/signupActions";
import { AccommoDateState } from "../../state";
import { UserMode } from "../../state/bio";
import { SignupForm } from "../../state/signup";
import "./Signup.scss";

const userIcon = (
  <Icon type="user" />
);
const passwordIcon = (
  <Icon type="lock" />
);

interface SignupProps {
  form: SignupForm;

  signup: typeof signup;
}

interface SignupState {
  name: string;
  email: string;
  password: string;
  mode: UserMode;
}

class SignupComponent extends React.Component<SignupProps, SignupState> {
  constructor(props: SignupProps) {
    super(props);

    this.state = {
      email: "",
      mode: UserMode.Tenant,
      name: "",
      password: "",
    };
  }

  public render() {
    return (
      <>
        <h1>Sign up, it's free!</h1>

        {this.renderErrorMessage()}

        <Form layout="vertical" className="signup-form" onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            <Input
              prefix={userIcon}
              onChange={this.updateName}
              value={this.state.name}
              placeholder="Your name"
            />
          </Form.Item>
          <Form.Item label="Email address">
            <Input
              prefix={"@"}
              onChange={this.updateEmail}
              value={this.state.email}
              placeholder="you@example.com"
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              type="password"
              prefix={passwordIcon}
              onChange={this.updatePassword}
              value={this.state.password}
              placeholder="*******"
            />
          </Form.Item>
          <Row>
            <Col span={14}>
              <Form.Item>
                <label className="inline-label">Account type:</label>
                <Radio.Group onChange={this.updateMode} value={this.state.mode}>
                  <Radio value={UserMode.Tenant}>Tenant</Radio>
                  <Radio value={UserMode.Landlord}>Landlord</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item className="fluid">
                <Button htmlType="submit" type="primary" className="fluid">Create my account</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </>
    );
  }

  private renderErrorMessage() {
    if (this.props.form.success === false) {
      return (
        <>
          <Alert type="error" showIcon={true} message="Error signing you up." />
          <br />
        </>
      );
    }

    return null;
  }

  @autobind
  private updateName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: event.target.value,
    });
  }

  @autobind
  private updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: event.target.value,
    });
  }

  @autobind
  private updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: event.target.value,
    });
  }

  @autobind
  private updateMode(event: any) {
    this.setState({
      mode: event.target.value,
    });
  }

  @autobind
  private handleSubmit(event: React.FormEvent<any>) {
    const { email, password, name, mode } = this.state;

    this.props.signup(email, password, name, mode);

    event.preventDefault();
    event.stopPropagation();

    return false;
  }
}

const mapStateToProps = (state: AccommoDateState) => ({
  form: state.signup,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    signup,
  }, dispatch);
};

export const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
