import React from "react";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HeroAsideCircles from "../HeroAsideCircles/HeroAsideCircles";
import InstagramGallery from "../InstagramGallery/InstagramGallery";
import Nav from "../Nav/Nav";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

function Home() {
  return (
    <div>
      <HeroAsideCircles
        hoverTxt1="Central Florida Bjj"
        scrollId1="heroImgAnchor1"
        hoverTxt2="Come Train With Us"
        scrollId2="heroImgAnchor2"
      />
      <Nav />
      <Hero
        imgUrl="https://images.unsplash.com/photo-1525198104776-f6e8a873f9b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        heading="Central Florida Bjj"
        headingBgColor="white"
        height="100vh"
        anchorId="heroImgAnchor1"
        arrowAnchorId="homeSection1"
      />
      <AboutUsSection />
      <Hero
        imgUrl="https://images.unsplash.com/photo-1594749948869-3039d90d7949?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80"
        heading="Come Train With Us"
        headingBgColor="transparent"
        height="70vh"
        anchorId="heroImgAnchor2"
        arrowAnchorId="homeSection2"
      />
      <TestimonialSection />
      <InstagramGallery />
      <Footer />
    </div>
  );
}

export default Home;
