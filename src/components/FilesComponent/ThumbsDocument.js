import React from "react";
import Download from "./Download";
import { BaseUrl, icoUrl } from "../../store/context";
export default function ThumbsDocument({ File, showDocumentPreview }) {
  return (
    <div
      key={File.id}
      className="DocumentContainerDiv effect col-md-2 col-xs-4"
    >
      <div className="FileBorder">
        <div
          className="padd0 filepreview"
          style={{
            backgroundImage: `url(${icoUrl + File.ext.substring(1)}.png)`,
          }}
        >
          <Download link={BaseUrl + File.Path} />
          <span className="FileLink " onClick={() => showDocumentPreview(File)}>
            {File.FileName.substring(0, 12)}
          </span>
        </div>
      </div>
    </div>
  );
}
