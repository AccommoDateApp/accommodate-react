import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { App } from "../app";
import { Card } from "../card/Card";

export const AppRoutes = () => {
 return (
   <div>
   <h1>Nav Header</h1>
   <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/profile" component={Card} />
    </Switch>
   </BrowserRouter>
   </div>
 );
};
