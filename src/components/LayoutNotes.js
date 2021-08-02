import React from "react";
import LayoutHead from "./Layout/LayoutHead";
import SevkConsumer from "../store/context";
import BlueButton from "./Tools/BlueButton";
export default function LayoutNotes() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowLayoutNote, ArticelNotes, dispatch } = value;
        const UpdateArticelNote = (e) => {
          dispatch({ type: "UpdateArticelNote", payload: e.target.value });
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
                <textarea                  
                  onChange={UpdateArticelNote}                 
                  className="NotesArea  ms-TextField-field"
                >
                  {ArticelNotes}
                </textarea>
                <BlueButton text="Güncelle" click={SaveNotes} />
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
