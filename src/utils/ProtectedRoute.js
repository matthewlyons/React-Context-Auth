import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { StoreContext } from '../context/store';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { state } = useContext(StoreContext);
  const { isAuthenticated } = state;
  return (
    <Route
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
      {...rest}
    />
  );
}
