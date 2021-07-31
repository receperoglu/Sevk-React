import React from "react";
import Download from "./Download";
import ListImage from "./ListImage";
import SevkConsumer from "../../store/context";
export default function ListViewBody() {
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const { Files, dispatch } = value;
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
          return Files.map((File) => (
            <div key={File.id} className="effect   ms-DetailsRow">
              <div className="displayflex">
                <div className="flex_half">
                  <ListImage
                    File={File}
                    showPicturePreview={() => showPicturePreview(File)}
                    showDocumentPreview={() => showDocumentPreview(File)}
                  />
                </div>
                <div className="flex_fold">
                  <span className="flex1">{File.FileName}</span>
                </div>
                <div className="flex1">{File.CreatedDate}</div>
                <div className="flex_half text-right">
                  <Download File={File} />
                </div>
              </div>
            </div>
          ));
        }}
      </SevkConsumer>
    </div>
  );
}