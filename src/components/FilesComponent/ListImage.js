import React from "react";
import { icoUrl } from "../../store/context";
import SevkConsumer from "../../store/context";
export default function ListImage({ File }) {
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const {  dispatch } = value;
          const showPicturePreview = (File) => {
            dispatch({
              type: "showPicturePreview",
              payload: File,
            });
          };
          const showDocumentPreview = (File) => {
            dispatch({
              type: "showDocumentPreview",
              payload: File,
            });
          };
          return (
            <img
              className="FileTypeIcon-icon"
              alt=""
              onClick={() =>
                File.FileType === "Picture"
                  ? showPicturePreview(File)
                  : showDocumentPreview(File)
              }
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
