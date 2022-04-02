import React from "react";
import "./css/instructorSection.css";

function InstructorSection() {
  return (
    <div className="instructorSectionContainer" id="instructorSectionAnchor">
      <div className="instructorSectionLeft">
        <h1>Alex "Cavalo" Valazquez - Head Instructor</h1>
        <p>
          Born in Conneticut grew up with a love for engineering and jiu-jitsu.
          Late in 1997, he was invited by a good friend to check out a
          submission grappling/Brazilian Jiu-Jitsu Class; there, his “eyes were
          opened,” and he was hooked for life. His BJJ career started under the
          instruction of Marcelo Grosso (De La Riva). Intensive training
          followed, during which he has had the pleasure of learning from many
          greats in the Jiu-Jitsu/ Grappling scene, including Carlson Gracie
          Jr., Royce Gracie, Ricardo De La Riva, Renato Tavares, Rinaldo Santos,
          Marcelo Grosso, and Matt Hughes, just to name a few. Always the
          competitor, Alex continues to capture multiple 1st place championships
          as an active team competitor.
        </p>
      </div>
      <img
        className="instructorSectionRight"
        src="https://i.postimg.cc/V6VpDF1F/643939-391063014306731-463073394-n.jpg"
        alt="Alex's promotion day with de la riva"
      />
    </div>
  );
}

export default InstructorSection;
