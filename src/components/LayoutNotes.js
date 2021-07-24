import React from "react";
export default function LayoutNotes({  isShowLayoutNote,
  CancelNote,
  UpdateArticelNote,
  ArticelNotes,
  SaveNotes}) {
  return (
    <div
      id="LayoutNote"
      className={isShowLayoutNote ? "BaseDrive effect RightLayout" : "hide"}
    >
      <div className="_3vMrdRZR8bo5hSiJS8JJ8C nopad col-xs-12">
        <div className="col-xs-8 padd0">
          <h3 className="LayoutHead padd10">Not</h3>
        </div>
        <div style={{lineHeight:"102px"}} className="col-xs-4 padd0 text-center">
          <i
            data-icon-name="Cancel"
            onClick={() => CancelNote()}
            role="presentation"
            className="pointer   icon-73"
          >
            
          </i>
        </div>
      </div>
      <div className="col-md-12 fleft">
        <div className="LayoutType" id="ShareNow" style={{ display: "inline" }}>
        <textarea
            className="NotesArea  ms-TextField-field"
            style={{ width: "100%", height: "250px" }}
            value={ArticelNotes}
            onChange={(e) => UpdateArticelNote(e.target.value)}
          ></textarea>
           <div
            onClick={() => SaveNotes()}
            className="text-center Transfer btn-block TransferBTN ms-Button ms-Button--primary"
          >
            Güncelle
          </div>
        </div>
      </div>
    </div>
  );
}
