import Avatar from "avataaars";
import { Animated } from "react-animated-css";
import "./Title.css";

function Title() {
  return (
    <div className="title-container">
      <h1 className="title-main-heading">Craig Summers</h1>
      <h2 className="title-sub-heading">Full Stack Developer</h2>
      <div className="title-avatar-container">
        <Avatar
          className="title-avatar"
          avatarStyle="Transparent"
          topType="ShortHairShortFlat"
          accessoriesType="Blank"
          hairColor="Brown"
          facialHairType="BeardLight"
          facialHairColor="Auburn"
          clotheType="ShirtCrewNeck"
          clotheColor="Blue03"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Default"
          skinColor="Pale"
        />
      </div>
      <ul className="title-animation-container">
        <Animated animationIn="fadeIn" animationInDelay="500" isVisible={true}>
          <li className="title-animation-item scale-up-center-1">
            Enthusiastic
          </li>
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay="1500" isVisible={true}>
          <li className="title-animation-item scale-up-center-2">Curious</li>
        </Animated>

        <Animated animationIn="fadeIn" animationInDelay="2500" isVisible={true}>
          <li className="title-animation-item scale-up-center-3">
            Team Player
          </li>
        </Animated>
      </ul>
    </div>
  );
}

export default Title;
