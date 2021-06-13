import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Location from "./components/Location/Location";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/location" component={Location} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={Contact} />
      <Route
        path="/instagram"
        component={() => {
          window.open("https://www.instagram.com/centralfloridabjj/", "_blank");
          return <Gallery />;
        }}
      />
      <Route
        path="/facebook"
        component={() => {
          window.open("https://www.facebook.com/CentralFloridaBJJ", "_blank");
          return <Gallery />;
        }}
      />
    </div>
  );
}

export default App;
