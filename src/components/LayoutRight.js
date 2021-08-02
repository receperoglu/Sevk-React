import React from "react";
import LayoutHead from "./Layout/LayoutHead";
import SevkConsumer from "../store/context";
function CreateShareBtn(icon, text) {
  return (
    <span className="BaseDriveContainer">
      <span className={`DriveIcon ms-svg-Icon ms-Icon--${icon}`}/>
      <div className="DriveTextContainer">
        <span>{text}</span>
      </div>
    </span>
  );
}
export default function LayoutRight() {  
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowLayoutRight, dispatch } = value;
        const toggleShare = () => {
          dispatch({
            type: "toggleShare",
            payload: false,
          });
        };
        return ShowLayoutRight ? (
          <div className="BaseDrive effect RightLayout">
            <LayoutHead
              click={toggleShare}
              text="Paylaş"
            />
            <div className="col-md-12 fleft">
              {CreateShareBtn("OutlookLogo", "E-posta Gönder")}
              {CreateShareBtn("OneDrive", "Kaydet")}
              {CreateShareBtn("WordLogo", "WhatsApp ile Gönder")}
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}