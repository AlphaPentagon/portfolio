import "./Portfolio.css";

export function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Projects</h2>
      <div className="portfolio-container">
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 1</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, similique eaque eum ducimus dicta voluptas ut
              voluptatem excepturi aliquid sint molestias debitis sequi dolorem,
              nobis reiciendis sit doloribus eveniet optio.
            </p>
          </div>
        </div>
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 2</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, similique eaque eum ducimus dicta voluptas ut
              voluptatem excepturi aliquid sint molestias debitis sequi dolorem,
              nobis reiciendis sit doloribus eveniet optio.
            </p>
          </div>
        </div>
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 3</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, similique eaque eum ducimus dicta voluptas ut
              voluptatem excepturi aliquid sint molestias debitis sequi dolorem,
              nobis reiciendis sit doloribus eveniet optio.
            </p>
          </div>
        </div>
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 4</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, similique eaque eum ducimus dicta voluptas ut
              voluptatem excepturi aliquid sint molestias debitis sequi dolorem,
              nobis reiciendis sit doloribus eveniet optio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
