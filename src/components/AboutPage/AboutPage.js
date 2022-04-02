import React from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HeroAsideCircles from "../HeroAsideCircles/HeroAsideCircles";
import History from "../History/History";
import InstructorSection from "../InstructorSection/InstructorSection";
import Mission from "../Mission/Mission";
import Nav from "../Nav/Nav";

function AboutPage() {
  return (
    <div>
      <Nav />
      <Hero
        imgUrl="https://i.postimg.cc/zvDvF8zh/14290023-1152467371499621-5264305416254274498-o.jpg"
        heading="About CFBJJ"
        headingBgColor="transparent"
        height="100vh"
        anchorId="aboutPageSection1"
        arrowAnchorId="missionSectionAnchor"
      />
      <Mission />
      <Hero
        imgUrl="https://cdn.evolve-mma.com/wp-content/uploads/2017/12/Carlos-Gracie-1024x549.jpg"
        heading="BJJ History"
        headingBgColor="transparent"
        height="100vh"
        anchorId="aboutPageSection2"
        arrowAnchorId="historySectionAnchor"
      />
      <History />
      <Hero
        imgUrl="https://i.postimg.cc/Kz8h9zTm/25587997-1604192719660415-8392414951611354317-o.jpg"
        heading="Instructor"
        headingBgColor="transparent"
        height="100vh"
        anchorId="aboutPageSection3"
        arrowAnchorId="instructorSectionAnchor"
      />
      <InstructorSection />
      <HeroAsideCircles
        hoverTxt1="About CFBJJ"
        scrollId1="aboutPageSection1"
        hoverTxt2="BJJ History"
        scrollId2="aboutPageSection2"
        hoverTxt3="Instructor"
        scrollId3="aboutPageSection3"
      />
      <Footer />
    </div>
  );
}

export default AboutPage;
