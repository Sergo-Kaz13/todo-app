import useForm from "../../useForm";
import { registrationNewUser } from "../../api";

import style from "./RegistrationPage.module.css";

const RegistrationPage = ({ setIsAuthenticated, setToggleAuthentication }) => {
  const { values, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      password: "",
    },
    registrationNewUser,
    setIsAuthenticated
  );

  const handleClickToggle = () => {
    setToggleAuthentication((prev) => !prev);
  };

  return (
    <div className={style.blockForm}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="user name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <button onClick={handleClickToggle} className={style.btnSignUp}>
        Sing in
      </button>
    </div>
  );
};

export default RegistrationPage;
