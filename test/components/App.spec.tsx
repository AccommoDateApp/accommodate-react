import { shallow } from "enzyme";
import * as React from "react";
import { AppComponent } from "../../src/components/App";
import { Dashboard } from "../../src/components/Dashboard";
import { Landing } from "../../src/components/landing/Landing";
import { User } from "../../src/state/user";

describe("AppComponent", () => {
  const routeProps = {
    history: null,
    location: null,
    match: null,
    staticContext: null,
  };

  it("displays the landing page if the user is not logged in", () => {
    const user: User = {
      isLoggedIn: false,
      isLoggingIn: false,
    };

    const rendered = shallow(<AppComponent {...routeProps} user={user} />);

    expect(rendered.contains(<Landing />)).toBeTruthy();
  });

  it("displays the dashboard if the user is logged in", () => {
    const user: User = {
      isLoggedIn: true,
      isLoggingIn: false,
    };

    const rendered = shallow(<AppComponent {...routeProps} user={user} />);

    expect(rendered.contains(<Dashboard />)).toBeTruthy();
  });
});
