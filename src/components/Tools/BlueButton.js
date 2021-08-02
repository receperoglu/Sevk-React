import React from "react";
export default function BlueButton({ text, click }) {
  return (
    <span className="TransferBTN ms-Button ms-Button--primary">
      <span onClick={() => click()}>{text}</span>
    </span>
  );
}