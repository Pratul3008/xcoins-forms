import React from "react";
import attention from "../Images/attention-icon.svg";
import "./AttentionText.css";
const AttentionText = () => {
  return (
    <div className="attention-box-form6">
      <img src={attention} alt="alert-pic" />
      <p>
        Follow instructions to start buying cryptocurrencies via Xcoins: 1)
        Upload the front and back of your government issued ID
        <br />
        2) Please take a selfie holding your identity document and a note with
        today’s date and «Xcoins» written on it
      </p>
    </div>
  );
};

export default AttentionText;
