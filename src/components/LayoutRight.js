import React from "react";

export default function LayoutRight(props) {
  return (
    <div
      id="LayoutRight"
      className={props.isLayoutRight ? "BaseDrive" : "hide"}
    >
      <div className="_3vMrdRZR8bo5hSiJS8JJ8C nopad col-md-12">
        <div className="col-md-8">
          <h2 className="LayoutHead ">Paylaş</h2>
        </div>

        <div className="col-md-4">
          <i
            data-icon-name="Cancel"
            onClick={() => props.CancelShare()}
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