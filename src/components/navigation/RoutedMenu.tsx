import { Menu } from "antd";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { LinkItem, LinkItemProps } from "./LinkItem";

type RoutedMenuProps = React.Props<any> & RouteComponentProps<any>;

/**
 * Hack to set the `key` prop for all `LinkItem` children, so we can auto-select
 * the active route in the menu by just specifying the `to` prop.
 */
const patchKeyPropForLinkItemChildren = (children: React.ReactNode) => {
  if (children && Array.isArray(children)) {
    return children.map((child: React.ReactElement<LinkItemProps> | any) => {
      if (child && child.type && child.type === LinkItem && !child.key) {
        return {
          ...child,
          key: child.props.to,
        };
      }

      return child;
    });
  }

  return children;
};

const RoutedMenuComponent = (props: RoutedMenuProps) => {
  const children = patchKeyPropForLinkItemChildren(props.children);

  return (
    <Menu mode="horizontal" selectedKeys={[props.location.pathname]}>
      {children}
    </Menu>
  );
};

export const RoutedMenu = withRouter(RoutedMenuComponent);
