import React from 'react';
import { Navigate } from 'react-router-dom';

const Session = (Component) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;  // Replace current route with login route
    }

    return <Component {...props} />;
  };
};

export default Session;