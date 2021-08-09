import React from "react";
import Download from "./Download";
import ListImage from "./ListImage";
import SevkConsumer from "../../store/context";
export default function ListViewBody() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Files } = value;
        return Files.map((File) => (
          <div key={File.id} className="ms-DetailsRow">
            <div className="flex_half">
              <ListImage key={File.id} File={File} />
            </div>
            <div className="flex_fold">
              <span className="flex1">{File.FileName}</span>
            </div>
            <div className="flex1">{File.CreatedDate}</div>
            <div className="flex_half text-center">
              <Download key={File.id} File={File} />
            </div>
          </div>
        ));
      }}
    </SevkConsumer>
  );
}