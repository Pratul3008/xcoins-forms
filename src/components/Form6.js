import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Label from "./Label";
import SubmitButton from "./SubmitButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import close from "../Images/close-icon.svg";
import "./Form6.css";

const Form6 = () => {
  const year = new Date().getFullYear() - 3;
  const maxDate = "" + year + "-12-31";

  const [dobClass, setDobClass] = useState("");
  const [methodClass, setMethodClass] = useState("");
  const [dlnoClass, setDlnoClass] = useState("");
  const [frontVisibleClass, setFrontVisibleClass] = useState("cross-hidden");
  const [backVisibleClass, setBackVisibleClass] = useState("cross-hidden");
  const [selfieVisibleClass, setSelfieVisibleClass] = useState("cross-hidden");
  const [selectedDate, setSelectedDate] = useState(null);

  const initialValues = {
    dob: "",
    method: "",
    front: "",
    back: "",
    selfie: "",
    dlno: "",
    check: false,
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object().shape({
    dob: Yup.string().required("Date of birth required"),
    method: Yup.string().required("Select a method"),
    front: Yup.string().required("Upload file"),
    back: Yup.string().required("Upload file"),
    selfie: Yup.string().required("Upload file"),
    dlno: Yup.string().trim().required("Id number required"),
    check: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        formik.touched.dob && formik.errors.dob
          ? setDobClass("error-border")
          : setDobClass("");
        formik.touched.method && formik.errors.method
          ? setMethodClass("error-border")
          : setMethodClass("");
        formik.touched.dlno && formik.errors.dlno
          ? setDlnoClass("error-border")
          : setDlnoClass("");
        formik.values.front
          ? setFrontVisibleClass("cross-visible")
          : setFrontVisibleClass("cross-hidden");
        formik.values.back
          ? setBackVisibleClass("cross-visible")
          : setBackVisibleClass("cross-hidden");
        formik.values.selfie
          ? setSelfieVisibleClass("cross-visible")
          : setSelfieVisibleClass("cross-hidden");

        const removeFile = (name) => {
          formik.setFieldValue(name, "");
        };

        return (
          <Form className="form-6">
            <Label htmlFor="dob" text="Date of birth *" />
            {/* <DatePicker className={`${dobClass} form6-field date`} id="dob" name="dob" selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat="dd/MM/yyyy" min="0000-00-00" max={maxDate}/> */}
            <Field
              className={`${dobClass} form6-field date`}
              type="date"
              id="dob"
              min="0000-00-00"
              max={maxDate}
              name="dob"
            />
            <div className="form6-error-container">
              <ErrorMessage
                name="dob"
                className="form-6-error"
                component="div"
              />
            </div>

            <Label htmlFor="method" text="Choose method *" />
            <Field
              className={`${methodClass} form6-field`}
              as="select"
              id="method"
              name="method"
            >
              <option value="">Choose method</option>
              <option value="Driving Licence">Driving Licence</option>
              <option value="Aadhar Card">Aadhar Card</option>
              <option value="Passport">Passport</option>
            </Field>
            <div className="form6-error-container">
              <ErrorMessage
                name="method"
                className="form-6-error"
                component="div"
              />
            </div>

            <Label htmlFor="front" text="Driving licence front photo *" />
            <br />
            <Field className="choose-opt" type="file" id="front" name="front" />
            <img
              className={frontVisibleClass}
              src={close}
              alt="close"
              onClick={() => {
                removeFile("front");
              }}
            />
            <br />
            <div className="form6-error-container">
              <ErrorMessage
                name="front"
                className="form-6-error"
                component="div"
              />
            </div>

            <Label htmlFor="back" text="Driving licence back photo *" />
            <br />
            <Field className="choose-opt" type="file" id="back" name="back" />
            <img
              className={backVisibleClass}
              src={close}
              alt="close"
              onClick={() => {
                removeFile("back");
              }}
            />
            <br />
            <div className="form6-error-container">
              <ErrorMessage
                name="back"
                className="form-6-error"
                component="div"
              />
            </div>

            <Label htmlFor="selfie" text="Selfie holding ID doc and note *" />
            <br />
            <Field
              className="choose-opt"
              type="file"
              id="selfie"
              name="selfie"
            />
            <img
              className={selfieVisibleClass}
              src={close}
              alt="close"
              onClick={() => {
                removeFile("selfie");
              }}
            />
            <br />
            <div className="form6-error-container">
              <ErrorMessage
                name="selfie"
                className="form-6-error"
                component="div"
              />
            </div>

            <Label htmlFor="dlno" text="Driving licence number *" />
            <Field
              className={`${dlnoClass} form6-field`}
              type="text"
              maxLength="16"
              placeholder="Driving licence number"
              id="dlno"
              name="dlno"
            />
            <div className="form6-error-container">
              <ErrorMessage
                name="dlno"
                className="form-6-error"
                component="div"
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <div className="form-6-checkbox">
                <Field className="check" type="checkbox" name="check" />
                <div className="form-6-checkbox-text">
                  Please accept
                  <a href="#" className="terms-text">
                    {" "}
                    Terms of service
                  </a>{" "}
                  and
                  <a href="#" className="terms-text">
                    {" "}
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div className="form6-error-container">
                <ErrorMessage
                  name="check"
                  className="form-6-error"
                  component="div"
                />
              </div>
            </div>

            <div>
              <SubmitButton
                className="form6-submit"
                type="submit"
                text="UPLOAD FILES"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form6;
