import "./Navbar.css";
import NavLinks from "./NavLinks/NavLinks.js";
import NavIcons from "./NavIcons/NavIcons.js";

function Navbar({ changePage }) {
  return (
    <nav>
      <ul className="navbar-left-container">
        <NavLinks link="/" text="HOME" changePage={changePage}></NavLinks>
        <NavLinks link="/projects" text="PROJECTS" changePage={changePage} />
        <NavLinks link="/about" text="ABOUT" changePage={changePage} />
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
