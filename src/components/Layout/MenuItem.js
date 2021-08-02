import React from "react";
export default function MenuItem({ click, icon, symbol, text, iconclassname }) {
  return (
    <button
      type="button"
      onClick={() => click()}
      className="ms-Button--commandBar"
    >
      <i className={iconclassname}>{symbol}</i>
      <div className="ms-Button-textContainer ">
        <div>{text}</div>
      </div>
    </button>
  );
}
