import { Button } from "antd";
import * as React from "react";
import "./DeletableImage.scss";

interface DeletableImageProps {
  editable: boolean;
  deletable: boolean;
  src: string;
  onDelete: () => void;
}

export const DeletableImage = (props: DeletableImageProps) => {
  const style = {
    backgroundImage: `url(${props.src})`,
  };

  let controls = null;

  if (props.editable) {
    let deleteButton = null;

    if (props.deletable) {
      deleteButton = (
        <Button icon="delete" type="danger" ghost={true} onClick={() => props.onDelete()}>Delete</Button>
      );
    }

    controls = (
      <div className="controls">
        <Button icon="download" type="primary" ghost={true} href={props.src} target="_blank">Download</Button>
        &nbsp;
        {deleteButton}
      </div>
    );
  }

  return (
    <div className="deletable-image" style={style}>
      {controls}
    </div>
  );
};
