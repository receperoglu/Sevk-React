import React from "react";

export default function LayoutNote({
  isShowLayoutNote,
  CancelNote,
  UpdateArticelNote,
  ArticelNotes,
  SaveNotes,
}) {
  return (
    <div
      id="LayoutNote"
      className={isShowLayoutNote ? "BaseDrive RightLayout" : "hide"}
    >
      <div className="_3vMrdRZR8bo5hSiJS8JJ8C nopad col-md-12">
        <div className="col-md-8 padd0">
          <h3 className="LayoutHead paddleft10">Sipariş Notu</h3>
        </div>

        <div className="col-md-4 padd0">
          <i
            data-icon-name="Cancel"
            onClick={() => CancelNote()}
            role="presentation"
            className="pointer shareclose fright ms-Button-icon icon-73"
          >
            
          </i>
        </div>
      </div>
      <div className="col-md-12 fleft">
        <div className="LayoutType" id="Notes" style={{ display: "block" ,padding:"10px"}}>
          <h5> Not Almanız gerekenleri yazın</h5>
          <textarea
            className="NotesArea  ms-TextField-field"
            style={{ width: "100%", height: "250px" }}
            value={ArticelNotes}
            onChange={(e) => UpdateArticelNote(e.target.value)}
          ></textarea>
          <hr />
          <div
            onClick={() => SaveNotes()}
            className="btn btn-block btn-success"
          >
            Güncelle
          </div>
        </div>
      </div>
    </div>
  );
}
