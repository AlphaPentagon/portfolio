import "../components/App/App.css";

import Navbar from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import FooterText from "../components/FooterText/FooterText";

export function Layout() {
  return (
    <>
      <Navbar className="navbar-container" />
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterText />
      </footer>
    </>
  );
}
