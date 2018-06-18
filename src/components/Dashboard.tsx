import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { MatchingCockpit } from "./matching/MatchingCockpit";
import { Profile } from "./profile/Profile";

export const DashboardComponent = () => (
  <div>
    <Switch>
      <Route exact={true} path="/" component={MatchingCockpit} />
      <Route exact={true} path="/profile" component={Profile} />
    </Switch>
  </div>
);

export const Dashboard = withRouter(DashboardComponent);
