import "../components/App/App.css";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterText from "../components/FooterText/FooterText";
import { Outlet } from "react-router-dom";

export function Layout() {
  const initialFooterTextState = (
    <>
      <p>
        <strong>I'm a Full Stack Developer</strong> who is passionate about
        clear design, readable code and accessibility for all. This is my
        website where you can find out more about myself and the projects that I
        have created.
      </p>
    </>
  );

  const [footerText, setFooterText] = useState(initialFooterTextState);

  const changePage = (pageClicked) => {
    console.log(pageClicked);
    switch (pageClicked) {
      default:
        const homeFooterText = (
          <>
            <p>
              <strong>I'm a Full Stack Developer</strong> who is passionate
              about clear design, readable code and accessibility for all. This
              is my website where you can find out more about myself and the
              projects that I have created.
            </p>
          </>
        );
        setFooterText(homeFooterText);
        break;
      case "/about":
        const aboutFooterText = (
          <>
            <p>
              <strong>About me</strong> footer text.
            </p>
          </>
        );
        setFooterText(aboutFooterText);
        break;
      case "/projects":
        const projectFooterText = (
          <>
            <p>
              <strong>Project</strong> footer text.
            </p>
          </>
        );
        setFooterText(projectFooterText);
        break;
    }
  };

  return (
    <>
      <Navbar className="navbar-container" changePage={changePage} />
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterText text={footerText} />
      </footer>
    </>
  );
}
