import "../components/App/App.css";

import Navbar from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";

export function Layout() {
  // const initialFooterTextState = (
  //   <>
  //     <p>
  //       <strong>I'm a Full Stack Developer</strong> who is passionate about
  //       clear design, readable code and accessibility for all. This is my
  //       website where you can find out more about myself and the projects that I
  //       have created.
  //     </p>
  //   </>
  // );
  // const [footerText, setFooterText] = useState(initialFooterTextState);

  // const changePage = (pageClicked) => {
  //   console.log(pageClicked);

  //   switch (pageClicked) {
  //     default:
  //       const homeFooterText = (
  //         <p>
  //           <strong>I'm a Full Stack Developer</strong> who is passionate about
  //           clear design, readable code and accessibility for all. This is my
  //           website where you can find out more about myself and the projects
  //           that I have created.
  //         </p>
  //       );
  //       setFooterText(homeFooterText);
  //       break;
  //     case "/about":
  //       const aboutFooterText = (
  //         <p>
  //           <q>
  //             Craig is blah blah blah, blah blah blah blah blah, blah blah blah
  //           </q>
  //           <em>- A Happy Customer</em>
  //         </p>
  //       );
  //       setFooterText(aboutFooterText);
  //       break;
  //     case "/projects":
  //       const projectFooterText = (
  //         <p>
  //           <strong>These are the projects I am most proud of.</strong> You can
  //           click on each one to head to it’s Github repo, or hover over it to
  //           find out more information.
  //         </p>
  //       );
  //       setFooterText(projectFooterText);
  //       break;
  //   }
  // };

  return (
    <>
      <Navbar className="navbar-container" />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
