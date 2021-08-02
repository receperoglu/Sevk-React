import React from "react";
import SevkConsumer from "../../store/context";
import { ico } from "../Urls";
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
                  ? `${ico}/photo.png`
                  : `${ico + File.ext.substring(1)}.png`
              }
            />
          );
        }}
      </SevkConsumer>
    </div>
  );
}
