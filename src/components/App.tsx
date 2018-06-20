import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { AccommoDateState } from "../state";
import { User } from "../state/user";
import { Dashboard } from "./Dashboard";
import { Landing } from "./landing/Landing";

interface AppProps extends RouteComponentProps<any> {
  user: User;
}

export const AppComponent = (props: AppProps) => {
  if (props.user.isLoggedIn) {
    return (
      <Dashboard />
    );
  }

  return (
    <Landing />
  );
};

const mapStateToProps = (state: AccommoDateState) => ({
  user: state.user,
});

export const App = withRouter(connect(mapStateToProps)(AppComponent));
