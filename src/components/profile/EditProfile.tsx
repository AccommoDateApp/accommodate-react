import { Alert } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBiography } from "../../actions/biographyActions";
import { AccommoDateState, Fetchable } from "../../state";
import { Biography, LandlordBio, TenantBio, UserMode } from "../../state/biography";
import { Editor } from "../../state/editor";
import { Spinner } from "../loading/Spinner";
import { EditLandlordProfile } from "./EditLandlordProfile";
import { EditTenantProfile } from "./EditTenantProfile";

interface EditProfileProps {
  biography: Fetchable<Biography>;
  editor: Editor;
  fetchBiography: typeof fetchBiography;
}

class EditProfileComponent extends React.PureComponent<EditProfileProps> {
  public componentWillMount() {
    this.props.fetchBiography();
  }

  public render() {
    const { biography, editor } = this.props;

    if (biography.isFetching && !editor.editing) {
      return (
        <Spinner />
      );
    }

    if (biography.error) {
      const message = `Error getting your biography: ${biography.error}`;

      return (
        <Alert type="error" showIcon={true} message={message} />
      );
    }

    if (!biography.value) {
      return (
        <div />
      );
    }

    if (biography.value.mode === UserMode.Tenant) {
      return (
        <EditTenantProfile biography={biography.value as TenantBio} />
      );
    }

    return (
      <EditLandlordProfile biography={biography.value as LandlordBio} />
    );
  }
}

const mapStateToProps = (state: AccommoDateState) => ({
  biography: state.biography,
  editor: state.editor,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchBiography,
  }, dispatch);
};

export const EditProfile = connect(mapStateToProps, mapDispatchToProps)(EditProfileComponent);
