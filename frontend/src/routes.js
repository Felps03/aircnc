import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import New from './containers/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/new' component={New} />
      </Switch>
    </BrowserRouter>
  );
}
