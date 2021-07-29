import React from "react";
import LayoutHead from "./Layout/LayoutHead";
import SevkConsumer from "../store/context";
export default function LayoutRight() {
  const toggleShare = (dispatch) => {
    dispatch({
      type: "toggleShare",
      payload: false,
    });
  };
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowLayoutRight,dispatch } = value;
        return ShowLayoutRight ? (
          <div className="BaseDrive effect RightLayout">
            <LayoutHead click={toggleShare.bind(this,dispatch)} text="Paylaş" />
            <div className="col-md-12 fleft">
              <div className="LayoutType">
                {CreateShareBtn("OutlookLogo", "E-posta Gönder")}
                {CreateShareBtn("OneDrive", "Kaydet")}
                {CreateShareBtn("WordLogo", "WhatsApp ile Gönder")}
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
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
