import { Col, Row } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Action } from "../../actions";
import { setUserMode } from "../../actions/profileActions";
import { AccommoDateState } from "../../state";
import { ProfileProps, UserRole } from "../../state/profile";
import { CardComponent } from "../card/Card";

interface StateProps {
  profile: ProfileProps;
}

interface DispatchProps {
  setUserMode: (userMode: UserRole) => Action<UserRole>;
}

interface Props extends StateProps, DispatchProps, RouteComponentProps<any> {}

const ProfileComponent = (props: Props) => {
  return (
    <Row type="flex" justify="center" style={{marginLeft: "auto", marginRight: "auto"}}>
      <Col span={18}>
        <CardComponent {...props.profile} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state: AccommoDateState) => {
  return {
    profile: state.profile,
  };
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators ({
    setUserMode,
  }, dispatch);
}

export const Profile = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileComponent));
