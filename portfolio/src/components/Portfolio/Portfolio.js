import "./Portfolio.css";

export function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Projects</h2>
      <div className="portfolio-container">
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <img
            src="images/koala_code.PNG"
            alt="#"
            className="portfolio-item-img-hover"
          />
          <div class="portfolio-item-link-container">
            <div class="portfolio-item-link-text">
              <ul>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Demo</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 1</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident,
            </p>
          </div>
        </div>
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <img
            src="images/koala_code.PNG"
            alt="#"
            className="portfolio-item-img-hover"
          />
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 2</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident,
            </p>
          </div>
          <div class="portfolio-item-link-container">
            <div class="portfolio-item-link-text">Github</div>
          </div>
        </div>
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <img
            src="images/koala_code.PNG"
            alt="#"
            className="portfolio-item-img-hover"
          />
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 3</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident,
            </p>
          </div>
          <div class="portfolio-item-link-container">
            <div class="portfolio-item-link-text">Github</div>
          </div>
        </div>
        <div className="portfolio-item-container">
          <img src="images/koala.PNG" alt="#" className="portfolio-item-img" />
          <img
            src="images/koala_code.PNG"
            alt="#"
            className="portfolio-item-img-hover"
          />
          <div className="portfolio-item-text-container">
            <h3 className="portfolio-item-heading">Item 4</h3>
            <p className="portfolio-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident,
            </p>
          </div>
          <div class="portfolio-item-link-container">
            <div class="portfolio-item-link-text">Github</div>
          </div>
        </div>
      </div>
    </section>
  );
}
