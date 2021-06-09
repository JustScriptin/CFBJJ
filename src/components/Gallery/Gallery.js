import React from "react";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./css/gallery.css";

function Gallery() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Gallery;
