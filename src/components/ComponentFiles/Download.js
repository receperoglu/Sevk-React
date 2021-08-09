import React from "react";
 import { Url } from "./../../components/Tools/Urls";
export default function Download({ File }) {
  return (
    <a href={Url+File.Path} target="blank">
      <i data-icon-name="Download" className="FabricMDL2Icons">
        
      </i>
    </a>
  );
}