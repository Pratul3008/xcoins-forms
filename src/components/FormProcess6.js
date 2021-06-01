import React from "react";
import FormStep from "./FormStep";
import Line from "./Line";
import "./FormProcess.css";

const FormProcess6 = () => {
  return (
    <div className="process-flow">
      <FormStep
        textcolor="rgb(99,118,150)"
        circletextcolor="rgba(99,118,150,0.5)"
        bgcolor="rgba(0, 156, 222,0.05)"
        id="1"
        text="Account setup"
      />
      <Line />
      <FormStep
        textcolor="rgb(99,118,150)"
        circletextcolor="rgba(99,118,150,0.5)"
        bgcolor="rgba(0, 156, 222,0.05)"
        id="2"
        text="Personal details"
      />
      <Line />
      <FormStep
        boxshadow="0 2px 4px 0 rgba(0, 156, 222, 0.3)"
        id="3"
        text="Verify ID"
      />
    </div>
  );
};

export default FormProcess6;
