"use client";
import React from "react";
import "@/styles/job-popup.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import usePopupStore from "@/stores/popupStore";

function JobPopup() {
  const { jobsPopupDisplay, setJobsPopupDisplay, jobValue } = usePopupStore();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    position: Yup.string().required("This field is required."),
    //resume: Yup.mixed(),
    //portfolio: Yup.mixed(),
    //comments: Yup.string(),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    position: jobValue || "",
    resume: null,
    portfolio: null,
    comments: "",
  };

  const closePopup = (resetForm) => {
    setJobsPopupDisplay(false);
    resetForm();
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    const valuesWithService = {
      ...values,
      service: `${jobValue} Request`,
    };

    console.log("Form values being submitted: ", valuesWithService);

    setSubmitting(false);
    resetForm();
    setStatus({ success: true });
  };

  return (
    <div className={`job-popup-wrap ${jobsPopupDisplay ? "opened" : ""}`}>
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
            <div>
              <div
                className="overlay"
                onClick={() => closePopup(resetForm)}
              ></div>
              <div className="popup-inner">
                <img
                  src="/images/close.svg"
                  className="popup-close"
                  alt="popup-close"
                  onClick={() => closePopup(resetForm)}
                />
                <div className="request-form">
                  {status && status.success ? (
                    <div className="success">
                      <img src="/images/success.svg" alt="success" />
                      <h3>
                        Thank you for choosing <br />
                        Brandedify!
                      </h3>
                      <p>Our representative will reach out to you shortly.</p>
                    </div>
                  ) : (
                    <>
                      <h2>Application form</h2>
                      <p>
                        Ready to join the Brandedify team? Fill out the form
                        below to submit your application!
                      </p>
                      <Form>
                        {/* Full Name Field */}
                        <div className="input-wrap">
                          <label>Full name</label>
                          <Field
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className={
                              touched.fullName && errors.fullName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="error"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="input-wrap">
                          <label>Email</label>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        {/* Phone Number Field */}
                        <div className="input-wrap">
                          <label>Phone number</label>
                          <PhoneInput
                            country={countryCode}
                            value={values.phone || ""}
                            onChange={(value) =>
                              setFieldValue("phone", value)
                            }
                            placeholder="Enter your phone number"
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage name="phone" component="span" />
                        </div>

                        {/* Position Field */}
                        <div className="input-wrap">
                          <label>Desired position</label>
                          <Field
                            name="position"
                            type="text"
                            value={jobValue || ""}
                            readOnly
                            placeholder="Enter your desired position"
                            className={
                              touched.position && errors.position
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="position"
                            component="div"
                            className="error"
                          />
                        </div>

                        {/* Resume Upload */}
                        <div className="file-wrap">
                          <label>Upload Resume</label>
                          <div
                            className="upload-custom"
                            onClick={() =>
                              document.getElementById("resume").click()
                            }
                          >
                            <img src="/images/contact/upload.svg" alt="upload" />
                            <label>Choose file</label>
                            <span>
                              {values.resume
                                ? values.resume.name
                                : "PDF or Word"}
                            </span>
                            <input
                              type="file"
                              id="resume"
                              style={{ display: "none" }}
                              onChange={(event) => {
                                const resume = event.target.files[0];
                                setFieldValue("resume", resume || null);
                              }}
                            />
                            <ErrorMessage
                              name="resume"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>

                        {/* Portfolio Upload */}
                        <div className="file-wrap">
                          <label>Upload Portfolio (if applicable)</label>
                          <div
                            className="upload-custom"
                            onClick={() =>
                              document.getElementById("portfolio").click()
                            }
                          >
                            <img src="/images/contact/upload.svg" alt="upload" />
                            <label>Choose file</label>
                            <span>
                              {values.portfolio
                                ? values.portfolio.name
                                : "PDF or Word"}
                            </span>
                            <input
                              type="file"
                              id="portfolio"
                              style={{ display: "none" }}
                              onChange={(event) => {
                                const portfolio = event.target.files[0];
                                setFieldValue("portfolio", portfolio || null);
                              }}
                            />
                            <ErrorMessage
                              name="portfolio"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>

                        {/* Comments Field */}
                        <div className="input-wrap full">
                          <label>Additional comments/questions</label>
                          <Field
                            name="comments"
                            type="text"
                            placeholder="Enter your comments or questions"
                            className={
                              touched.comments && errors.comments
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="comments"
                            component="div"
                            className="error"
                          />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" disabled={isSubmitting}>
                          Send
                        </button>
                      </Form>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default JobPopup;
