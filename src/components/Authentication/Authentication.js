import React, { useContext } from "react";
import { MyIsAuthenticated } from "../../context/MyIsAuthenticated";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

const Authentication = () => {
  const { setIsAuthenticated, toggleAuthentication, setToggleAuthentication } =
    useContext(MyIsAuthenticated);

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
