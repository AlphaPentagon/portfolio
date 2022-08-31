import "./FooterText.css";
import NavIcons from "../Navbar/NavIcons/NavIcons";

function FooterText({ text }) {
  return (
    <div className="footerTextContainer">
      <p>&#169; Craig Summers 2022</p>
      <ul>
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
    </div>
  );
}

export default FooterText;
