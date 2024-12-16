"use client";
import React from "react";
import usePopupStore from "@/stores/popupStore";

function JobButton({ position }) {
  const { setJobsPopupDisplay, setJobValue } = usePopupStore();

  const orderPopupOpen = () => {
    setJobValue(position);
    setJobsPopupDisplay(true);
  };
  return (
    <>
      <button onClick={() => orderPopupOpen()}>
        <span>Submit your resume</span>
      </button>
    </>
  );
}

export default JobButton;
