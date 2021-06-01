import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Label from "./Label";
import SubmitButton from "./SubmitButton";
import "./Form4.css";

const Form4 = () => {
  const [smsClass, setSMSClass] = useState("");

  const initialValues = { form4SMS: "" };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object().shape({
    form4SMS: Yup.number()
      .required("SMS Code required")
      .min(1000000, "SMS code should have 7 digits")
      .max(9999999, "SMS code should have only 7 digits"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        formik.touched.form4SMS && formik.errors.form4SMS
          ? setSMSClass("error-border")
          : setSMSClass("");

        return (
          <Form className="form-4">
            <p className="form-instruct">
              Please enter the seven digit code we just sent to your number
              <span style={{ color: "black" }}> + 202-502-5899</span>{" "}
              <a href="#" className="terms-text">
                Change
              </a>
            </p>
            <Label htmlFor="form4SMS" text="SMS Code*" />
            <Field
              className={smsClass}
              type="number"
              placeholder="SMS Code"
              name="form4SMS"
              id="form4SMS"
            />
            <div className="form4-error-container">
              <ErrorMessage
                name="form4SMS"
                className="form4-error"
                component="div"
              />
            </div>

            <p className="attempt">
              You have 3 attempts left. Didn’t receive the SMS.
              <a href="#" className="terms-text">
                {" "}
                Resend SMS Code
              </a>
            </p>
            <div>
              <SubmitButton
                className="form4-submit"
                type="submit"
                text="VERIFY PHONE NUMBER"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form4;
