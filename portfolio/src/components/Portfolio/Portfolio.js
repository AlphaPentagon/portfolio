import "./Portfolio.css";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";
import { portfolioItems } from "../../libs/portfolioItems";

export function Portfolio() {
  return (
    <div className="portfolio-sections-container">
      {/* <div className="portfolio-intro-container">
        <p>Here you'll find some of my bigger projects.</p>
      </div> */}
      <section className="portfolio-section">
        <h2 className="portfolio-title">Projects</h2>
        <div className="portfolio-container">
          {portfolioItems.map((item) => {
            return (
              <PortfolioItem
                heading={item.heading}
                description={item.description}
                text={item.text}
                links={item.links}
                more={item.more}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
