import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { App } from '../app'
import { Card } from '../card'

export const AppRoutes = () => {  
 return (
   <div>
   <h1>Nav Header</h1>
   <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/profile' component={Card}/>
    </Switch>
   </BrowserRouter>
   </div>
 )
}