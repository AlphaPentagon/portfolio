import "./Navbar.css";
import NavLinks from "./NavLinks/NavLinks.js";
import NavIcons from "./NavIcons/NavIcons.js";

function Navbar() {
  return (
    <nav>
      <ul className="navbar-left-container">
        <NavLinks link="#" text="HOME" />
        <NavLinks link="#" text="PROJECTS" />
        <NavLinks link="#" text="ABOUT" />
      </ul>
      <ul className="navbar-right-container">
        <NavIcons link="#" className="fa-brands fa-github" />
        <NavIcons link="#" className="fa-brands fa-twitter" />
        <NavIcons link="#" className="fa-brands fa-linkedin" />
      </ul>
    </nav>
  );
}

export default Navbar;
