import "../components/App/App.css";
import Navbar from "../components/Navbar/Navbar";
import FooterText from "../components/FooterText/FooterText";
import { Outlet } from "react-router-dom";

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
