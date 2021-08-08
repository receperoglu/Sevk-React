import React from "react";
import SevkConsumer from "../../store/context";
import { ico, Thumb } from "../Urls";
import Download from "./Download";
function Grid(F, showPreview, url, Type) {
  return (
    <div className="Container_grid">
      <div onClick={() => showPreview(F, Type)} className="Grid_Detail">
        <a className="LinkContainer">
          <div className="FileTypeIcon ImageContainer">
            <img className="FileTypeIcon-icon" alt="" src={url} />
          </div>
          <span className="FileNameContainer">
            <span>{F.FileName}</span>
          </span>
          <span className="DateContainer">{F.CreatedDate}</span>
        </a>
      </div>
      <Download File={F} />
    </div>
  );
}
export default function GridView() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Files, dispatch } = value;
        const showPreview = (File, type) => {
          dispatch({
            type: "show" + type + "Preview",
            payload: File,
          });
        };
        return (
          <div className="col-md-12">
            {Files.map((F) => (
              <div key={F.id} className="col-md-3 col-lg-2 col-xs-4">
                {F.FileType === "Picture"
                  ? Grid(F, showPreview, Thumb + F.Path, "Picture")
                  : Grid(
                      F,
                      showPreview,
                      `${ico + F.ext.substring(1)}.png`,
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