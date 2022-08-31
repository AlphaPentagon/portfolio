import "./Portfolio.css";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";
import {
  groupPortfolioItems,
  soloPortfolioItems,
} from "../../libs/portfolioItems";

export function Portfolio() {
  return (
    <div className="portfolio-sections-container">
      <div className="portfolio-intro-container">
        <h1>Portfolio</h1>
        <p>
          Below you'll find some of my projects that I have either created or
          contributed to.
        </p>
        <p>
          To see more projects please visit my{" "}
          <a
            href="https://github.com/AlphaPentagon"
            target="_blank"
            rel="noreferrer"
          >
            Github page
          </a>
          .
        </p>
      </div>
      <section className="portfolio-section">
        <h2 className="portfolio-title">Team Projects</h2>
        <div className="portfolio-container">
          {groupPortfolioItems.map((item) => {
            return (
              <PortfolioItem
                heading={item.heading}
                description={item.description}
                text={item.text}
                links={item.links}
                more={item.more}
                img_url={item.img_url}
                alt_text={item.alt_text}
              />
            );
          })}
        </div>
      </section>
      <section className="portfolio-section">
        <h2 className="portfolio-title">Solo Projects</h2>
        <div className="portfolio-container">
          {soloPortfolioItems.map((item) => {
            return (
              <PortfolioItem
                heading={item.heading}
                description={item.description}
                text={item.text}
                links={item.links}
                more={item.more}
                img_url={item.img_url}
                alt_text={item.alt_text}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
