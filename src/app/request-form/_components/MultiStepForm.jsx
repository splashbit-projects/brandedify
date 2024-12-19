"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import useRequestFormStore from "@/stores/requestFormStore";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import usePopupStore from "@/stores/popupStore";

const MultiStepForm = () => {
  const { step, setStep } = useRequestFormStore();
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const countryCode = useCountryCode();
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();

  // Initial Values
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    service: [],
    otherService: "",
    budget: "",
    goals: "",
    age: "",
    gender: "",
    location: "",
    interests: "",
    timeline: "",
    contactMethod: [],
    file: null,
  };

  // Validation Schemas
  const stepValidations = [
    Yup.object({
      fullName: Yup.string().required("This field is required!"),
      email: Yup.string()
        .email("Invalid email address.")
        .required("This field is required!"),
      phone: Yup.string().required("This field is required!"),
      companyName: Yup.string().required("This field is required!"),
      website: Yup.string().url("Invalid URL").optional(),
    }),
    Yup.object({
      service: Yup.array().min(1, "Please select at least one service!"),
      budget: Yup.string().required("Please select a budget!"),
    }),
    Yup.object({
      age: Yup.string().required("This field is required!"),
      gender: Yup.string().required("This field is required!"),
      location: Yup.string().required("This field is required!"),
      interests: Yup.string().required("This field is required!"),
      timeline: Yup.string().required("Please select a timeline!"),
    }),
    Yup.object({
      contactMethod: Yup.array().min(
        1,
        "Please select at least one contact method!"
      ),
      file: Yup.mixed()
        .required("A file is required!")
        .test(
          "fileSize",
          "File size must be less than 10MB",
          (value) => !value || (value && value.size <= 10 * 1024 * 1024)
        )
        .test(
          "fileType",
          "Unsupported file format. Allowed formats: PDF, DOC, DOCX",
          (value) =>
            !value ||
            (value &&
              [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              ].includes(value.type))
        ),
    }),
  ];

  // Step Content
  const stepsContent = [
    <>
      <h2>Business Data</h2>
      <div className="form-row">
        <div className="input-wrap">
          <label>Full Name</label>
          <Field name="fullName" placeholder="Enter your full name" />
          <ErrorMessage name="fullName" component="div" className="error" />
        </div>
        <div className="input-wrap">
          <label>Email Address</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <ErrorMessage name="email" component="div" className="error" />
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
          <ErrorMessage name="phone" component="div" className="error" />
        </div>
        <div className="input-wrap">
          <label>Company Name</label>
          <Field name="companyName" placeholder="Enter your company name" />
          <ErrorMessage name="companyName" component="div" className="error" />
        </div>
        <div className="input-wrap">
          <label>Your Website (optional)</label>
          <Field name="website" placeholder="Enter your website URL" />
          <ErrorMessage name="website" component="div" className="error" />
        </div>
      </div>
    </>,
    <>
      <h2>Marketing Data</h2>
      <div className="checkbox-wrap">
        <label>Select the Service You’re Interested In</label>
        <div>
          {[
            "SEO Optimization",
            "PPC Advertising",
            "Social Media Marketing",
            "Content Marketing",
            "Email Marketing",
            "Marketing Automation",
            "Other",
          ].map((service) => (
            <div key={service}>
              <label htmlFor={service}>{service}</label>
              <Field
                type="checkbox"
                name="service"
                value={service}
                id={service}
              />
            </div>
          ))}
          {isOtherSelected && (
            <div className="input-wrap">
              <label>Specify Other Service</label>
              <Field name="otherService" placeholder="Please specify" />
              <ErrorMessage
                name="otherService"
                component="div"
                className="error"
              />
            </div>
          )}
        </div>
        <Field name="service">
          {({ field }) => {
            const isOtherSelected = field.value.includes("Other");
            return (
              isOtherSelected && (
                <div className="input-wrap">
                  <Field name="otherService" placeholder="Please specify" />
                  <ErrorMessage
                    name="otherService"
                    component="div"
                    className="error"
                  />
                </div>
              )
            );
          }}
        </Field>
        <ErrorMessage name="service" component="div" className="error" />
      </div>
      <div className="radio-wrap">
        <label>Your Budget Range</label>
        <div>
          {[
            "Under €1,000",
            "€1,000 - €5,000",
            "€5,000 - €10,000",
            "€10,000 - €20,000",
            "€20,000+",
          ].map((budget) => (
            <div key={budget}>
              <label htmlFor={budget}>{budget}</label>
              <Field type="radio" name="budget" value={budget} id={budget} />
            </div>
          ))}
        </div>
        <ErrorMessage name="budget" component="div" className="error" />
      </div>
      <div className="textarea-wrap">
        <label>Project Goals/Challenges</label>
        <Field
          as="textarea"
          name="goals"
          placeholder="Tell us about your goals or challenges"
        />
        <ErrorMessage name="goals" component="div" className="error" />
      </div>
    </>,
    <>
      <h2>Target Audience</h2>
      <div className="form-row">
        <div className="input-wrap">
          <label>Age</label>
          <Field name="age" placeholder="Enter age" />
          <ErrorMessage name="age" component="div" className="error" />
        </div>
        <div className="input-wrap">
          <label>Gender</label>
          <Field name="gender" placeholder="Enter gender" />
          <ErrorMessage name="gender" component="div" className="error" />
        </div>
        <div className="input-wrap">
          <label>Location</label>
          <Field name="location" placeholder="Enter location" />
          <ErrorMessage name="location" component="div" className="error" />
        </div>
        <div className="input-wrap">
          <label>Interests</label>
          <Field name="interests" placeholder="Enter interests" />
          <ErrorMessage name="interests" component="div" className="error" />
        </div>
      </div>
      <div className="radio-wrap">
        <label>Timeline</label>
        <div>
          {[
            "Within 1 Month",
            "1-3 Months",
            "3-6 Months",
            "Flexible Timeline",
          ].map((timeline) => (
            <div key={timeline}>
              <label htmlFor={timeline}>{timeline}</label>
              <Field
                type="radio"
                name="timeline"
                value={timeline}
                id={timeline}
              />
            </div>
          ))}
        </div>
        <ErrorMessage name="timeline" component="div" className="error" />
      </div>
    </>,
    <>
      <h2>Preferred Contact Method</h2>
      <div className="checkbox-wrap">
        <label>Contact Method</label>
        <div>
          {["Email", "Phone", "Video Call"].map((method) => (
            <div key={method}>
              <label htmlFor={method}>{method}</label>
              <Field
                type="checkbox"
                name="contactMethod"
                value={method}
                id={method}
              />
            </div>
          ))}
        </div>
        <ErrorMessage name="contactMethod" component="div" className="error" />
      </div>
      <div className="file-wrap">
        <Field name="file">
          {({ field, form }) => (
            <>
              <label>File Upload *</label>
              <div
                className="upload-custom"
                onClick={() => document.getElementById("file").click()}
              >
                <img src="/images/request-form/upload.svg" />
                <label>Choose file</label>
                <span>
                  {field.value
                    ? field.value.name
                    : "Attach any relevant documents, proposals, or briefs (Max size: 10MB)"}
                </span>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    form.setFieldValue("file", file || null);
                  }}
                />
                 <ErrorMessage name="file" component="div" className="error" />
              </div>
             
            </>
          )}
        </Field>
      </div>
    </>,
  ];

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    if (step === stepsContent.length) {
      setStep(1);
      resetForm();
      setStatus({ success: true });
      console.log("Form submitted", values);
      setThanksPopupDisplay(true);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={stepValidations[step - 1]}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className="step-content">{stepsContent[step - 1]}</div>
          <div className="buttons">
            <button
              type="button"
              className={`${step == 1 ? "disabled" : ""} back`}
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
            <button type="submit" className="main-button">
              {step === stepsContent.length ? "Submit Inquiry" : "Next Step"}
              <img src="/images/arrow.svg" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
