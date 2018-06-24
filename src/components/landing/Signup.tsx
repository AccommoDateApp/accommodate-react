import { Alert, Button, Form, Icon, Input } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeEmail, changeName, changePassword, signup } from "../../actions/signupActions";
import { AccommoDateState } from "../../state";
import { SignupForm } from "../../state/signup";

const userIcon = (
  <Icon type="user" />
);
const passwordIcon = (
  <Icon type="lock" />
);

interface SignupProps {
  form: SignupForm;

  signup: typeof signup;

  changeEmail: typeof changeEmail;
  changeName: typeof changeName;
  changePassword: typeof changePassword;
}

const SignupComponent = (props: SignupProps) => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => props.changeEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => props.changePassword(event.target.value);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => props.changeName(event.target.value);

  const handleSubmit = (event: React.FormEvent<any>) => {
    const { email, password, name } = props.form;

    props.signup(email, password, name);

    event.preventDefault();
    event.stopPropagation();

    return false;
  };

  let error = null;

  if (props.form.success === false) {
    error = (
      <>
        <Alert type="error" showIcon={true} message="Error signing you up." />
        <br />
      </>
    );
  }

  return (
    <>
      <h1>Sign up, it's free!</h1>

      {error}

      <Form layout="vertical" onSubmit={handleSubmit}>
        <Form.Item label="Name">
          <Input prefix={userIcon} onChange={handleNameChange} placeholder="Your name" />
        </Form.Item>
        <Form.Item label="Email address">
          <Input prefix={"@"} onChange={handleEmailChange} placeholder="you@example.com" />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" prefix={passwordIcon} onChange={handlePasswordChange} placeholder="*******" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">Create my account</Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = (state: AccommoDateState) => ({
  form: state.signup,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    signup,

    changeEmail,
    changeName,
    changePassword,
  }, dispatch);
};

export const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);