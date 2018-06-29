import { Button, Col, Row } from "antd";
import autobind from "autobind-decorator";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { updateBiography } from "../../actions/biographyActions";
import { finishEditing, startEditing } from "../../actions/editorActions";
import { AccommoDateState } from "../../state";
import { TenantBio } from "../../state/biography";
import { EditablePreferenceCollection } from "../cards/EditablePreferenceCollection";
import { BiographyUpdatedEvent, TenantBiographyCard } from "../cards/TenantBiographyCard";
import { SavedMessage } from "./SavedMessage";

interface EditTenantProfileProps {
  biography: TenantBio;
  updateBiography: typeof updateBiography;

  editing: boolean;
  isSaving: boolean;
  saved?: boolean;
  error?: string;
  startEditing: typeof startEditing;
  finishEditing: typeof finishEditing;
}

class EditTenantProfileComponent extends React.PureComponent<EditTenantProfileProps> {
  public render() {
    return (
      <>
        <Row>
          <Col span={10}>
            <Row>
              <Col span={6}>
                <h2>Your profile</h2>
              </Col>
              <Col span={6}>
                {this.renderEditProfileButton()}
              </Col>
              <Col>
                <SavedMessage show={this.props.saved} />
              </Col>
            </Row>

            <p>This is what your profile looks like, when landlords are matching with you.</p>
            <p>Here are some tips to stand out of the crowd:</p>
            <ul>
              <li>be honest</li>
              <li>don't stick to the standards, i.e. don't "I like cooking"</li>
              <li>upload pictures of you doing awesome things</li>
            </ul>
          </Col>
          <Col span={12} push={2}>
            <TenantBiographyCard biography={this.props.biography} editable={this.props.editing} onChange={this.updateBiography} />
          </Col>
        </Row>

        <br />

        <h2>Your preferences</h2>
        <EditablePreferenceCollection
          elementsPerLine={4}
          preferences={this.props.biography.preferences}
          onChange={(preferences) => this.updateBiography({ preferences })}
        />
        <br />
      </>
    );
  }

  private renderEditProfileButton() {
    if (this.props.editing) {
      return (
        <Button icon="check-circle-o" type="primary" onClick={this.props.finishEditing} loading={this.props.isSaving}>
          Done
        </Button>
      );
    }

    return (
      <Button icon="edit" onClick={this.props.startEditing}>
        Edit
      </Button>
    );
  }

  @autobind
  private updateBiography(event: BiographyUpdatedEvent) {
    this.props.updateBiography(event);
  }
}

const mapStateToProps = (state: AccommoDateState) => ({
  editing: state.editor.editing,

  error: state.editor.error,
  isSaving: state.editor.isFetching,
  saved: state.editor.value,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    updateBiography,

    finishEditing,
    startEditing,
  }, dispatch);
};

export const EditTenantProfile = connect(mapStateToProps, mapDispatchToProps)(EditTenantProfileComponent);
