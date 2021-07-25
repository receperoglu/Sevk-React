import React from "react";
export default function MenuItem({ click, icon, symbol, text,iconclassname }) {
  return (
    <div className="TopBarObject" onClick={() => click()}>
      <button type="button" className="ms-Button--commandBar">
        <div className="ms-Button-flexContainer ">
          <i data-icon-name={icon} className={iconclassname }>
            {symbol}
          </i>
          <div className="ms-Button-textContainer ">
            <div>{text}</div>
          </div>
        </div>
      </button>
    </div>
  );
}
