import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import "./css/location.css";

function Location() {
  const [mapLoaded, setMapLoaded] = useState(true);

  const hideSpinner = () => {
    setMapLoaded(false);
  };
  return (
    <div>
      <Nav />
      <Hero
        imgUrl="https://images.unsplash.com/45/eDLHCtzRR0yfFtU0BQar_sylwiabartyzel_themap.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80"
        heading="Location"
        headingBgColor="transparent"
        height="45vh"
        anchorId="locationHeroImgAnchor1"
        arrowAnchorId="locationSection1"
      />
      <div className="locationContainer" id="locationSection1">
        {mapLoaded ? (
          <div className="mapSpinner">
            <CircularProgress color="secondary" />
          </div>
        ) : null}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.515664215762!2d-81.39967918457421!3d28.40369320115119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77d8853763ead%3A0xe4ae3848ee18c7e4!2sCentral%20Florida%20BJJ!5e0!3m2!1sen!2sus!4v1616648261390!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          onLoad={() => hideSpinner()}
        ></iframe>
        <div className="locationText">
          <div>
            <strong>
              <p>CFBJJ Main Location</p>
            </strong>
            <p>1420 Gemini Blvd, Orlando, FL 32837</p>
            <p>(407) 603-6255</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location;
