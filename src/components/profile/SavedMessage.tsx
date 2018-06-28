import { Icon } from "antd";
import * as React from "react";
import "./SavedMessage.scss";

interface SavedMessageProps {
  show?: boolean;
}

export const SavedMessage = ({ show }: SavedMessageProps) => (
  <p className={`saved-message ${show ? "show" : ""}`}>
    <span className="icon">
      <Icon type="check-circle-o" />
    </span>

    Saved
  </p>
);
