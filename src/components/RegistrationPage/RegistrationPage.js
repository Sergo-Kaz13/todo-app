import { Link } from "react-router-dom";

import useForm from "../../useForm";
import { registrationNewUser } from "../../api";

const RegistrationPage = ({ setIsAuthenticated }) => {
  const { values, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      password: "",
    },
    registrationNewUser,
    setIsAuthenticated
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="user name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <button type="submit">Register</button>
      </form>

      <Link to="/login" replace>
        Sing in
      </Link>
    </div>
  );
};

export default RegistrationPage;
