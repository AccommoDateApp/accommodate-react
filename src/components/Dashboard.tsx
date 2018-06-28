import { Icon, Menu } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { logout } from "../actions/loginActions";
import { Container } from "./Container";
import { MatchingCockpit } from "./matching/MatchingCockpit";
import { LinkItem } from "./navigation/LinkItem";
import { Navbar } from "./navigation/Navbar";
import { RoutedMenu } from "./navigation/RoutedMenu";
import { EditProfile } from "./profile/EditProfile";
import { Store } from "./store/Store";

const profileMenuTitle = (
  <span>
    <Icon type="user" />
    Profile
  </span>
);

interface DashboardComponentProps extends RouteComponentProps<any> {
  logout: typeof logout;
}

export const DashboardComponent = (props: DashboardComponentProps) => {
  return (
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
          <Menu.SubMenu title={profileMenuTitle}>
            <LinkItem to="/profile">
              <Icon type="solution" />
              Edit Profile
            </LinkItem>
            <Menu.Item onClick={() => props.logout(props.history)}>
              <Icon type="logout" />
              Logout
            </Menu.Item>
          </Menu.SubMenu>
        </RoutedMenu>
      </Navbar>

      <Container>
        <Switch>
          <Route exact={true} path="/" component={MatchingCockpit} />
          <Route exact={true} path="/powerups" component={Store} />
          <Route exact={true} path="/profile" component={EditProfile} />
        </Switch>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    logout,
  }, dispatch);
};

export const Dashboard = withRouter(connect(null, mapDispatchToProps)(DashboardComponent));
