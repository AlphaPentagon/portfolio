import "./AboutMe.css";

export function AboutMe() {
  return (
    <section className="aboutMeSection">
      <div className="aboutMeContainer" id="top">
        <div className="image-container">
          <img src="images\Craig2.jfif" alt="#" />
        </div>
        <article className="intro-article-container">
          <h2>Hi, I'm Craig</h2>
          <p>
            I'm a junior software developer with a passion for problem solving
            and an enthusiasm for continuous learning.
          </p>
        </article>
      </div>
      <div className="aboutMe-button-container">
        <a href="#my-story" className="aboutMe-button">
          My Story
        </a>
        <a href="#experience" className="aboutMe-button">
          Experience
        </a>
        <a href="#interests" className="aboutMe-button">
          Interests
        </a>
      </div>
      <article className="additional-article-container" id="my-story">
        <h3>My Story</h3>
        <p className="article-first-para">
          I was an IT Support Technician for 7 years, but grew tired of telling
          people to "turn it off and on".
        </p>
        <p>
          I had a desire to learn more about tech and challenge myself, so I
          started teaching myself web development in the evenings using free
          resouces on the internet.
        </p>
        <p>
          This sparked a passion and I knew it was something I wanted to move
          into as a career. Knowing that I would benefit from some structured
          learning, I discovered the School of Code free bootcamp and applied.
        </p>
        <p>
          In March 2022 I left my job, moved 4 hours across country with my wife
          and daughter to be nearer to family and started my new journey.
        </p>
        <p>
          Now after 16 weeks of intensive and accelerated learning, I have
          gained strong technical skills across a variety of full stack
          technology, as well as invaluable experience of working within diverse
          agile software engineering teams, and I am excited to put it all into
          practise in my first junior role.
        </p>
      </article>
      <article className="additional-article-container" id="experience">
        <h3>Experience</h3>
        <p className="article-first-para">
          I have just graduated from the School of Code bootcamp. After 16 weeks
          of intensive & accelerated learning, I have gained strong technical
          skills across a variety of full stack technology, as well as
          invaluable experience of working within diverse agile software
          engineering teams, and I am excited to put it all into practise in my
          first junior role.
        </p>
        <p>Something about working in teams/pairs...</p>
        <p>Something about working in IT Support...</p>
        <div className="skills-grid">
          <div className="skill-container">
            <i className="fa-brands fa-html5"></i>
            <p className="skill-name">HTML 5</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-css3-alt"></i>
            <p className="skill-name">CSS 3</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-square-js"></i>
            <p className="skill-name">Javascript</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-react"></i>
            <p className="skill-name">React</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-node-js"></i>
            <p className="skill-name">Node.js/Express</p>
          </div>
          <div className="skill-container">
            <img
              className="skill-icon"
              alt=""
              src="/icons/postgresql.svg"
            ></img>
            <p className="skill-name">PostgreSQL</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-git-alt"></i>
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-github"></i>
            <p className="skill-name">Github</p>
          </div>
          <div className="skill-container">
            <img className="skill-icon" alt="" src="/icons/nextjs.svg"></img>
            <p className="skill-name">Next.js</p>
          </div>
          <div className="skill-container">
            <img className="skill-icon" alt="" src="/icons/jest.svg"></img>
            <p className="skill-name">Jest</p>
          </div>
          <div className="skill-container">
            <img className="skill-icon" alt="" src="/icons/cypress.svg"></img>
            <p className="skill-name">Cypress</p>
          </div>
          <div className="skill-container">
            <img className="skill-icon" alt="" src="/icons/heroku.svg"></img>
            <p className="skill-name">Heroku</p>
          </div>
          <div className="skill-container">
            <img className="skill-icon" alt="" src="/icons/netlify.svg"></img>
            <p className="skill-name">Netlify</p>
          </div>
        </div>
      </article>

      <article className="additional-article-container" id="interests">
        <h3>Interests</h3>
        <p className="article-first-para">
          When I'm not being a climbing frame for my young daughter, I enjoy:
          writing, recording and playing music, starting (but rarely finishing)
          videogames, losing to my wife at cards and spending time with friends
          and family.
        </p>
        <p>
          I also enjoy attending gigs and music festivals and I am passionate
          about wellbeing and mental health.
        </p>
      </article>
      <p className="top-link">
        Back to <a href="#top">top</a>
      </p>
    </section>
  );
}
