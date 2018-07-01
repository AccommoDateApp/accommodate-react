import { Button, Col, Row, Tabs } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addRealEstate, updateBiography } from "../../actions/biographyActions";
import { startEditing } from "../../actions/editorActions";
import { AccommoDateState } from "../../state";
import { LandlordBiography, RealEstate } from "../../state/biography";
import { EditableChoice } from "../cards/EditableChoice";
import { EditablePreferenceCollection } from "../cards/EditablePreferenceCollection";
import { EditableText } from "../cards/EditableText";
import { RealEstateCard } from "../cards/RealEstateCard";
import { genderChoices } from "../cards/TenantBiographyCard";
import { SavedMessage } from "./SavedMessage";

interface EditLandlordProfileProps {
  biography: LandlordBiography;

  saved: boolean;
  saving: boolean;
  startEditing: typeof startEditing;
  updateBiography: typeof updateBiography;
  addRealEstate: typeof addRealEstate;
}

class EditLandlordProfileComponent extends React.PureComponent<EditLandlordProfileProps> {
  public componentWillMount() {
    this.props.startEditing();
  }

  public render() {
    const { biography } = this.props;

    return (
      <>
        <Row gutter={48}>
          <Col span={6}>
            <Row>
              <Col span={10}>
                <h2>Edit Profile</h2>
              </Col>
              <Col>
                <SavedMessage show={this.props.saved} />
              </Col>
            </Row>

            <h4>Name</h4>
            <EditableText
              editable={true}
              value={biography.name}
              onChange={(name) => this.props.updateBiography({ name })}
            />

            <h4>Description</h4>
            <EditableText
              editable={true}
              textarea={true}
              value={biography.description}
              onChange={(description) => this.props.updateBiography({ description })}
            />

            <h4>Phone Number</h4>
            <EditableText
              editable={true}
              value={biography.phoneNumber}
              onChange={(phoneNumber) => this.props.updateBiography({ phoneNumber })}
            />

            <h4>Gender</h4>
            <EditableChoice
              editable={true}
              choice={biography.gender}
              choices={genderChoices}
              onChange={(gender) => this.props.updateBiography({ gender })}
            />
          </Col>
          <Col span={18}>
            <h2>Real Estates</h2>

            {this.renderRealEstates()}
          </Col>
        </Row>
      </>
    );
  }

  private renderRealEstates() {
    const updateRealEstate = (updatedRealEstate: RealEstate, changeset: any) => {
      const updatedRealEstates = this.props.biography.realEstates.map((realEstate) => {
        if (realEstate.id === updatedRealEstate.id) {
          return {
            ...realEstate,
            ...changeset,
          };
        }

        return realEstate;
      });

      this.props.updateBiography({
        realEstates: updatedRealEstates,
      } as any);
    };

    const realEstates = this.props.biography.realEstates.map((realEstate, index) => (
      <Tabs.TabPane tab={realEstate.name} key={index}>
        <Row>
          <Col span={16} push={1}>
            <RealEstateCard
              editable={true}
              realEstate={realEstate}
              onChange={(changeset) => updateRealEstate(realEstate, changeset)}
            />
          </Col>
          <Col span={4} push={3}>
            <h3>Preferences</h3>
            <EditablePreferenceCollection
              elementsPerLine={1}
              preferences={realEstate.preferences}
              onChange={(preferences) => updateRealEstate(realEstate, { preferences })}
            />
          </Col>
        </Row>
      </Tabs.TabPane>
    ));

    return (
      <Tabs tabBarExtraContent={this.renderAddRealEstateButton()}>
        {realEstates}
      </Tabs>
    );
  }

  private renderAddRealEstateButton() {
    return (
      <Button
        icon="plus"
        type="primary"
        loading={this.props.saving}
        onClick={this.props.addRealEstate}
      >
        New
      </Button>
    );
  }
}

const mapStateToProps = (state: AccommoDateState) => ({
  saved: state.editor.value,
  saving: !!state.editor.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    addRealEstate,
    startEditing,
    updateBiography,
  }, dispatch);
};

export const EditLandlordProfile = connect(mapStateToProps, mapDispatchToProps)(EditLandlordProfileComponent);
