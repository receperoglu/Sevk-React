import React from "react";
import Download from "./Download";
import { BaseUrl, ThumbUrl } from "../../store/context";
export default function ThumbsPicture({ File, showPicturePreview }) {
  return (
    <div key={File.id} className="DocumentContainerDiv effect col-md-2 col-xs-4">
      <div className="FileBorder">
        <div
          onClick={showPicturePreview}
          style={{
            backgroundImage: `url(${ThumbUrl + File.Path})`,
          }}
          className="PictureDiv"
        ></div>
        <Download link={BaseUrl + File.Path} />
        <span className="FileLink ">{File.FileName.substring(0, 12)}</span>
      </div>
    </div>
  );
}
