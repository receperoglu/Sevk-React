import React from "react";
import Download from "./Download";
import ListImage from "./ListImage";
import SevkConsumer from "../../store/context";
import moment from "moment";
 export default function ListViewBody() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Files } = value;

        return    (Files.map((File) => (
          <div key={File.Id} className="ms-DetailsRow">
            <div className="flex_half">
              <ListImage key={File.Id} File={File} />
            </div>
            <div className="flex_fold">
              <span className="flex1">{File.FileName}</span>
            </div>
            <div className="flex1">{moment(File.CreatedDate).format('d.mm.yy hh:mm')}</div>
            <div className="flex_half text-center">
              <Download key={File.Id} File={File} />
            </div>
          </div>
        ))
        )


      }}
    </SevkConsumer>
  );
}