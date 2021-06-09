import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import "./css/contactForm.css";

function ContactForm() {
  const [mapLoaded, setMapLoaded] = useState(true);

  const hideSpinner = () => {
    setMapLoaded(false);
  };
  return (
    <div className="contactFormWrapper" id="contactSection1">
      <h1 className="contactFormH1">
        Feel Free To Contact Us With Any Questions
      </h1>
      <div className="contactFormContainer">
        <div className="contactFormInputs">
          <div className="contactFormName">
            <form noValidate autoComplete="on">
              <TextField label="First Name *" />
              <TextField label="Last Name " />
            </form>
          </div>
          <div className="contactFormEmail">
            <form noValidate autoComplete="on">
              <TextField label="Email Address *" />
            </form>
          </div>
          <div className="contactFormPhone">
            <form noValidate autoComplete="on">
              <TextField label="Phone Number *" />
            </form>
          </div>
          <div className="contactFormMessage">
            <form noValidate autoComplete="on">
              <TextField label="Message *" multiline rows={4} />
            </form>
          </div>
          <div className="contactFormSendBtn"></div>
        </div>
        <div className="contactFormLocationSection">
          <p className="contactFormAddressPTag">
            1420 Gemini Blvd. Suite #8 Orlando, Florida 32837
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
