import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
