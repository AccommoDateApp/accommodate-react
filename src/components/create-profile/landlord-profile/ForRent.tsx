import { Icon, Modal, Upload } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import * as React from "react";

export class ForRent extends React.Component {
  public state = {
    previewVisible: false,
    previewImage: "",
    propertiesList: [{
      uid: -1,
      name: "xxx.png",
      status: "done",
    }],
  };

  public handleCancel = () => this.setState({ previewVisible: false });

  public handlePreview = (file: UploadFile) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  public handleChange = (propertiesList: UploadChangeParam) => this.setState(propertiesList);

  public render() {
    const { previewVisible, previewImage, propertiesList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          // fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {propertiesList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
