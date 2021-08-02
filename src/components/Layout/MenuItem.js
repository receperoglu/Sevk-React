import React from "react";
export default function MenuItem({ click, symbol, text, iconclassname }) {
  return (
    <button
      type="button"
      onClick={() => click()}
      className="commandBtn"
    >
      <i className={iconclassname}>{symbol}</i>
      <div className="textContainer">
        <div>{text}</div>
      </div>
    </button>
  );
}
