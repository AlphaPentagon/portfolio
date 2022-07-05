import "./Navbar.css";
import NavLinks from "./NavLinks/NavLinks.js";
import NavIcons from "./NavIcons/NavIcons.js";

function Navbar() {
  return (
    <nav>
      <ul className="navbar-left-container">
        <NavLinks link="#" text="HOME" className="homeLink" />
        <NavLinks link="#" text="PROJECTS" className="projectLink"/>
        <NavLinks link="#" text="ABOUT" className="aboutLink" />
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
