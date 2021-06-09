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
        src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/29815_391063297640036_1157658225_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=973b4a&_nc_ohc=pT5t2flWr9QAX_bAzqK&_nc_ht=scontent-mia3-1.xx&oh=59714344604470ab25c78927c2e217ea&oe=60DEE286"
        alt="Alex's promotion day with de la riva"
      />
    </div>
  );
}

export default InstructorSection;
