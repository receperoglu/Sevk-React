import React from "react";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
import { Url, DocUrl } from "./../Tools/Urls";
export default function DocumentPreview() {
  return (
    <SevkConsumer>
      {(value) => {
        const { dispatch, File, ShowDocumentPreview } = value;
        const cancelDocument = () => {
          dispatch({
            type: "cancelDocument",
            payload: null,
          });
        };
        return ShowDocumentPreview ? (
          <div className="ma5-imgbox ">
            <div className="DocumentPreview">
              <CancelBtn click={cancelDocument} />
            </div>
            <iframe
              title="title"
              className="Iframe"
              src={
                File.ext === "pdf"
                  ? Url + File.Path
                  : File.ext === "txt"
                  ? Url + File.Path
                  : DocUrl + File.Path
              }
            />
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}