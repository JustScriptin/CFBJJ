import React from "react";
import { Link } from "react-router-dom";
import "./css/testimonialSection.css";

function TestimonialSection() {
  return (
    <div className="testimonialSectionContainer" id="homeSection2">
      <div className="testimonialColWrapper">
        <div className="testimonialSectionCol1">
          <h3>Sign Up Today.</h3>
          <p>
            We're so confident that you'll enjoy both the process and the
            results that we'll give you a week to try it out, completely free.
          </p>
          <Link to="/contact">
            <button>GET IN TOUCH WITH US TODAY</button>
          </Link>
        </div>
        <div className="testimonialSectionCol2">
          <h4>Robbie A. Says...</h4>
          <p>"GREAT JOB INTRODUCING ME TO BJJ."</p>
          <p>
            <em>
              Alex was my instructor for many months at Hero's Academy. He
              taught me the basics of position, being calm, and instilled in me
              a love for the sport. I continue to enjoy BJJ today, and I always
              look forward to rolling with Alex and learning from him when I get
              the chance.{" "}
            </em>
          </p>
        </div>
        <div className="testimonialSectionCol3">
          <h4>Justin P. Says...</h4>
          <p>"A WEALTH OF KNOWLEDGE."</p>
          <p>
            <em>
              Alex knows almost everyone in the business because he has been in
              the jiu jitsu scene for such a long time and it really shows when
              he teaches, All the expertise and knowledge he brought from
              training and competing in so many different places really makes
              the learning process really smooth. Also the guys at the gym are
              really welcoming. we are all family here!
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
