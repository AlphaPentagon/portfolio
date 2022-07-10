import "./NavIcons.css";

function NavIcons({ link, className }) {
  return (
    <li className="navicon-li">
      <a href={link} target="_blank" rel="noreferrer">
        <i className={className} />
      </a>
    </li>
  );
}

export default NavIcons;
