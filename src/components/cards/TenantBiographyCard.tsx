import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadProfileImage } from "../../actions/imagesAction";
import { Gender, TenantBio } from "../../state/biography";
import { CarouselCard } from "./CarouselCard";
import { Choice, EditableChoice } from "./EditableChoice";
import { EditableImageCollection } from "./EditableImageCollection";
import { EditableText } from "./EditableText";
import "./TenantBiographyCard.scss";

export interface BiographyUpdatedEvent extends Partial<TenantBio> {
  [field: string]: any;
}

export const genderChoices: Array<Choice<Gender>> = [
  {
    text: "Female",
    value: Gender.Female,
  },
  {
    text: "Male",
    value: Gender.Male,
  },
  {
    text: "Other",
    value: Gender.NoAnswer,
  },
];

interface TenantBiographyCardProps {
  biography: TenantBio;
  editable?: boolean;
  onChange?: (event: BiographyUpdatedEvent) => void;

  uploadProfileImage: typeof uploadProfileImage;
}

const TenantBiographyCardComponent = (props: TenantBiographyCardProps) => {
  const editable = !!props.editable;
  const { biography } = props;

  const createOnChangeEvent = (field: string) => {
    return (value: any) => {
      if (!props.onChange) {
        return;
      }

      props.onChange({
        [field]: value,
      });
    };
  };

  const images = (
    <EditableImageCollection
      editable={editable}
      images={biography.images}
      onChange={createOnChangeEvent("images")}
      onUpload={props.uploadProfileImage}
    />
  );

  const editableName = (
    <EditableText
      editable={editable}
      value={biography.name}
      onChange={createOnChangeEvent("name")}
    />
  );

  return (
    <CarouselCard carousel={images} heading={editableName}>
      <div className={`biography ${editable ? "editing" : ""}`}>
        <EditableText
          editable={editable}
          value={biography.description}
          textarea={true}
          onChange={createOnChangeEvent("description")}
        />

        <br />

        <h4>Gender</h4>
        <EditableChoice
          editable={editable}
          choices={genderChoices}
          choice={biography.gender}
          onChange={createOnChangeEvent("gender")}
        />

        <br />

        <h4>Age</h4>
        <EditableText
          editable={editable}
          value={biography.age.toString()}
          onChange={createOnChangeEvent("age")}
        />

        <br />

        <h4>Languages</h4>
        <EditableText
          editable={editable}
          value={biography.language}
          onChange={createOnChangeEvent("language")}
        />

        <br />

        <h4>Education</h4>
        <EditableText
          editable={editable}
          value={biography.education}
          onChange={createOnChangeEvent("education")}
        />
      </div>
    </CarouselCard>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    uploadProfileImage,
  }, dispatch);
};

export const TenantBiographyCard = connect(null, mapDispatchToProps)(TenantBiographyCardComponent);
