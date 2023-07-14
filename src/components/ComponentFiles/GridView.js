import React from "react";
import SevkConsumer from "../../store/context";
import {  ico, Thumb } from "./../Tools/Urls";
import Download from "./Download";
import moment from "moment";

function Grid(Delete, hideDelete, showDelete, F, showPreview, url, Type) {
  return (
    <div
      onMouseOut={() => hideDelete(F.Id)}
      onMouseOver={() => showDelete(F.Id)}
      className="Container_grid"
    >
      <div onClick={() => showPreview(F, Type)} className="Grid_Detail">
        <a className="LinkContainer">
          <div className="FileTypeIcon ImageContainer">
            <img className="FileTypeIcon-icon" alt="" src={url} />
          </div>
          <span className="FileNameContainer">
            <span>{F.FileName}</span>
          </span>
          <span className="DateContainer">
            {
            moment( F.CreatedDate).format('d.mm.yy hh:mm')
            }
          </span>
        </a>
      </div>
      <i
        id={`Delete${F.Id}`}
        onClick={() => Delete(F.Id)}
        className="Delete controlIcons"
      >
        
      </i>
      <Download File={F} />
    </div>
  );
}
export default function GridView() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Files, dispatch } = value;
        const showDelete = (identity) => {
          let id = "Delete" + identity;
          let deletebtn = document.getElementById(id);
          deletebtn.style.display = "block";
        };
        const hideDelete = (identity) => {
          let id = "Delete" + identity;
          let deletebtn = document.getElementById(id);
          deletebtn.style.display = "none";
        };
        const showPreview = (File, type) => {
          dispatch({
            type: "show" + type + "Preview",
            payload: File,
          });
        };
        const Delete = (id) => {
          dispatch({
            type: "DeleteFile",
            payload: id,
          });
        };
        return (
          <div className="col-md-12">
            {Files.map((F) => (
            
              <div key={F.Id} className="col-md-3 col-lg-2 col-xs-4 padd0">
                {F.Type === "Picture"
                  ? Grid(
                      Delete,
                      hideDelete,
                      showDelete,
                      F,
                      showPreview,
                      Thumb + F.Path,
                      "Picture"
                    )
                  : Grid(
                      Delete,
                      hideDelete,
                      showDelete,
                      F,
                      showPreview,
                      `${ico + F.ext}.png`,
                      "Document"
                    )}
              </div>
            ))}
          </div>
        );
      }}
    </SevkConsumer>
  );
}