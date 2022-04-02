import React from "react";
import { Link } from "react-router-dom";
import "./css/aboutUsSection.css";
import video from "./assets/aboutUsSectionVideo.mp4";
import img1 from "./assets/aboutUsSectionImg1.jfif";
import img2 from "./assets/aboutUsSectionImg2.jfif";
import img3 from "./assets/aboutUsSectionImg3.jfif";

function aboutUsSection() {
  return (
    <div className="aboutUsSectionContainer" id="homeSection1">
      <div className="aboutUsSection1">
        <div className="aboutUsSection1Left">
          <video
            className="aboutUsSectionVideo"
            controls
            src={video}
            controlsList="nodownload"
          ></video>
        </div>
        <div className="aboutUsSection1Right">
          <h2>CFBJJ. CENTRAL FLORIDA'S JIU JITSU GYM.</h2>
          <p>
            South Orlando's Newest Mixed Martial Arts School. Offering classes
            in: Kid Anti-Bullying Program, Brazilian Jiu-Jitsu, Self-Defense,
            Submission Wrestling, MMA Conditioning & more. All of our programs
            are over seen by our BJJ Black Belt. Our focus is in providing fun/
            family oriented environment while achieving a healthier and
            confident lifestyle.
          </p>
        </div>
      </div>
      <div className="aboutUsSection2">
        <div className="aboutUsSection2Left">
          <h2>Try Jiu Jitsu For A Week, For FREE!</h2>
          <p>
            Have a free week on us.{" "}
            <strong>
              <a
                className="aboutUsSectionPhoneCallLink"
                href="tel:407-603-6255"
              >
                Call us at (407) 603-6255
              </a>
            </strong>{" "}
            or <strong>click the button</strong> to email us.
          </p>
        </div>
        <div className="aboutUsSection2Right">
          <Link to="/contact#contactSection1">
            <button>GET MY FREE WEEK TRIAL!</button>
          </Link>
        </div>
      </div>
      <div className="aboutUsSection3">
        <div className=".aboutUsSection3Col1">
          <div className="aboutUsSection3Img1"></div>
          <h4>JIU JITSU FOR ALL AGES</h4>
          <p>
            We teach kids 8 years old, to men in their 60s. BJJ knows no age
            restrictions.
          </p>
        </div>
        <div className=".aboutUsSection3Col2">
          <div className="aboutUsSection3Img2"></div>
          <h4>ALL SKILL LEVELS ARE WELCOME</h4>
          <p>
            No matter the skill level, we have classes and instruction for you.
          </p>
        </div>
        <div className=".aboutUsSection3Col3">
          <div className="aboutUsSection3Img3"></div>
          <h4>CLASSES TAUGHT BY BLACK BELT INSTRUCTOR</h4>
          <p>
            Learn the art the way it was meant to be learned; from passionate,
            expert instructors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default aboutUsSection;
