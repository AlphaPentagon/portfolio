import "./AboutMe.css";
import NavIcons from "../Navbar/NavIcons/NavIcons";

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
          <p>
            Below you'll find more information about me - click on the buttons
            to jump to the relevant section, or click on my social links if you
            would like to connect.
          </p>
          <div className="social-links-container">
            <ul>
              <NavIcons
                link="https://github.com/AlphaPentagon"
                className="fa-brands fa-github aboutMe-icons"
              />
              <NavIcons
                link="https://twitter.com/cragglesummers"
                className="fa-brands fa-twitter aboutMe-icons"
              />
              <NavIcons
                link="https://www.linkedin.com/in/craig-summers89/"
                className="fa-brands fa-linkedin aboutMe-icons"
              />
            </ul>
          </div>
        </article>
      </div>

      <div className="aboutMe-button-container">
        <a href="#my-story" className="aboutMe-button">
          My Story
        </a>
        <a href="#experience" className="aboutMe-button">
          Experience & Skills
        </a>
        <a href="#interests" className="aboutMe-button">
          Interests & Hobbies
        </a>
      </div>
      <article className="additional-article-container" id="my-story">
        <h3>My Story</h3>
        <p className="article-first-para">
          I worked as an IT Support Technician in Higher Education for 7 years,
          but grew tired of telling people to "turn it off and on".
        </p>
        <p>
          I had a desire to learn more about tech and challenge myself, so I
          started teaching myself web development in the evenings using free
          resouces on the internet.
        </p>
        <p>
          This sparked a passion and I knew it was something I wanted to move
          into as a career. Realising that I would benefit from some structured
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
        <p id="top-link">
          <a href="#top">Back to top</a>
        </p>
      </article>
      <article className="additional-article-container" id="experience">
        <h3>Experience & Skills</h3>
        <p className="article-first-para">
          I have worked in tech for the last 7 years and have recently made the
          transition into software development. In August 2022 I graduated from
          the School of Code bootcamp - a 16 week, intensive coding course. I
          was chosen from over 1000 applicants and am eternally grateful for the
          opportunity to attend.
        </p>
        <p>
          Each week on the course we were put into random pairs or teams and
          tasked with learning new coding concepts and technology. Learning took
          the form of guided seminars, workshops and discussions, and at the end
          of each week we had a 'hackathon', where we cemented our knowledge and
          put it into practise by creating something in our groups - you can
          view them all{" "}
          <a
            href="https://github.com/stars/AlphaPentagon/lists/soc-weekly-hackathons"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          During the course I also took part in two extended projects - a 1 week
          project, midway through the course, and a 4 week project at the end of
          the course. Working as part of an Agile Software Engineering team, we
          were tasked with creating solutions to real life problems by creating
          fullstack apps. I'm really proud of the work I did - you can find more
          information on my <a href="/projects">projects</a> page.
        </p>
        <p>
          Additionally, I have extensive skills in 1st/2nd line IT Support, such
          as O365 administration, mobile device management, active directory,
          sccm and general support for Windows, Mac and Linux.
        </p>

        <h4>Skills</h4>
        <div className="skills-grid">
          <div className="skill-container">
            <i className="fa-brands fa-html5 skill-icon"></i>
            <p className="skill-name">HTML 5</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-css3-alt skill-icon"></i>
            <p className="skill-name">CSS 3</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-square-js skill-icon"></i>
            <p className="skill-name">Javascript</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-react skill-icon"></i>
            <p className="skill-name">React</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-node-js skill-icon"></i>
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
            <i className="fa-brands fa-git-alt fa-4x skill-icon"></i>
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-container">
            <i className="fa-brands fa-github skill-icon"></i>
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
        <p id="top-link">
          <a href="#top">Back to top</a>
        </p>
      </article>

      <article className="additional-article-container" id="interests">
        <h3>Interests & Hobbies</h3>
        <p className="article-first-para">
          When I'm not being a climbing frame for my young daughter, I enjoy:
          writing, recording and playing{" "}
          <a
            href="https://soundcloud.com/craig-summers"
            target="_blank"
            rel="noreferrer"
          >
            music
          </a>
          , starting (but rarely finishing){" "}
          <a
            href="https://steamcommunity.com/id/alphapentagon"
            target="_blank"
            rel="noreferrer"
          >
            videogames
          </a>
          , losing to my wife at cards and spending time with friends and
          family.
        </p>
        <p>
          I also enjoy attending gigs and music festivals and I am passionate
          about wellbeing and mental health.
        </p>
        <p id="top-link">
          <a href="#top">Back to top</a>
        </p>
      </article>
    </section>
  );
}
