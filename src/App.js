import React from "react";
import Heading from "./components/Heading";
import FormProcess12 from "./components/FormProcess12";
import FormProcess345 from "./components/FormProcess345";
import FormProcess6 from "./components/FormProcess6";
import ClockTextForm1 from "./components/ClockTextForm1";
import ClockTextForm2 from "./components/ClockTextForm2";
import AttentionText from "./components/AttentionText";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form4 from "./components/Form4";
import Form3 from "./components/Form3";
import Form5 from "./components/Form5";
import Form6 from "./components/Form6";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="container">
        <Heading />
        <FormProcess12 />
        <ClockTextForm1 />
        <Form1 />

         <Heading />
        <FormProcess12 />
        <ClockTextForm2 />
        <Form2 />

         <Heading />
        <FormProcess345 />
        <Form3 />

        <Heading />
        <FormProcess345 />
        <Form4 /> 

        <Heading />
        <FormProcess345 />
        <Form5 />

        <Heading />
        <FormProcess6 />
        <AttentionText />
        <Form6 />  
      </div>
    </>
  );
};
export default App;
