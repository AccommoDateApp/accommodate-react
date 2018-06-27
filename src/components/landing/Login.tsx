import { Alert, Button, Form, Icon, Input } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { login, resetLogin } from "../../actions/loginActions";
import { AccommoDateState } from "../../state";
import "./Login.scss";

interface LoginProps {
  login: typeof login;
  resetLogin: typeof resetLogin;

  isLoggingIn: boolean;
  loginError?: string;
}

const userIcon = (
  <Icon type="user" />
);

const passwordIcon = (
  <Icon type="lock" />
);

const LoginComponent = (props: LoginProps) => {
  if (props.loginError !== undefined) {
    const message = `Error logging you in: ${props.loginError}.`;

    return (
      <>
        <Alert
          className="login-alert"
          type="error"
          showIcon={true}
          message={message}
          closable={true}
          onClose={() => props.resetLogin()}
        />
      </>
    );
  } else {
    let email: string = "";
    let password: string = "";

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => email = event.target.value;
    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => password = event.target.value;

    const formSubmit = (event: React.FormEvent<any>) => {
      props.login(email, password);

      event.preventDefault();
      event.stopPropagation();

      return false;
    };

    return (
      <Form layout="inline" onSubmit={formSubmit}>
        <Form.Item>
          <Input prefix={userIcon} placeholder="you@example.com" onChange={handleEmailInput} />
        </Form.Item>
        <Form.Item>
          <Input prefix={passwordIcon} type="password" placeholder="************" onChange={handlePasswordInput} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={props.isLoggingIn}>Login</Button>
        </Form.Item>
      </Form>
    );
  }
};

const mapStateToProps = (state: AccommoDateState) => ({
  isLoggingIn: state.login.isFetching,
  loginError: state.login.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    login,
    resetLogin,
  }, dispatch);
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
