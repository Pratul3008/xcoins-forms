import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Data from "./Data";
import Label from "./Label";
import SubmitButton from "./SubmitButton";
import "./Form3.css";

const Form3 = () => {
  const [countryClass, setCountryClass] = useState("");
  const [firstAddressClass, setFirstAddressClass] = useState("");
  const [secondAddressClass, setSecondAddressClass] = useState("");
  const [provinceClass, setProvinceClass] = useState("");
  const [townClass, setTownClass] = useState("");
  const [zipClass, setZipClass] = useState("");
  const [countryCodeClass, setCountryCodeClass] = useState("");
  const [phoneClass, setPhoneClass] = useState("");

  const initialValues = {
    country: "",
    firstAddress: "",
    secondAddress: "",
    province: "",
    town: "",
    zip: "",
    form3CountryCode: "",
    form3Phone: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object().shape({
    country: Yup.string().trim().required("Please select a country"),
    firstAddress: Yup.string().trim().required("First address required"),
    secondAddress: Yup.string().trim().required("Second address required"),
    province: Yup.string()
      .trim()
      .required("Province required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    town: Yup.string()
      .trim()
      .required("Town required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    zip: Yup.number()
      .required("Zip Code required")
      .max(999999, "Invalid Zip Code"),
    form3Phone: Yup.number()
      .required("Phone number required")
      .max(9999999999, "Invalid Phone number"),
    form3CountryCode: Yup.string().trim().required("Please select a code"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        formik.touched.country && formik.errors.country
          ? setCountryClass("error-border")
          : setCountryClass("");
        formik.touched.firstAddress && formik.errors.firstAddress
          ? setFirstAddressClass("error-border")
          : setFirstAddressClass("");
        formik.touched.secondAddress && formik.errors.secondAddress
          ? setSecondAddressClass("error-border")
          : setSecondAddressClass("");
        formik.touched.province && formik.errors.province
          ? setProvinceClass("error-border")
          : setProvinceClass("");
        formik.touched.town && formik.errors.town
          ? setTownClass("error-border")
          : setTownClass("");
        formik.touched.zip && formik.errors.zip
          ? setZipClass("error-border")
          : setZipClass("");
        formik.touched.form3CountryCode && formik.errors.form3CountryCode
          ? setCountryCodeClass("error-border")
          : setCountryCodeClass("");
        formik.touched.form3Phone && formik.errors.form3Phone
          ? setPhoneClass("error-border")
          : setPhoneClass("");

        return (
          <Form className="form-3">
            <Label htmlFor="country" text="Country*" />
            <Field
              as="select"
              className={`${countryClass} country`}
              id="country"
              name="country"
            >
              <option value="">Select Country</option>
              {Data.map((curr, ind) => {
                return <option value={curr.name}>{curr.name}</option>;
              }, this)}
            </Field>
            <div className="form3-error-container">
              <ErrorMessage
                name="country"
                className="form-3-error"
                component="div"
              />
            </div>

            <Label htmlFor="firstAddress" text="First line address*" />
            <Field
              className={`${firstAddressClass} normal`}
              type="text"
              placeholder="First line address"
              name="firstAddress"
              maxLength="40"
              id="firstAddress"
            />
            <div className="form3-error-container">
              <ErrorMessage
                name="firstAddress"
                className="form-3-error"
                component="div"
              />
            </div>

            <Label htmlFor="secondAddress" text="Second line address*" />
            <Field
              className={`${secondAddressClass} normal`}
              type="text"
              placeholder="Second line address"
              name="secondAddress"
              maxLength="40"
              id="secondAddress"
            />
            <div className="form3-error-container">
              <ErrorMessage
                name="secondAddress"
                className="form-3-error"
                component="div"
              />
            </div>

            <div className="province-town-container">
              <div>
                <Label htmlFor="province" text="State/Province*" />
                <Field
                  className={`${provinceClass} province`}
                  type="text"
                  placeholder="State"
                  name="province"
                  maxLength="15"
                  id="province"
                />
                <div className="form3-error-container">
                  <ErrorMessage
                    name="province"
                    className="form-3-error"
                    component="div"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="town" text="City/Town*" />
                <Field
                  className={`${townClass} town`}
                  type="text"
                  placeholder="City"
                  name="town"
                  maxLength="15"
                  id="town"
                />
                <div className="form3-error-container">
                  <ErrorMessage
                    name="town"
                    className="form-3-error"
                    component="div"
                  />
                </div>
              </div>
            </div>
            <Label htmlFor="zip" text="Zip code/Post code*" />
            <Field
              className={`${zipClass} normal`}
              type="number"
              placeholder="Zip code"
              name="zip"
              id="zip"
            />
            <div className="form3-error-container">
              <ErrorMessage
                name="zip"
                className="form-3-error"
                component="div"
              />
            </div>

            <div className="country-phone-container">
              <div>
                <Label htmlFor="form3CountryCode" text="Country code*" />
                <Field
                  className={`${countryCodeClass} country-code`}
                  as="select"
                  name="form3CountryCode"
                  id="form3CountryCode"
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
                <div className="form3-error-container">
                  <ErrorMessage
                    name="form3CountryCode"
                    className="form-3-error"
                    component="div"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="form3Phone" text="Phone number*" />
                <Field
                  className={`${phoneClass} phone`}
                  type="number"
                  placeholder="Phone number"
                  name="form3Phone"
                  id="form3Phone"
                />
                <div className="form3-error-container">
                  <ErrorMessage
                    name="form3Phone"
                    className="form-3-error"
                    component="div"
                  />
                </div>
              </div>
            </div>
            <div>
              <SubmitButton
                className="form3-submit"
                type="submit"
                text="CONTINUE"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form3;
