import "./NavLinks.css";

function NavLinks({ link, text }) {
  return (
    <li className="navlink-li">
      <a href={link}>{text}</a>
    </li>
  );
}

export default NavLinks;
