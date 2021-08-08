import React from "react";
import SevkConsumer from "../../store/context";
import { ico, Thumb } from "../Urls";
import Download from "./Download";
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
              <div key={F.id} className="col-md-3 col-xs-4">
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
function Grid(F, showPreview, url, Type) {
  return (
    <div className="cell_4410e9f1">
      <div
        onClick={() => showPreview(F, Type)}
        className="cellContent_4410e9f1"
      >
        <div className=" od-ItemTile2--isLarge tile_fcf7455f selectable_fcf7455f invokable_fcf7455f">
          <a className="ms-Tile-link link_fcf7455f">
            <span className="ms-Tile-aboveNameplate aboveNameplate_fcf7455f">
              <div className="FileTypeIcon">
                <img className="FileTypeIcon-icon" alt="" src={url} />
              </div>
            </span>
            <span className="ms-Tile-nameplate nameplate_fcf7455f">
              <span className="ms-Tile-name name_fcf7455f">
                <span>{F.FileName}</span>
              </span>
              <span className="ms-Tile-activity activity_fcf7455f">
                {F.CreatedDate}
              </span>
            </span>
          </a>
        </div>
      </div>
      <Download File={F} />
    </div>
  );
}