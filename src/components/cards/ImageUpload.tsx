import * as React from "react";
import { connect } from "react-redux";
import { AccommoDateState } from "../../state";
import { FileUpload } from "../upload/FileUpload";
import "./ImageUpload.scss";

interface ImageUploadProps {
  isUploading: boolean;
  onChange: (image: File) => void;
}

const ImageUploadComponent = (props: ImageUploadProps) => (
  <div className="image-upload">
    <div className="button">
      <FileUpload onChange={props.onChange} disabled={props.isUploading} />
    </div>
  </div>
);

const mapStateToProps = (state: AccommoDateState) => ({
  isUploading: state.editor.isFetching,
});

export const ImageUpload = connect(mapStateToProps)(ImageUploadComponent);
