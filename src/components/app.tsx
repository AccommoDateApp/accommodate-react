import * as React from "react";
import { TenantProfile } from "../components/create-profile/tenant-profile/TenantProfile";
import { LandlordProfile } from "./create-profile/landlord-profile/LandlordProfile";
import { MatchingCockpit } from "./matching/MatchingCockpit";

export const AppComponent = () => (
  <div>
    <h1>AccommoDate</h1>
    <MatchingCockpit matches={[]} />
    <TenantProfile />
    <p>Landlord profile</p>
    <LandlordProfile />
  </div>
);

export const App = AppComponent;
