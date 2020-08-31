import React from 'react';

import { Route, Redirect } from 'react-router';

// import { Container } from './styles';

const PrivateRoute = (props) => {
  const isLogged = localStorage.getItem('app-token');
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
