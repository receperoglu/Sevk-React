import React from "react";
import Download from "./Download";
import { ThumbUrl } from "../../store/context";
import SevkConsumer from "../../store/context";
export default function ThumbsPicture({ File }) {
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const { dispatch } = value;
          const showPicturePreview = (File) => {
            dispatch({
              type: "showPicturePreview",
              payload: File,
            });
          };
          return (
            <div
              key={File.id}
              className="DocumentContainerDiv effect col-md-2 col-xs-4"
            >
              <div className="FileBorder">
                <div
                  onClick={() => showPicturePreview(File)}
                  style={{
                    backgroundImage: `url(${ThumbUrl + File.Path})`,
                  }}
                  className="PictureDiv"
                ></div>
                <Download File={File} />
                <span className="FileLink ">
                  {File.FileName.substring(0, 12)}
                </span>
              </div>
            </div>
          );
        }}
      </SevkConsumer>
    </div>
  );
}
