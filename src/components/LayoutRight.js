import React from "react";
export default function LayoutRight({ CancelShare, isShowLayoutRight }) {
  return isShowLayoutRight ? (
    <div className="BaseDrive effect RightLayout">
      <div className=" nopad col-xs-12">
        <div className="col-xs-8 padd0">
          <h3 className="LayoutHead padd10">Paylaş</h3>
        </div>
        <div
          style={{ lineHeight: "102px" }}
          className="col-xs-4 padd0 text-center"
        >
          <i
            data-icon-name="Cancel"
            onClick={() => CancelShare()}
            role="presentation"
            className="pointer   icon-73"
          >
            
          </i>
        </div>
      </div>
      <div className="col-md-12 fleft">
        <div className="LayoutType" style={{ display: "inline" }}>
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
