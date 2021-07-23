import React from "react";
import ProgressBar from "./ProgressBar";

export default function FirstRun({IsFirstRun}) {
  return (
    <div className={IsFirstRun ? "show pagefirstloading" : "opaq0 hide"}>
      <div className="text-center">İlk açılış ayarlanıyor</div>
      <div className="prf ProgressSpinnerFlat" role="progressbar">
        <ProgressBar isVisible={true} />
      </div>
    </div>
  );
}
