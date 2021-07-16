import React from "react";

export default function LayoutNote(props) {
  return (
    <div
      id="LayoutNote"
      className={props.isShowLayoutNote ? "BaseDrive RightLayout" : "hide"}
    >
      <div className="_3vMrdRZR8bo5hSiJS8JJ8C nopad col-md-12">
        <div className="col-md-8">
          <h3 className="LayoutHead ">Sipariş Notu</h3>
        </div>

        <div className="col-md-4">
          <i
            data-icon-name="Cancel"
            onClick={() => props.CancelNote()}
            role="presentation"
            className="pointer shareclose ms-Button-icon icon-73"
          >
            
          </i>
        </div>
      </div>
      <div className="col-md-12 fleft">
        <div className="LayoutType" id="Notes" style={{ display: "block" }}>
          <h5> Not Almanız gerekenleri yazın</h5>
          <textarea
            className="NotesArea  ms-TextField-field"
            style={{ width: "100%", height: "250px" }}
            value={props.ArticelNotes}
            onChange={(e) => props.UpdateArticelNote(e.target.value)}
          ></textarea>
          <hr />
          <div
            onClick={() => props.SaveNotes()}
            className="btn btn-block btn-success"
          >
            Güncelle
          </div>
        </div>
      </div>
    </div>
  );
}
