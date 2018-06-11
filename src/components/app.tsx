import * as React from "react";
import { MatchingCockpit } from "./matching/MatchingCockpit";

export const AppComponent = () => (
  <div>
    <h1>AccommoDate</h1>
    <MatchingCockpit matches={[]} />
  </div>
);

export const App = AppComponent;
