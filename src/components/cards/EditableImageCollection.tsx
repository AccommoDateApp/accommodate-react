import { Carousel } from "antd";
import * as React from "react";
import { DeletableImage } from "./DeletableImage";
import { ImageUpload } from "./ImageUpload";

interface EditableImageCollectionProps {
  editable: boolean;
  images: string[];
  onChange: (imags: string[]) => void;
  onUpload: (image: File) => void;
}

export const EditableImageCollection = (props: EditableImageCollectionProps) => {
  const images = props.images.map((image, index) => {
    const deletable = props.images.length > 1;
    const deleteThisImage = () => {
      if (!props.onChange) {
        return;
      }

      const imagesWithoutThisImage = props.images.filter(((img) => img !== image));

      props.onChange(imagesWithoutThisImage);
    };

    return (
      <DeletableImage
        deletable={deletable}
        editable={props.editable}
        src={image}
        onDelete={deleteThisImage}
        key={index}
      />
    );
  });

  if (props.editable) {
    const imageUploader = (
      <ImageUpload
        onChange={props.onUpload}
        key="uploader"
      />
    );

    images.push(imageUploader);
  }

  return (
    <Carousel dots={true}>
      {images}
    </Carousel>
  );
};
