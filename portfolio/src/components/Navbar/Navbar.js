import "./Navbar.css";
import NavLinks from "./NavLinks/NavLinks.js";
import NavIcons from "./NavIcons/NavIcons.js";

function Navbar() {
  return (
    <nav>
      <ul className="navbar-left-container">
        <NavLinks link="/" text="HOME" className="homeLink"></NavLinks>
        <NavLinks link="/projects" text="PROJECTS" className="projectLink" />
        <NavLinks link="/about" text="ABOUT" className="aboutLink" />
      </ul>
      <ul className="navbar-right-container">
        <NavIcons
          link="https://github.com/AlphaPentagon"
          className="fa-brands fa-github"
        />
        <NavIcons
          link="https://twitter.com/cragglesummers"
          className="fa-brands fa-twitter"
        />
        <NavIcons
          link="https://www.linkedin.com/in/craig-summers89/"
          className="fa-brands fa-linkedin"
        />
      </ul>
    </nav>
  );
}

export default Navbar;
