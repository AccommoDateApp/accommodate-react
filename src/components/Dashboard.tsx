import { Icon } from "antd";
import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Container } from "./Container";
import { MatchingCockpit } from "./matching/MatchingCockpit";
import { LinkItem } from "./navigation/LinkItem";
import { Navbar } from "./navigation/Navbar";
import { RoutedMenu } from "./navigation/RoutedMenu";
import { Profile } from "./profile/Profile";
import { Store } from "./store/Store";

export const DashboardComponent = () => (
  <div>
    <Navbar>
      <RoutedMenu>
        <LinkItem to="/">
          <Icon type="compass" />
          Explore
        </LinkItem>
        <LinkItem to="/powerups">
          <Icon type="rocket" />
          PowerUps
        </LinkItem>
      </RoutedMenu>
    </Navbar>

    <Container>
      <Switch>
        <Route exact={true} path="/" component={MatchingCockpit} />
        <Route exact={true} path="/powerups" component={Store} />
        <Route exact={true} path="/profile" component={Profile} />
      </Switch>
    </Container>
  </div>
);

export const Dashboard = withRouter(DashboardComponent);
