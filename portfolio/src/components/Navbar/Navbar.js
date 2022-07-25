import "./Navbar.css";
import NavLinks from "./NavLinks/NavLinks.js";

function Navbar({ changePage }) {
  return (
    <nav>
      <img className="nav-logo" src="images/logo.png" alt="logo" />
      <ul className="navbar-left-container">
        <NavLinks link="/" text="HOME" changePage={changePage}></NavLinks>
        <NavLinks link="/about" text="ABOUT" changePage={changePage} />
        <NavLinks link="/projects" text="PROJECTS" changePage={changePage} />
      </ul>
    </nav>
  );
}

export default Navbar;
