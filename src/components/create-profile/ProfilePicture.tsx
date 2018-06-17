import { Icon, message, Upload } from "antd";
import { UploadChangeParam } from "antd/lib/upload/interface";
import * as React from "react";
import { Url } from "url";

function getBase64(img: File, callback: any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: File) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

export class ProfilePicture extends React.Component {
  public state = {
    imageUrl: "",
    loading: false,
  };
  public handleChange = (info: UploadChangeParam) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj!, (imageUrl: Url) => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  public render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="profilePicture"
        listType="picture-card"
        className="profilePicture-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="profilePicture" /> : uploadButton}
      </Upload>
    );
  }
}
