import React from "react";

export default function Arrow({ Direction }) {
  return Direction ? (
    <i data-icon-name="ChevronUp" className="FabricMDL2Icons fright">
      
    </i>
  ) : (
    <i data-icon-name="ChevronDown" className="FabricMDL2Icons fright">
      
    </i>
  );
}
