import React from "react";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
import { Url,DocUrl } from "../Urls";
export default function DocumentPreview() {
  const cancelDocument = (dispatch) => {
    dispatch({
      type: "cancelDocument",
      payload: null,
    });
  };
  return (
    <SevkConsumer>
      {(value) => {
        const { dispatch, File, ShowDocumentPreview } = value;
        return ShowDocumentPreview ? (
          <div className="ma5-imgbox ">
            <div className="DocumentPreview">
              <CancelBtn click={cancelDocument.bind(this, dispatch)} />
            </div>
            <iframe
              title="title"
              className="Iframe"
              src={
                File.ext.substring(1) === "pdf"
                  ? Url + File.Path
                  : File.ext.substring(1) === "txt"
                  ? Url + File.Path
                  : DocUrl + File.Path
              }
            ></iframe>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}