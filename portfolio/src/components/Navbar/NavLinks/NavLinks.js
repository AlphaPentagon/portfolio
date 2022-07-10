import "./NavLinks.css";
import { Link } from "react-router-dom";

function NavLinks({ link, text, className }) {
  return (
    <li className="navlink-li">
      <Link to={link} className={className}>
        {text}
      </Link>
    </li>
  );
}

export default NavLinks;
