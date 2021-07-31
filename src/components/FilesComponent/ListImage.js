import React from "react";
import { icoUrl } from "../../store/context";
export default function ListImage({
  File,
  showPicturePreview,
  showDocumentPreview,
}) {
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
}
