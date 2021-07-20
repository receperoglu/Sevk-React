import React from 'react';

export default function ProgressBar(props) {
  return (
    <div
          className={
          props.isVisible
              ? "show ProgressSpinnerFlat"
              : "opaq0 ProgressSpinnerFlat"
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
