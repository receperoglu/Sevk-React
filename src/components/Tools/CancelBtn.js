import React from "react";
export default function CancelBtn({ click, cssclass }) {
  return (
    <i
      data-icon-name="Cancel"
      onClick={() => click()}
      className={cssclass + " pointer fright  icon-73 "}
    >
      
    </i>
  );
}