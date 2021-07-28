import React from "react";
import CancelBtn from "./../Tools/CancelBtn";
export default function LayoutHead({ text, click }) {
  return (
    <div className=" nopad col-xs-12">
      <div className="col-xs-8 padd0">
        <h3 className="LayoutHead padd10">{text}</h3>
      </div>
      <div className="col-xs-4 padd0 cancelcontainer text-center">
        <CancelBtn click={click} />
      </div>
    </div>
  );
}
