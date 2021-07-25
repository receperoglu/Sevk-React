import React from "react";
export default function ProgressBar({ isVisible }) {
  return (
    <div
      className={
        isVisible ? "show ProgressSpinnerFlat" : "opaq0 ProgressSpinnerFlat"
      }
      role="progressbar"
    >
      <div>•</div>
      <div>•</div>
      <div>•</div>
      <div>•</div>
      <div>•</div>
      <div>•</div>
      <div>•</div>
    </div>
  );
}
