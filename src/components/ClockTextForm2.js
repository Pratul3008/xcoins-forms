import React from "react";
import clock from "../Images/clock-icon.svg";
import "./ClockText.css";
const ClockTextForm2 = () => {
  return (
    <div className="clock-box-form2">
      <img src={clock} alt="clock-pic" />
      <p>
        We’ve sent your email address a code. Please input the 4 digit code
        here, to verify your email address.
      </p>
    </div>
  );
};

export default ClockTextForm2;
