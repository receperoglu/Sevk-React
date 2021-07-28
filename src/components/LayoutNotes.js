import React from "react";
 export default function LayoutNotes({
  isShowLayoutNote,
  CancelNote,
  UpdateArticelNote,
  ArticelNotes,
  SaveNotes,
}) {
  return isShowLayoutNote ? (
    <div className="effect RightLayout">
      <LayoutHead click={CancelNote} text="Notlar" />
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