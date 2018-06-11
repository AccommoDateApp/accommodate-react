import { Col, Row } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Action } from "../../actions";
import { setUserMode } from "../../actions/profileActions";
import { RootState } from "../../state";
import { Card } from "../card/Card";
import { ProfileState, UserMode } from "./ProfileTypes";

interface StateProps {
  profile: ProfileState;
}

interface DispatchProps {
  setUserMode: (userMode: UserMode) => Action<UserMode>;
}

interface Props extends StateProps, DispatchProps, RouteComponentProps<any> {}

// class Profile extends React.Component<Props> {

//   constructor(props: Props) {
//     super(props);
//   }

//   public render() {
//     return (
//       <Row>
//         <Col>
//           <Card />
//           {this.props.profile.mode}
//         </Col>
//       </Row>
//     );
//   }
// }

const ProfileComponent = (props: Props) => {
  return (
    <Row>
      <Col>
        <Card />
        {props.profile.mode}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state: RootState) => {
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