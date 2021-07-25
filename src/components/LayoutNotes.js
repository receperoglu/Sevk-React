import React from "react";
import CancelBtn from "./Tools/CancelBtn";
export default function LayoutNotes({
  isShowLayoutNote,
  CancelNote,
  UpdateArticelNote,
  ArticelNotes,
  SaveNotes,
}) {
  return isShowLayoutNote ? (
    <div className="effect RightLayout">
      <div className="col-xs-12">
        <div className="col-xs-8 padd0">
          <h3 className="LayoutHead padd10">Not</h3>
        </div>
        <div className="col-xs-4 padd0 cancelcontainer text-left">
          <CancelBtn click={CancelNote} />
        </div>
      </div>
      <div className="col-md-12 fleft">
        <div className="LayoutType">
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
  ) : null;
}
