import React, { useState } from "react";
import Label from "./Label";
import SubmitButton from "./SubmitButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import facebook from "../Images/facebook-icon.svg";
import "./Form1.css";

const Form1 = () => {
  const [fnameClass, setFnameOutline] = useState("");
  const [lnameClass, setLnameOutline] = useState("");
  const [emailClass, setEmailOutline] = useState("");
  const [passwordClass, setPasswordOutline] = useState("");

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    check: false,
  };

  const onSubmit = (values) => {
    console.log("Form Data", values);
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .trim()
      .required("First name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .min(3, "Minimum 3 characters required")
      .max(15, "Maximum 15 characters allowed"),
    lname: Yup.string()
      .trim()
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .min(3, "Minimum 3 characters required")
      .max(15, "Maximum 15 characters allowed"),
    email: Yup.string()
      .trim()
      .required("Email is required")
      .email("Invalid email"),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .min(8, "Password should have atleast 8 characters"),
    check: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        formik.touched.fname && formik.errors.fname
          ? setFnameOutline("error-border")
          : setFnameOutline("");
        formik.touched.lname && formik.errors.lname
          ? setLnameOutline("error-border")
          : setLnameOutline("");
        formik.touched.email && formik.errors.email
          ? setEmailOutline("error-border")
          : setEmailOutline("");
        formik.touched.password && formik.errors.password
          ? setPasswordOutline("error-border")
          : setPasswordOutline("");
        return (
          <Form className="form-1">
            <Label htmlFor="fname" text="First name *" />
            <Field
              className={fnameClass}
              type="text"
              id="fname"
              name="fname"
              placeholder="First name"
            />
            <div className="form1-error-container">
              <ErrorMessage
                id="fname-error"
                name="fname"
                className="form1-error"
                component="div"
              />
            </div>

            <Label htmlFor="lname" text="Last name *" />
            <Field
              className={lnameClass}
              type="text"
              id="lname"
              name="lname"
              placeholder="Last name"
            />
            <div className="form1-error-container">
              <ErrorMessage
                name="lname"
                className="form1-error"
                component="div"
              />
            </div>

            <Label htmlFor="email" text="Email address *" />
            <Field
              className={emailClass}
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            />
            <div className="form1-error-container">
              <ErrorMessage
                name="email"
                className="form1-error"
                component="div"
              />
            </div>

            <Label htmlFor="password" text="Create password *" />
            <Field
              className={passwordClass}
              type="password"
              id="password"
              name="password"
              placeholder="Create password"
            />
            <div className="form1-error-container">
              <ErrorMessage
                name="password"
                className="form1-error"
                component="div"
              />
            </div>

            <div className="checkbox">
              <Field className="check" type="checkbox" name="check" />
              <div className="checkbox-text">
                By clicking «Continue» you agree to our{" "}
                <a href="#" className="terms-text">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="terms-text">
                  Cookies Policy
                </a>{" "}
                and{" "}
                <a href="#" className="terms-text">
                  Privacy Policy.
                </a>{" "}
                You may receive email and SMS notifications from us and can opt
                out at any time.
              </div>
            </div>
            <div className="form1-error-container">
              <ErrorMessage
                name="check"
                className="form1-error"
                component="div"
              />
            </div>

            <div
              className="g-recaptcha"
              data-sitekey="6Lcb_fEaAAAAABC1nkvE21hD1ItbHGZvzRGy2GhD"
            ></div>

            <div>
              <SubmitButton
                className="form1-submit"
                type="submit"
                text="CONTINUE"
              />
            </div>
            <div className="or">Or</div>
            <div className="facebook">
              <button>
                <div className="btn-content">
                  <img src={facebook} alt="facebook-pic" />
                  <div className="btn-content-txt">SIGN UP VIA FACEBOOK</div>
                </div>
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form1;
