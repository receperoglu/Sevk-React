import React from "react";
function getIcon(name, symbol) {
  return (
    <i data-icon-name={name} className="cwhite FabricMDL2Icons fright">
      {symbol}
    </i>
  );
}
export default function Arrow({ Direction }) {
  return Direction
    ? getIcon("ChevronUp", "")
    : getIcon("ChevronDown", "");
}
