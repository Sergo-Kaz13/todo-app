import React from "react";
import { Navigate } from "react-router-dom";

const AnonymousRoute = ({ children, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/todos" />;
  }
  return children;
};

export default AnonymousRoute;
