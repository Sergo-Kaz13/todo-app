import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyIsAuthenticated } from "../../context/MyIsAuthenticated";

const AnonymousRoute = ({ children }) => {
  const { isAuthenticated } = useContext(MyIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/todos" />;
  }
  return children;
};

export default AnonymousRoute;
