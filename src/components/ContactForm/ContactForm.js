import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMap } from "../../stateManagement/ducks/mapDucks";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import { send } from "emailjs-com";
import "./css/contactForm.css";

function ContactForm() {
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toSend, setToSend] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [initialToSend, setInitialToSend] = useState(toSend);
  const open = Boolean(anchorEl);

  const onEnter = (e, sendValue) => {
    if (e.keyCode !== 13) return;
    const successArr = [];
    for (const key in sendValue) {
      if (sendValue[key] !== "" || key === "lName") successArr.push(key);
    }
    if (successArr.length === 5) {
      onSubmit(e);
      setError(false);
      setAnchorEl(e.currentTarget);
    } else {
      setError(true);
      setAnchorEl(e.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = (e) => {
    //e.preventDefault();
    send("CFBJJ", "template_3od1g8m", toSend, "8lv-8e-TxmOhZqLyX")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setToSend(initialToSend);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };

  const dispatch = useDispatch();
  //const [mapLoaded, setMapLoaded] = useState(true);
  const mapLoaded = useSelector((state) => state.map.isLoading);

  const handleHideSpinner = () => {
    dispatch(loadMap());
  };

  return (
    <div className="contactFormWrapper" id="contactSection1">
      <h1 className="contactFormH1">
        Feel Free To Contact Us With Any Questions
      </h1>
      <div className="contactFormContainer">
        <form className="contactFormInputs" noValidate autoComplete="on">
          <div className="contactFormName">
            <div id="contactFormName">
              <TextField
                required
                error={!toSend.fName && error}
                name="fName"
                label="First Name"
                value={toSend.fName}
                onChange={handleChange}
                onKeyDown={(e) => {
                  onEnter(e, toSend);
                }}
              />
              <TextField
                name="lName"
                label="Last Name"
                value={toSend.lName}
                onChange={handleChange}
                onKeyDown={(e) => {
                  onEnter(e, toSend);
                }}
              />
            </div>
          </div>
          <div className="contactFormEmail">
            <div>
              <TextField
                required
                error={!toSend.email && error}
                name="email"
                label="Email Address"
                value={toSend.email}
                onChange={handleChange}
                type="email"
                onKeyDown={(e) => {
                  onEnter(e, toSend);
                }}
              />
            </div>
          </div>
          <div className="contactFormPhone">
            <div>
              <TextField
                required
                error={!toSend.phoneNumber && error}
                name="phoneNumber"
                label="Phone Number"
                value={toSend.phoneNumber}
                onChange={handleChange}
                type="tel"
                onKeyDown={(e) => {
                  onEnter(e, toSend);
                }}
              />
            </div>
          </div>
          <div className="contactFormMessage">
            <div>
              <TextField
                required
                error={!toSend.message && error}
                name="message"
                label="Message"
                multiline
                rows={4}
                value={toSend.message}
                onChange={handleChange}
                onKeyDown={(e) => {
                  onEnter(e, toSend);
                }}
              />
            </div>

            <Button
              color={error ? "secondary" : submitted ? "primary" : "default"}
              onClick={(e) => {
                onEnter({ keyCode: 13 }, toSend);
                setAnchorEl(e.currentTarget);
              }}
            >
              Submit
            </Button>

            {error && (
              <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open}
                onClose={handleClose}
              >
                <p style={{ margin: "5px 10px" }}>
                  Please Fill Out All Required Fields
                </p>
              </Popover>
            )}
            {submitted && (
              <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open}
                onClose={handleClose}
              >
                <p style={{ margin: "5px 10px", width: "35ch", textAlign: "center" }}>
                  Thank you for your interest in Central Florida Bjj. We'll get back you shortly.
                </p>
              </Popover>
            )}
          </div>
          <div className="contactFormSendBtn"></div>
        </form>
        <div className="contactFormLocationSection">
          <p className="contactFormAddressPTag">
            1420 Gemini Blvd. Suite #8 Orlando, Florida 32837 <br /> (407)
            603-6255
          </p>
          {mapLoaded && (
            <div className="mapSpinner">
              <CircularProgress color="secondary" />
            </div>
          )}
          <iframe
            className="contactFormIframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.515664215762!2d-81.39967918457421!3d28.40369320115119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77d8853763ead%3A0xe4ae3848ee18c7e4!2sCentral%20Florida%20BJJ!5e0!3m2!1sen!2sus!4v1616648261390!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            onLoad={() => handleHideSpinner()}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
