import React from "react";
import CancelBtn from "./CancelBtn";
const BaseUrl = "https://recep.space/abi/dosyalar/";

const DocumentViewUrl =
  "https://view.officeapps.live.com/op/embed.aspx?src=https://recep.space/abi/dosyalar/";
export default function DocumentPreview({
  File,
  hideDocumentPreview,
  isShowDocumentPreview,
}) {
  return isShowDocumentPreview ? (
    <div className="ma5-imgbox PicturePreview">
      <div
        style={{
          position: "fixed",
          zIndex: "9999999999999999999",
          right: "10px",
          top: "10px",
          backgroundColor: "#fff",
          padding: "10px",
        }}
      >
        <CancelBtn click={hideDocumentPreview} />
      </div>
      <iframe
      title="title"
        style={{
          width: "100%",
          height: "100%",
          border: "0px",
          position: "fixed",
          zIndex: "9999",
          top: "50px !important",
          background: "#fff",
        }}
        src={
          File.ext.substring(1) === "pdf"
            ? BaseUrl + File.Path
            : File.ext.substring(1) === "txt"
            ? BaseUrl + File.Path
            : DocumentViewUrl + File.Path
        }
      ></iframe>
    </div>
  ) : null;
}
