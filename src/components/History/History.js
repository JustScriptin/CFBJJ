import React from "react";
import "./css/history.css";

function History() {
  return (
    <div className="historyContainer" id="historySectionAnchor">
      <h1>
        <em> A True Martial Art That Has Stood The Test Of Time.</em>
      </h1>
      <div className="historyTopText">
        <div className="historyQuote">
          <em>
            “Jiu-jitsu is personal efficiency to protest the weaker, which
            anyone can do. It is the force of leverage against brute force.”
          </em>
          <p className="historySignature">— Helio Gracie</p>
        </div>
        <p className="historyTopTextRight">
          Brazilian jiu-jitsu was formed from Kodokan Judo ground fighting
          (newaza) fundamentals that were taught to Carlos Gracie & Luiz França
          by Mitsuyo Maeda and Soshihiro Satake.Carlos Gracie is known as the
          Founder and Creator of Modern Jiu Jitsu (Gracie Jiu Jitsu/Brazilian
          Jiu Jitsu). Brazilian jiu-jitsu eventually came to be its own art
          through the experimentations, practices, and adaptation from the Judo
          knowledge of Carlos and Hélio Gracie, who then passed their knowledge
          on to their extended family.
        </p>
      </div>
      <img
        src="https://bjj-world.com/wp-content/uploads/2018/01/Screenshot_14-1.jpg"
        alt="Founding family"
      />
      <p className="historyBottomText">
        BJJ promotes the concept that a smaller, weaker person can successfully
        defend against a bigger, stronger assailant by using proper technique,
        leverage, and most notably, taking the fight to the ground, and then
        applying joint-locks and chokeholds to defeat the opponent. BJJ training
        can be used for sport grappling tournaments ({" "}
        <a href="http://en.wikipedia.org/wiki/Brazilian_jiu-jitsu_gi">gi</a> and{" "}
        <a href="http://en.wikipedia.org/wiki/No-gi">no-gi</a> ) and{" "}
        <a href="http://en.wikipedia.org/wiki/Mixed_martial_arts">
          {" "}
          mixed martial arts{" "}
        </a>
        (MMA) competition or self-defense. Sparring(commonly referred to as
        "rolling") and{" "}
        <a href="http://en.wikipedia.org/wiki/Aliveness_(martial_arts)">
          live
        </a>{" "}
        drilling play a major role in training, and a premium is placed on
        performance, especially in competition, in relation to progress and
        ascension through{" "}
        <a href="http://en.wikipedia.org/wiki/Brazilian_jiu-jitsu_ranking_system">
          its ranking system
        </a>{" "}
        .<br />
        <br /> Since its inception in 1882, its parent art of{" "}
        <a href="http://en.wikipedia.org/wiki/Judo">Judo</a> was separated from
        older systems of{" "}
        <a href="http://en.wikipedia.org/wiki/Japanese_ju-jitsu">
          Japanese ju-jitsu
        </a>{" "}
        by an important difference that was passed on to Brazilian jiu-jitsu: it
        is not solely a martial art, it is also a sport; a method for promoting
        physical fitness and building character in young people; and,
        ultimately, a way of life.
      </p>
    </div>
  );
}

export default History;
