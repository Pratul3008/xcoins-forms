import React from "react";
import "./FormStep.css";
const FormStep = (props) => {
  return (
    <div className="step">
      <div
        style={{ backgroundColor: props.bgcolor, boxShadow: props.boxshadow }}
        className="circle"
      >
        <span style={{ color: props.textcolor }}>{props.id}</span>
      </div>
      <span style={{ color: props.circletextcolor }} className="step-head">
        {props.text}
      </span>
    </div>
  );
};

export default FormStep;
