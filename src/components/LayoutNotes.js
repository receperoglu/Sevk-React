import React from "react";
import LayoutHead from "./Layout/LayoutHead";
import SevkConsumer from "../store/context";
import BlueButton from "./Tools/BlueButton";
export default function LayoutNotes() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowLayoutNote, ArticelNotes, dispatch } = value;
        const UpdateArticelNote = (input) => {
          dispatch({ type: "UpdateArticelNote", payload: input });
        };
        const toggleNote = () => {
          dispatch({
            type: "toggleNote",
            payload: false,
          });
        };
        const SaveNotes = () => {
          dispatch({
            type: "SaveNotes",
            payload: false,
          });
        };
        return ShowLayoutNote ? (
          <div className="effect RightLayout">
            <LayoutHead click={toggleNote} text="Notlar" />
            <div className="col-md-12 fleft">
              <div className="LayoutType">
                <input
                  type="text"
                  defaultValue={ArticelNotes}
                  onChange={UpdateArticelNote}
                  style={{ width: "100%", height: "250px" }}
                  className="NotesArea  ms-TextField-field"
                  multiple
                />
                <BlueButton text="Güncelle" click={SaveNotes} />
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
