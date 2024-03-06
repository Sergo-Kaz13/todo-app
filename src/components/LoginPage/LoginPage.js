import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";

const LoginPage = () => {
  const { data, isLoading, error } = useFetch("http://localhost:3030/users");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formLogin = event.currentTarget;

    const formLoginData = new FormData(formLogin);
    const formLoginValues = Object.fromEntries(formLoginData.entries());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" name="email" placeholder="login" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit">Sing in</button>
      </form>

      <div>
        <Link to="/registration" replace>
          Registration
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
