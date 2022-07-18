import "./AboutMe.css";
import { useState } from "react";

export function AboutMe() {
  const [content, setContent] = useState(
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus esse
      minima iusto provident eveniet, rem illum ipsa. Accusantium, veniam dolore
      laboriosam omnis consequatur, quod voluptas, fuga aspernatur labore
      laborum maxime.
    </p>
  );
  function handleClick(content) {
    switch (content) {
      default:
        break;
      case "general":
        const general = (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus esse minima iusto provident eveniet, rem illum ipsa.
            Accusantium, veniam dolore laboriosam omnis consequatur, quod
            voluptas, fuga aspernatur labore laborum maxime.
          </p>
        );
        setContent(general);
        break;
      case "experience":
        const experience = (
          <p>
            Odio corrupti optio deleniti rem inventore sed, autem nam nulla
            totam suscipit culpa, dicta magni repellat obcaecati vitae veritatis
            laudantium soluta quidem omnis sunt ad recusandae quaerat nobis
            quis. Sunt!
          </p>
        );
        setContent(experience);
        break;
      case "wants":
        const wants = (
          <p>
            Inventore neque libero aperiam sequi obcaecati eveniet voluptatibus
            velit voluptates unde culpa qui, atque ratione, magni ut, corrupti
            delectus ullam ab veritatis! In cupiditate obcaecati voluptates
            porro vitae debitis voluptatibus.
          </p>
        );
        setContent(wants);
        break;
    }
  }
  return (
    <section className="aboutMe">
      <div className="image-container">
        <img src="images\Craig.jpg" alt="#" />
        {/* <h3>Craig Summers</h3> */}
        {/* <p>FULL STACK DEVELOPER</p> */}
      </div>
      <div className="info-container">
        <h2>Hi, I'm Craig</h2>
        {content}
      </div>
      <p className="aboutMe-more heartbeat">
        Click to find out more <span>&#8594;</span>
      </p>
      <div className="aboutMe-button-container">
        <button
          className="aboutMe-button"
          onClick={() => {
            handleClick("general");
          }}
          id="aboutMe-button-active"
        >
          General
        </button>
        <button
          className="aboutMe-button"
          onClick={() => {
            handleClick("experience");
          }}
        >
          Experience
        </button>
        <button
          className="aboutMe-button"
          onClick={() => {
            handleClick("wants");
          }}
        >
          Wants
        </button>
      </div>
    </section>
  );
}
