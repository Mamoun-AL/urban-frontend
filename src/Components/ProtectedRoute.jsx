import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from './UserContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, ready } = useUser();
  const location = useLocation();

  if (!ready) {
    return <div></div>;
  }

  return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
