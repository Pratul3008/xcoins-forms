import React from "react";
import SubmitButton from "./SubmitButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form2.css";

const Form2 = () => {
  const initialValues = {
    number1: "",
    number2: "",
    number3: "",
    number4: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object().shape({
    number1: Yup.number().required("Please fill the entire code"),

    number2: Yup.number().required("Please fill the entire code"),

    number3: Yup.number().required("Please fill the entire code"),

    number4: Yup.number().required("Please fill the entire code"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        const moveToNext = (id1, id2) => {
          const curr = document.getElementById(id1);
          if (curr.value.length == 1) curr.type = "text";
          if (curr.value == "") document.getElementById(id1).focus();
          else if (curr.value >= curr.min) document.getElementById(id2).focus();
        };

        return (
          <Form className="form-2">
            <span className="form2-field-head">4 digit code</span>
            <div className="input-fields">
              <Field
                type="number"
                id="number1"
                name="number1"
                min="0"
                maxLength="1"
                onKeyUp={() => {
                  moveToNext("number1", "number2");
                }}
              />
              <Field
                type="number"
                id="number2"
                name="number2"
                min="0"
                maxLength="1"
                onKeyUp={() => {
                  moveToNext("number2", "number3");
                }}
              />
              <Field
                type="number"
                id="number3"
                name="number3"
                min="0"
                maxLength="1"
                onKeyUp={() => {
                  moveToNext("number3", "number4");
                }}
              />
              <Field
                type="number"
                id="number4"
                name="number4"
                min="0"
                maxLength="1"
                onKeyUp={() => {
                  moveToNext("number4", "number1");
                }}
              />
            </div>
            <div className="form2-error-container">
              <ErrorMessage
                name="number1"
                className="form2-error"
                component="div"
              />
            </div>

            <div>
              <SubmitButton
                className="form2-submit"
                id="form-6-sub"
                type="submit"
                text="RESEND CODE"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form2;
