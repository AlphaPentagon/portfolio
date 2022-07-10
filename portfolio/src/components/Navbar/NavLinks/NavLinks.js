import "./NavLinks.css";
import { NavLink } from "react-router-dom";

function NavLinks({ link, text, changePage }) {
  return (
    <li className="navlink-li">
      <NavLink
        to={link}
        onClick={() => {
          changePage(link);
        }}
        className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default NavLinks;
