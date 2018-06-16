import * as React from "react";
import { TenantProfile } from "../components/create-profile/tenant-profile/TenantProfile";
import { MatchingCockpit } from "./matching/MatchingCockpit";

export const AppComponent = () => (
  <div>
    <h1>AccommoDate</h1>
    <MatchingCockpit matches={[]} />
    <TenantProfile />
  </div>
);

export const App = AppComponent;
