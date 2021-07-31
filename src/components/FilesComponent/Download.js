import React from "react";
import { BaseUrl } from "../../store/context";
export default function Download({ File }) {
  return (
    <a href={BaseUrl+File.Path} target="blank">
      <i data-icon-name="Download" className="FabricMDL2Icons">
        
      </i>
    </a>
  );
}
