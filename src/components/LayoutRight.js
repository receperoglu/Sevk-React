import React from "react";
export default function LayoutRight({CancelShare,isShowLayoutRight}) {
  return (
    <div
      id="LayoutRight"
      className={isShowLayoutRight ? "BaseDrive RightLayout" : "hide"}
    >
      <div className="_3vMrdRZR8bo5hSiJS8JJ8C nopad col-xs-12">
        <div className="col-xs-8 padd0">
          <h3 className="LayoutHead padd10">Paylaş</h3>
        </div>
        <div className="col-xs-4 padd0 text-center">
          <i
            data-icon-name="Cancel"
            onClick={() => CancelShare()}
            role="presentation"
            className="pointer shareclose ms-Button-icon icon-73"
          >
            
          </i>
        </div>
      </div>
      <div className="col-md-12 fleft">
        <div className="LayoutType" id="ShareNow" style={{ display: "inline" }}>
          <span
            id="O365_AppTile_Mail sidepre"
            className="BaseDriveContainer ShareMail"
          >
            <div className="BaseDrive">
              <span className="ms-Icon--OutlookLogo DriveIcon ms-svg-Icon"></span>
            </div>
            <div className="DriveTextContainer">
              <span>E-Posta Gönder</span>
            </div>
          </span>
          <span id="O365_AppTile_Documents" className="BaseDriveContainer">
            <div className="BaseDrive" aria-hidden="true">
              <span className="ms-Icon--OneDrive DriveIcon ms-svg-Icon  "></span>
            </div>
            <div className="DriveTextContainer">
              <span>Kaydet</span>
            </div>
          </span>
          <span className="BaseDriveContainer sidepre ShareWhatsapp">
            <div className="BaseDrive" aria-hidden="true">
              <span className="ms-Icon--WordLogo DriveIcon ms-svg-Icon  "></span>
            </div>
            <div className="DriveTextContainer">
              <span>WhatsApp ile Gönder</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
