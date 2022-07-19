import "./PortfolioItem.css";

export const PortfolioItem = ({ heading, text, links, more, description }) => {
  const handleClick = (more) => {};

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
        className="portfolio-item-more portfolio-item-text-full"
        onClick={() => {
          handleClick(more);
        }}
      >
        more
      </button>
    </div>
  );
};
