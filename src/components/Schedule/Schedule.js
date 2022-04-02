import React from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MidSectionWrapper from "../MidSectionWrapper/MidSectionWrapper";
import Nav from "../Nav/Nav";
import ScheduleTable from "../ScheduleTable/ScheduleTable";
import ScheduleText from "../ScheduleText/ScheduleText";

function Schedule() {
  return (
    <div>
      <Nav />
      <Hero
        imgUrl="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        heading="Schedule"
        headingBgColor="transparent"
        height="33.33vh"
        anchorId="scheduleHeroImgAnchor1"
        arrowAnchorId="scheduleSection1"
      />
      <MidSectionWrapper>
      <ScheduleText />
      <ScheduleTable />
      </MidSectionWrapper>
      <Footer />
    </div>
  );
}

export default Schedule;
