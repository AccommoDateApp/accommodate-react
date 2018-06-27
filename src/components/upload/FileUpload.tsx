import { Button, Icon, Upload } from "antd";
import * as React from "react";

interface FileUploadProps {
  onChange: (file: File) => void;
}

export const FileUpload = (props: FileUploadProps) => {
  const uploadProps = {
    beforeUpload: (file: File) => {
      if (props.onChange) {
        props.onChange(file);
      }

      return false;
    },
    fileList: [],
  };

  return (
    <Upload {...uploadProps}>
      <Button>
        <Icon type="upload" /> Select File
      </Button>
    </Upload>
  );
};
