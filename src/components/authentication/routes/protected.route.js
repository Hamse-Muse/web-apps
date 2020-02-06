import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} render={props => {}} />
    </div>
  );
};

export default ProtectedRoute;
