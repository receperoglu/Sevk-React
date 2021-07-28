import React from "react";
import LayoutHead from "./Layout/LayoutHead";
 export default function LayoutRight({ CancelShare, isShowLayoutRight }) {
  return isShowLayoutRight ? (
    <div className="BaseDrive effect RightLayout">
     <LayoutHead click={CancelShare} text="Paylaş"/>
      <div className="col-md-12 fleft">
        <div className="LayoutType">
          {CreateShareBtn("OutlookLogo", "E-posta Gönder")}
          {CreateShareBtn("OneDrive", "Kaydet")}
          {CreateShareBtn("WordLogo", "WhatsApp ile Gönder")}
        </div>
      </div>
    </div>
  ) : null;
}
function CreateShareBtn(icon, text) {
  return (
    <span className="BaseDriveContainer">
      <span className={`DriveIcon ms-svg-Icon ms-Icon--${icon}`}></span>
      <div className="DriveTextContainer">
        <span>{text}</span>
      </div>
    </span>
  );
}
