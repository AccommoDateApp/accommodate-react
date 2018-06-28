import { Col, Row, Switch } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Action } from "../../actions";
import { setEditMode, setUserMode } from "../../actions/profileActions";
import { AccommoDateState } from "../../state";
import { ProfileProps, UserRole } from "../../state/profile";
import { CardComponent } from "../card/Card";
import { WrappedEditCardComponent } from "../editCard/EditCard";

interface StateProps {
  profile: ProfileProps;
}

interface DispatchProps {
  setUserMode: (userMode: UserRole) => Action<UserRole>;
  setEditMode: (editMode: boolean) => Action<boolean>;
}

interface Props extends StateProps, DispatchProps, RouteComponentProps<any> {}

class ProfileComponent extends React.Component<Props> {

  public render() {
    return (
      <Row type="flex" justify="center" style={{marginLeft: "auto", marginRight: "auto"}}>
        <Col span={18}>
        <Row type="flex" justify="end" gutter={32}>
          <Col>
            <h3>Edit Card</h3>
          </Col>
          <Col>
            <Switch defaultChecked={false} onChange={this.onEditChange} />
          </Col>
        </Row>
          {this.props.profile.editMode ? <WrappedEditCardComponent {...this.props.profile} /> : <CardComponent {...this.props.profile} />}
        </Col>
      </Row>
    );
  }

  private onEditChange = (checked: boolean) => {
    this.props.setEditMode(checked);
  }
}

const mapStateToProps = (state: AccommoDateState) => {
  state = state;

  return {
    profile: {} as any,
  };
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators ({
    setEditMode,
    setUserMode,
  }, dispatch);
}

export const Profile = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileComponent));
