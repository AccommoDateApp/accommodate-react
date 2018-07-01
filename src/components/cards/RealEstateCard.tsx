import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { uploadRealEstateImage } from "../../actions/imagesAction";
import { RealEstate, RealEstateType } from "../../state/biography";
import { CarouselCard } from "./CarouselCard";
import { Choice, EditableChoice } from "./EditableChoice";
import { EditableImageCollection } from "./EditableImageCollection";
import { EditableText } from "./EditableText";

export const realEstateChoices: Array<Choice<RealEstateType>> = [
  {
    text: "WG",
    value: RealEstateType.WG,
  },
  {
    text: "Apartment",
    value: RealEstateType.Apartment,
  },
  {
    text: "House",
    value: RealEstateType.House,
  },
];

interface RealEstateCardProps {
  realEstate: RealEstate;

  editable?: boolean;
  onChange?: (updatedRealEstate: any) => void;
  uploadRealEstateImage: typeof uploadRealEstateImage;
}

const RealEstateCardComponent = (props: RealEstateCardProps) => {
  const editable = !!props.editable;
  const { realEstate } = props;

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
      images={realEstate.images}
      onChange={createOnChangeEvent("images")}
      onUpload={(image: File) => props.uploadRealEstateImage(realEstate.id, image)}
    />
  );

  const name = (
    <EditableText
      editable={editable}
      value={realEstate.name}
      onChange={createOnChangeEvent("name")}
    />
  );

  return (
    <CarouselCard carousel={images} heading={name}>
      <EditableText
        editable={editable}
        value={realEstate.description}
        textarea={true}
        onChange={createOnChangeEvent("description")}
      />

      <h4>Rent</h4>
      <EditableText
        editable={editable}
        value={realEstate.rent.toString()}
        textarea={true}
        onChange={createOnChangeEvent("rent")}
      />

      <h4>Type</h4>
      <EditableChoice
        editable={editable}
        choice={realEstate.type}
        choices={realEstateChoices}
        onChange={createOnChangeEvent("type")}
      />
    </CarouselCard>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    uploadRealEstateImage,
  }, dispatch);
};

export const RealEstateCard = connect(null, mapDispatchToProps)(RealEstateCardComponent);
