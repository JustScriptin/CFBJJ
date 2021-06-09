import React from "react";
import "./css/mission.css";

function Mission() {
  return (
    <div className="missionContainer" id="missionSectionAnchor">
      <div className="missionSection1">
        <div className="missionSection1Text">
          <h1>
            Our Mission: To Create An Ego-Free Environment To Work Hard & Play
            Hard In.
          </h1>
          <p>
            We pride ourselves on creating an environment that is fun,
            educational, safe, and empowering. It's a requirement that everybody
            leave their ego at the door. What we practice is a martial art and
            can be dangerous, if not downright lethal. However, if practiced
            correctly, it can be playful while still being intense and
            challenging. <br />
            <br /> We make it our mission for everybody who comes in, no matter
            what age or size, to find like-minded practitioners ready to take
            their self defense, physical fitness, and enjoyment of the art to
            the next level.{" "}
          </p>
        </div>
        <img
          src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/29495908_1693543040725382_2990923776490733568_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=7knwUU1EAf8AX9uRUsk&_nc_ht=scontent-mia3-1.xx&oh=4dc11cbca62e126bd2b54d5a76b61e1d&oe=60910140"
          alt=""
        />
      </div>
      <div className="missionSection2">
        <p className="missionSection2Header">
          Get Your <strong>FREE WEEK</strong> Pass!
        </p>
        <p className="missionSection2Text">
          Call Us At <strong>(407) 603-6255</strong> Or Come Visit Us At:
          <span>1420 Gemini Blvd. Suite #8 Orlando, Florida 32837</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Mission;
