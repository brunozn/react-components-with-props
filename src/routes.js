import React from 'react';
import { Router, Switch, Route } from 'react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Registration';
import NotFound from './pages/NotFound';

import history from './App/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
