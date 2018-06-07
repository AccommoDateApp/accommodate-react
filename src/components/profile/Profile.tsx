import { Col, Row } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { setUserMode } from "../../actions/profileActions";
import { IProfile } from "../../reducers/profileReducer";
import { RootState } from "../../state";
import { Card } from "../card/Card";

interface StateProps {
  profile: IProfile;
}

interface DispatchProps {
  setUserMode: (userMode: string) => any;
}

interface Props extends StateProps, DispatchProps, RouteComponentProps<any> {}

class Profile extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <Row>
        <Col>
          <Card />
          {this.props.profile.mode}
        </Col>
      </Row>
    );
  }
}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
