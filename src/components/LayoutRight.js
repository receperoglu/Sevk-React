import React from "react";
import CancelBtn from "./Tools/CancelBtn";
export default function LayoutRight({ CancelShare, isShowLayoutRight }) {
  return isShowLayoutRight ? (
    <div className="BaseDrive effect RightLayout">
      <div className=" nopad col-xs-12">
        <div className="col-xs-8 padd0">
          <h3 className="LayoutHead padd10">Paylaş</h3>
        </div>
        <div className="col-xs-4 padd0 cancelcontainer text-center">
          <CancelBtn click={CancelShare} />
        </div>
      </div>
      <div className="col-md-12 fleft">
        <div className="LayoutType">
          <span className="BaseDriveContainer">
            <span className="ms-Icon--OutlookLogo DriveIcon ms-svg-Icon"></span>
            <div className="DriveTextContainer">
              <span>E-Posta Gönder</span>
            </div>
          </span>
          <span className="BaseDriveContainer">
            <span className="ms-Icon--OneDrive DriveIcon ms-svg-Icon  "></span>
            <div className="DriveTextContainer">
              <span>Kaydet</span>
            </div>
          </span>
          <span className="BaseDriveContainer">
            <span className="ms-Icon--WordLogo DriveIcon ms-svg-Icon"></span>
            <div className="DriveTextContainer">
              <span>WhatsApp ile Gönder</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  ) : null;
}
