import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { fetchBiography } from "../actions/biographyActions";
import { AccommoDateState, Fetchable } from "../state";
import { Dashboard } from "./Dashboard";
import { Landing } from "./landing/Landing";

interface AppProps extends RouteComponentProps<any> {
  login: Fetchable<boolean>;
  fetchBiography: typeof fetchBiography;
}

export class AppComponent extends React.PureComponent<AppProps> {
  public componentWillMount() {
    if (this.props.login.value) {
      this.props.fetchBiography();
    }
  }

  public render() {
    if (this.props.login.value) {
      return (
        <Dashboard />
      );
    }

    return (
      <Landing />
    );
  }
}

const mapStateToProps = (state: AccommoDateState) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchBiography,
  }, dispatch);
};

export const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));
