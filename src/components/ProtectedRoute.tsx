import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/r0B01t26" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
