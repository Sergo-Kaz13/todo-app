import { NavLink } from "react-router-dom";

import style from "./Menu.module.css";

const Menu = ({ isAuthenticated, setIsAuthenticated }) => {
  const linkActive = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "",
    fontWeight: isActive ? "bold" : "",
  });

  const handleClickLockOut = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <nav className={style.menuBlock}>
      <ul>
        <li>
          <NavLink style={linkActive} to="/">
            Home
          </NavLink>
        </li>
        {!isAuthenticated ? (
          <li>
            <NavLink style={linkActive} to="/authentication">
              User
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink style={linkActive} to="/todos">
                Todos
              </NavLink>
            </li>
            <li>
              <NavLink style={linkActive} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <button onClick={handleClickLockOut} className={style.btnLockOut}>
                Lock out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
