import { NavLink } from "react-router-dom";

import style from "./Menu.module.css";

const Menu = () => {
  const linkActive = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "",
    fontWeight: isActive ? "bold" : "",
  });

  return (
    <nav className={style.menuBlock}>
      <ul>
        <li>
          <NavLink style={linkActive} to="/">
            Home
          </NavLink>
        </li>
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
      </ul>
    </nav>
  );
};

export default Menu;
