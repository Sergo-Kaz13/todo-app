import React from "react";
import { getUsers } from "../../api";
import useFetch from "../../useFetch";

import style from "./LoginPage.module.css";

const LoginPage = ({ setToggleAuthentication, setIsAuthenticated }) => {
  const { data, isLoading, error } = useFetch("http://localhost:3030/users");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formLogin = event.currentTarget;

    const formLoginData = new FormData(formLogin);
    const formLoginValues = Object.fromEntries(formLoginData.entries());

    getUsers(verifyUser, formLoginValues);
  };

  function verifyUser(users, formLoginValues) {
    users.map((user) => {
      if (
        user.email === formLoginValues.email &&
        user.password === formLoginValues.password
      ) {
        setIsAuthenticated(true);
      } else {
        alert("The user is not registered");
      }
    });
  }

  const handleClickToggle = () => {
    setToggleAuthentication((prev) => !prev);
  };

  return (
    <div className={style.blockForm}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <input type="email" name="email" placeholder="login" required />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">Sing in</button>
      </form>

      <button onClick={handleClickToggle} className={style.btnRegistration}>
        Registration
      </button>
    </div>
  );
};

export default LoginPage;
