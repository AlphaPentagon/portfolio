import { useState } from "react";
import "./PortfolioItem.css";

export const PortfolioItem = ({ heading, text, links, more, description }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="portfolio-item-container">
      <div className="portfolio-item-title-container">
        <h3 className="portfolio-item-heading">{heading}</h3>
        <ul>
          {links.map((link) => {
            return (
              <>
                <li className="portfolio-item-link">
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.text}
                  </a>
                </li>
                <li>/</li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="portfolio-item-img" />
      <div className="portfolio-item-text">
        <p>{description}</p>
        <p>{text}</p>
      </div>

      <button
        className={`portfolio-item-more ${
          clicked
            ? "portfolio-item-text-full-click"
            : "portfolio-item-text-full"
        } `}
        onClick={handleClick}
      >
        {clicked ? (
          <>
            {more}
            <button onClick={handleClick}>close</button>
          </>
        ) : (
          "more"
        )}
      </button>
    </div>
  );
};
