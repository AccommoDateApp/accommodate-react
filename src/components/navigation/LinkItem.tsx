import { Menu } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";

const { Item } = Menu;

export interface LinkItemProps extends React.Props<any> {
  to: string;
}

export const LinkItem = (props: LinkItemProps) => (
  <Item {...props}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </Item>
);
