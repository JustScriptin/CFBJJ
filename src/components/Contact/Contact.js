import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import "./css/contact.css";

function Contact() {
  return (
    <div>
      <Nav />
      <Hero
        imgUrl="https://images.unsplash.com/45/eDLHCtzRR0yfFtU0BQar_sylwiabartyzel_themap.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80"
        heading="Contact"
        headingBgColor="transparent"
        height="45vh"
        anchorId="contactHeroImgAnchor1"
        arrowAnchorId="contactSection1"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
