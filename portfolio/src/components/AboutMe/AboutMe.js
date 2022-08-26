import "./AboutMe.css";
import { useState } from "react";

export function AboutMe() {
  const [active, setActive] = useState("1");
  const [content, setContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  function handleClick(e, content) {
    setActive(e.target.id);
    setModalOpen(true);
    switch (content) {
      default:
        break;
      case "general":
        const general = (
          <>
            <p>
              I'm a junior software developer with a passion for problem solving
              and an enthusiasm for continuous learning.
            </p>
          </>
        );
        setContent(general);
        break;
      case "story":
        const story = (
          <>
            <p>
              I was an IT Support Technician for 7 years, but grew tired of
              telling people to "turn it off and on".
            </p>
            <p>
              I had a desire to learn more about tech and challenge myself, so I
              started teaching myself web development in the evenings using free
              resouces on the internet.
            </p>
            <p>
              This sparked a passion and I knew it was something I wanted to
              move into as a career. Knowing that I would benefit from some
              structured learning, I discovered the School of Code free bootcamp
              and applied.
            </p>
            <p>
              In March 2022 I left my job, moved 4 hours across country with my
              wife and daughter to be nearer to family and started my new
              journey.
            </p>
            <p>
              Now after 16 weeks of intensive and accelerated learning, I have
              gained strong technical skills across a variety of full stack
              technology, as well as invaluable experience of working within
              diverse agile software engineering teams, and I am excited to put
              it all into practise in my first junior role.
            </p>
          </>
        );
        setContent(story);
        break;
      case "experience":
        const experience = (
          <p>
            I have just graduated from the School of Code bootcamp. After 16
            weeks of intensive & accelerated learning, I have gained strong
            technical skills across a variety of full stack technology, as well
            as invaluable experience of working within diverse agile software
            engineering teams, and I am excited to put it all into practise in
            my first junior role.
          </p>
        );
        setContent(experience);
        break;
      case "interests":
        const interests = (
          <>
            <p>
              When I'm not being a climbing frame for my young daughter, I
              enjoy: writing, recording and playing music, starting (but rarely
              finishing) videogames, losing to my wife at cards and spending
              time with friends and family.
            </p>
            <p>
              I also enjoy attending gigs and music festivals and I am
              passionate about wellbeing and mental health.
            </p>
          </>
        );
        setContent(interests);
        break;
    }
  }

  function handleClose() {
    setModalOpen(false);
  }

  // when button is clicked, apply active styling
  // use an onclick to trigger and dynamically change class
  return (
    <section className="aboutMeSection">
      <div className="aboutMeContainer">
        {/* <p className="aboutMe-more heartbeat">
        Click to find out more <span className="aboutMe-arrow">&#8594;</span>
      </p> */}

        <div className="image-container">
          <img src="images\Craig2.jfif" alt="#" />
          {/* <h3>Craig Summers</h3> */}
          {/* <p>FULL STACK DEVELOPER</p> */}
        </div>
        <div>
          <h2>Hi, I'm Craig</h2>
          <p>
            I'm a junior software developer with a passion for problem solving
            and an enthusiasm for continuous learning.
          </p>
        </div>
      </div>
      <div className="aboutMe-button-container">
        {/* <button
          className={
            active === "1" ? "aboutMe-button-active" : "aboutMe-button"
          }
          onClick={(e) => {
            handleClick(e, "general");
          }}
          id={"1"}
        >
          General
        </button> */}
        <button
          className={
            active === "2" ? "aboutMe-button-active" : "aboutMe-button"
          }
          onClick={(e) => {
            handleClick(e, "story");
          }}
          id={"2"}
        >
          My Story
        </button>
        <button
          className={
            active === "3" ? "aboutMe-button-active" : "aboutMe-button"
          }
          onClick={(e) => {
            handleClick(e, "experience");
          }}
          id={"3"}
        >
          Experience
        </button>
        <button
          className={
            active === "4" ? "aboutMe-button-active" : "aboutMe-button"
          }
          onClick={(e) => {
            handleClick(e, "interests");
          }}
          id={"4"}
        >
          Interests
        </button>
      </div>
      {modalOpen && (
        <>
          <div className="info-container">
            <button onClick={handleClose}>Close</button>
            {content}
          </div>
        </>
      )}
    </section>
  );
}
