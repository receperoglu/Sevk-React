import React from "react";
export default function CancelBtn({ click }) {
  return (
    <i
      data-icon-name="Cancel"
      onClick={() => click()}
      role="presentation"
      className="pointer fright  icon-73"
    >
      
    </i>
  );
}
