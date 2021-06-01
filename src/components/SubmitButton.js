import React from "react";

const SubmitButton = (props) => {
  return (
    <button className={`submit-btn ${props.className}`} type={props.type}>
      {props.text}
    </button>
  );
};

export default SubmitButton;
