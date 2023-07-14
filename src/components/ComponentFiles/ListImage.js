import React from "react";
import SevkConsumer from "../../store/context";
import { ico } from "./../../components/Tools/Urls";
export default function ListImage({ File }) {
  return (
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
            onClick={() => showPreview(File, File.Type)}
            src={
              File.Type === "Picture"
                ? `${ico}/photo.png`
                : `${ico + File.ext}.png`
            }
          />
        );
      }}
    </SevkConsumer>
  );
}