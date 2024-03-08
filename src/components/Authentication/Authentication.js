import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

const Authentication = ({
  toggleAuthentication,
  setToggleAuthentication,
  setIsAuthenticated,
}) => {
  return (
    <div>
      {!toggleAuthentication ? (
        <LoginPage
          setToggleAuthentication={setToggleAuthentication}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        <RegistrationPage
          setToggleAuthentication={setToggleAuthentication}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
    </div>
  );
};

export default Authentication;
