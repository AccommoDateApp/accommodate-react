import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { MatchingCockpit } from "./matching/MatchingCockpit";

export const DashboardComponent = () => (
  <div>
    <Switch>
      <Route exact={true} path="/" component={MatchingCockpit} />
    </Switch>
  </div>
);

export const Dashboard = withRouter(DashboardComponent);
