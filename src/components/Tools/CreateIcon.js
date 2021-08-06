import React from "react";
export default function CreateIcon({ click, symbol, iconname,attr }) {
  return (
    <i onClick={click} data-icon-name={iconname} className={attr?attr:""} role="presentation">
      {symbol}
    </i>
  );
}