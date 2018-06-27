import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { AccommoDateState, Fetchable } from "../state";
import { Dashboard } from "./Dashboard";
import { Landing } from "./landing/Landing";

interface AppProps extends RouteComponentProps<any> {
  login: Fetchable<boolean>;
}

export const AppComponent = (props: AppProps) => {
  if (props.login.value) {
    return (
      <Dashboard />
    );
  }

  return (
    <Landing />
  );
};

const mapStateToProps = (state: AccommoDateState) => ({
  login: state.login,
});

export const App = withRouter(connect(mapStateToProps)(AppComponent));
