import React from "react";
import SevkConsumer, { icoUrl } from "../../store/context";
 export default function ListImage({ File }) {
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const { dispatch } = value;
          const showPreview = (File, type) => {
            dispatch({
              type: "show" + type + "Preview",
              payload: File,
            });
          };
          return (
            <img
              className="FileTypeIcon-icon"
              alt=""
              onClick={() => showPreview(File, File.FileType)}
              src={
                File.FileType === "Picture"
                  ? `${icoUrl}/photo.png`
                  : `${icoUrl + File.ext.substring(1)}.png`
              }
            />
          );
        }}
      </SevkConsumer>
    </div>
  );
}