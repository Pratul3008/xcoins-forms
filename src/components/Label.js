import React from "react";

const Label = (props) => {
  return (
    <label className="field-head" htmlFor={props.htmlFor}>
      {props.text}
    </label>
  );
};

export default Label;
