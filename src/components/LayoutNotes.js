import React from "react";
import LayoutHead from "./Layout/LayoutHead";
import SevkConsumer from "../store/context";
import BlueButton from "./Tools/BlueButton";
export default function LayoutNotes() {
  const toggleNote = (dispatch) => {
    dispatch({
      type: "toggleNote",
      payload: false,
    });
  };
  const SaveNotes = (dispatch) => {
    dispatch({
      type: "SaveNotes",
      payload: false,
    });
  };
  return (
    <SevkConsumer>
      {(value) => {
        const {
          ShowLayoutNote,
          UpdateArticelNote,
          ArticelNotes,

          dispatch,
        } = value;
        return ShowLayoutNote ? (
          <div className="effect RightLayout">
            <LayoutHead click={toggleNote.bind(this, dispatch)} text="Notlar" />
            <div className="col-md-12 fleft">
              <div className="LayoutType">
                <textarea
                  className="NotesArea  ms-TextField-field"
                  style={{ width: "100%", height: "250px" }}
                  value={ArticelNotes}
                  onChange={(e) => UpdateArticelNote(e.target.value)}
                ></textarea>
                <BlueButton
                  text="Güncelle"
                  click={SaveNotes.bind(this, dispatch)}
                />
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
