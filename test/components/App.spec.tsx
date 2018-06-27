import { shallow } from "enzyme";
import * as React from "react";
import { AppComponent } from "../../src/components/App";
import { Dashboard } from "../../src/components/Dashboard";
import { Landing } from "../../src/components/landing/Landing";
import { defaultFetchableState, Fetchable } from "../../src/state";

describe("AppComponent", () => {
  const routeProps = {
    history: null,
    location: null,
    match: null,
    staticContext: null,
  };

  it("displays the landing page if the user is not logged in", () => {
    const login: Fetchable<boolean> = {
      ...defaultFetchableState,
      value: false,
    };

    const rendered = shallow(<AppComponent {...routeProps} login={login} />);

    expect(rendered.contains(<Landing />)).toBeTruthy();
  });

  it("displays the dashboard if the user is logged in", () => {
    const login: Fetchable<boolean> = {
      ...defaultFetchableState,
      value: true,
    };

    const rendered = shallow(<AppComponent {...routeProps} login={login} />);

    expect(rendered.contains(<Dashboard />)).toBeTruthy();
  });
});
