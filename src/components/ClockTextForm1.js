import React from "react";
import clock from "../Images/clock-icon.svg";
import "./ClockText.css";
const ClockTextForm1 = () => {
  return (
    <div className="clock-box-form1">
      <img src={clock} alt="clock-pic" />
      <p>
        Once submitted, your profile cannot be changed. Please ensure that your
        information is correct.
      </p>
    </div>
  );
};

export default ClockTextForm1;
