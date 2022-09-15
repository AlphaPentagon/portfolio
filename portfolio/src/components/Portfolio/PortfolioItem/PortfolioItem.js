import { useState } from "react";
import parse from "html-react-parser";
import "./PortfolioItem.css";

export const PortfolioItem = ({
  heading,
  text,
  links,
  more,
  description,
  img_url,
  alt_text,
}) => {
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

      <img className="portfolio-item-img" src={img_url} alt={alt_text} />

      <div className="portfolio-item-text">
        <p>{description}</p>
        <p>{text}</p>
      </div>

      <div
        className={`portfolio-item-more ${
          clicked
            ? "portfolio-item-text-full-click"
            : "portfolio-item-text-full"
        } `}
      >
        {clicked ? (
          <div className="more-container fade-in">
            <div className="more-text">{parse(more)}</div>
            <div className="close-button" onClick={handleClick}>
              <p>&#8744;</p>
            </div>
          </div>
        ) : (
          <div className="fade-out" onClick={handleClick}>
            <p className="fade-out">&#8743;</p>
          </div>
        )}
      </div>
    </div>
  );
};
