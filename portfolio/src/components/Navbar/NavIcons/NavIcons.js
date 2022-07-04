import "./NavIcons.css";

function NavIcons({ link, className }) {
  return (
    <li className="navicon-li">
      <a href={link}>
        <i className={className}/>
      </a>
    </li>
  );
}

export default NavIcons;
