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
        imgUrl="https://scontent-mia3-2.xx.fbcdn.net/v/t31.18172-8/25587070_1604192932993727_2649585881205739652_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=DmHlJtuA2wwAX9bIc9t&_nc_ht=scontent-mia3-2.xx&oh=627196d83b121adab1928a8091fd7dca&oe=60E16149"
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
        imgUrl="https://scontent-mia3-1.xx.fbcdn.net/v/t31.18172-8/18673255_1409217875824568_550021346260820527_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=9U78dY3HPAMAX-9pfKs&_nc_ht=scontent-mia3-1.xx&oh=f4c11ad4f055a49920e78abc89b631ee&oe=60E0ADA1"
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
