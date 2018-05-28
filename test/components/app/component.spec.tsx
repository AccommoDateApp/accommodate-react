import { shallow } from "enzyme";
import * as React from "react";
import { AppComponent } from "../../../src/components/app";

describe("HomeComponent", () => {
  it("renders the component", () => {
    const rendered = shallow(<AppComponent />);

    expect(rendered.find("h1").length).toBe(1);
  });
});
