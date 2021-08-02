import React from "react";
import SevkConsumer  from "../../store/context";
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
              <div key={F.id} className="FileContainer col-md-2 col-xs-4">
                {F.FileType === "Picture" ? (
                  <div
                    className="PictureDiv"
                    onClick={() => showPreview(F, "Picture")}
                    style={{ backgroundImage: `url(${Thumb + F.Path})` }}
                  >
                    <Download File={File} />
                    <span className="FileLink ">
                      {F.FileName.substring(0, 12)}
                    </span>
                  </div>
                ) : (
                  <div
                    className="filepreview"
                    style={{
                      backgroundImage: `url(${
                        ico + F.ext.substring(1)
                      }.png)`,
                    }}
                  >
                    <Download File={F} />
                    <span
                      className="FileLink"
                      onClick={() => showPreview(F, "Document")}
                    >
                      {F.FileName.substring(0, 12)}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      }}
    </SevkConsumer>
  );
}