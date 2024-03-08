import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/authentication" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
