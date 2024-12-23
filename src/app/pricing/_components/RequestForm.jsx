"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import Select from "react-select";

const RequestForm = ({ packageValue }) => {
  const countryCode = typeof window !== "undefined" ? useCountryCode() : "us";

  const packages = [
    { value: "Starter Package", label: "Starter Package" },
    { value: "Growth Package", label: "Growth Package" },
    { value: "Premium Package", label: "Premium Package" },
    { value: "Enterprise Package", label: "Enterprise Package" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#030A1D",
      height: "46px",
      borderRadius: "8px",
      background: "#ffffff",
      border: state.isFocused ? "1px solid #ffffff" : "1px solid #ffffff",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 18px",
      boxShadow: "unset",
      "&:hover": {
        borderColor: "#ffffff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "46px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "46px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#0d0d0d",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#0d0d0d",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      "> span": {
        display: "none",
      },
      "> div": {
        padding: "0",
        width: "16px",
        height: "16px",
        backgroundImage: "url(/images/selectArrow.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      "> div > svg": {
        display: "none",
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#ffffff0d",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#fff" : "#fff",
      color: "#0d0d0d",
      "&:hover": {
        background: "#6F6FF9",
        color: "#ffffff",
      },
    }),
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    companyName: Yup.string().required("This field is required!"),
    website: Yup.string().url("Invalid URL").optional(),
    service: Yup.string().required("This field is required!"),
    budget: Yup.string().required("Please select a budget!"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    service: packageValue,
    budget: "",
    message: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    console.log("Form values being submitted: ", values);

    setSubmitting(false);
    resetForm();
    setStatus({ success: true });
  };

  return (
    <div className="request-form">
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
          values,
        }) => {
          return (
            <>
              <Form>
                <div className="select-wrap">
                  <Select
                    name="service"
                    options={packages}
                    styles={customStyles}
                    className={`form-field ${
                      touched.service && errors.service ? "invalid" : ""
                    }`}
                    onChange={(option) =>
                      setFieldValue("service", option.value)
                    }
                    placeholder="Select Package Name"
                    instanceId="service-select"
                    value={packages.find(
                      (pkg) => pkg.value === packageValue
                    )}
                  />

                  <ErrorMessage
                    name="service"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrap">
                  <label>Full Name</label>
                  <Field name="fullName" placeholder="Enter your full name" />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrap">
                  <label>Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrap">
                  <label>Phone Number</label>
                  <Field name="phone">
                    {({ field, form }) => (
                      <PhoneInput
                        country={countryCode}
                        value={field.value}
                        onChange={(value) => form.setFieldValue("phone", value)}
                        placeholder="Enter your phone number"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrap">
                  <label>Company Name</label>
                  <Field
                    name="companyName"
                    placeholder="Enter your company name"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrap">
                  <label>Your Website</label>
                  <Field name="website" placeholder="Enter your website URL" />
                  <ErrorMessage
                    name="website"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrap">
                  <label>Budget</label>
                  <Field name="budget" placeholder="Enter your budget" />
                  <ErrorMessage
                    name="budget"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrap">
                  <label>Message</label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Tell us about your goals or challenges"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                  <img src="/images/arrow.svg" />
                </button>
              </Form>
              {status && status.success ? (
                <div className="success-wrap">
                  <div className="success">
                    <img src="/images/success.svg" alt="success" />
                    <h3>Thank you!</h3>
                    <p>
                      Your request for our service package has been successfully
                      submitted. Our team will review the information provided
                      and get in touch with you shortly to discuss the next
                      steps and how we can assist you.
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default RequestForm;
