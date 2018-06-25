import { Icon, Spin } from "antd";
import * as React from "react";
import "./Spinner.scss";

const icon = (
  <Icon type="loading" style={{ fontSize: 50 }} spin={true} />
);

export const Spinner = () => (
  <div className="spinner">
    <Spin indicator={icon} />
  </div>
);
