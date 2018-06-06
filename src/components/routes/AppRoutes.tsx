import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { App } from "../app";
import { Profile } from "../profile/Profile";

export const AppRoutes = () => {
 return (
   <div>
   <h1>Nav Header</h1>
   <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/profile" component={Profile} />
    </Switch>
   </BrowserRouter>
   </div>
 );
};
