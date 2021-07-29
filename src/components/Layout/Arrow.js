import React from "react";
export default function Arrow({ Direction }) {
  return Direction
    ? getIcon("ChevronUp", "")
    : getIcon("ChevronDown", "");
}
function getIcon(name, symbol) {
  return (
    <i data-icon-name={name} className="FabricMDL2Icons fright">
      {symbol}
    </i>
  );
}
