import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Label from "./Label";
import SubmitButton from "./SubmitButton";
import Data from "./Data";
import "./Form5.css";

const Form5 = () => {
  const [countryCodeClass, setCountryCodeClass] = useState("");
  const [phoneClass, setPhoneClass] = useState("");
  const [smsClass, setSMSClass] = useState("");

  const initialValues = {
    countryCode: "",
    phone: "",
    sms: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object().shape({
    countryCode: Yup.string().required("Please select a code"),
    phone: Yup.number()
      .required("Phone number required")
      .max(9999999999, "Invalid phone number"),
    sms: Yup.number()
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
        formik.touched.countryCode && formik.errors.countryCode
          ? setCountryCodeClass("error-border")
          : setCountryCodeClass("");
        formik.touched.phone && formik.errors.phone
          ? setPhoneClass("error-border")
          : setPhoneClass("");
        formik.touched.sms && formik.errors.sms
          ? setSMSClass("error-border")
          : setSMSClass("");

        return (
          <Form className="form5">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "190px" }}>
                <Label htmlFor="countryCode" text="Country code*" />
                <Field
                  className={`${countryCodeClass} form-5-country-code`}
                  as="select"
                  name="countryCode"
                  id="countryCode"
                >
                  <option value="">Select Code</option>
                  {Data.map((curr, ind) => {
                    return (
                      <option
                        value={`${curr.iso_code} ${curr.phone_code}`}
                      >{`${curr.iso_code} ${curr.phone_code}`}</option>
                    );
                  }, this)}
                </Field>
                <div className="form5-error-container">
                  <ErrorMessage
                    name="countryCode"
                    className="form-5-error"
                    component="div"
                  />
                </div>
              </div>
              <div className="form-5-phone-container">
                <Label htmlFor="phone" text="Phone number*" />
                <Field
                  className={`${phoneClass} form-5-phone`}
                  type="number"
                  placeholder="Phone number"
                  name="phone"
                  id="phone"
                />
                <div className="form5-error-container">
                  <ErrorMessage
                    name="phone"
                    className="form-5-error"
                    component="div"
                  />
                </div>
              </div>
              <div className="send-code">
                <button>SEND CODE</button>
              </div>
            </div>
            <Label htmlFor="sms" text="SMS Code*" />
            <Field
              className={`${smsClass} sms-field`}
              type="number"
              placeholder="SMS Code"
              name="sms"
              id="sms"
            />
            <div className="form5-error-container">
              <ErrorMessage
                name="sms"
                className="form-5-error"
                component="div"
              />
            </div>

            <p className="form-5-attempt">
              You have 3 attempts left. Didn’t receive the SMS.
              <a href="#" className="terms-text">
                {" "}
                Resend SMS Code
              </a>
            </p>
            <div>
              <SubmitButton
                className="form5-submit"
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

export default Form5;
