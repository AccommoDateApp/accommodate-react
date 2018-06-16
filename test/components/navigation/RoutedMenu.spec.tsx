import { Menu } from "antd";
import { shallow } from "enzyme";
import * as React from "react";
import { RoutedMenuComponent } from "../../../src/components/navigation/RoutedMenu";

describe("RoutedMenuComponent", () => {
  it("renders an antd menu", () => {
    const props: any = {
      location: {
        pathname: "",
      },
    };

    const dom = (
      <RoutedMenuComponent {...props} />
    );

    const rendered = shallow(dom);

    expect(rendered.containsMatchingElement(<Menu />)).toBeTruthy();
  });
});
