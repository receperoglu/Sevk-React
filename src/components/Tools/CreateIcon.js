import React from "react";
export default function CreateIcon({ click, symbol, iconname }) {
  return (
    <i onClick={click} data-icon-name={iconname} role="presentation">
      {symbol}
    </i>
  );
}