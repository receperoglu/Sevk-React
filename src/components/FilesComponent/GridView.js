import React from "react";
import SevkConsumer from "../../store/context";
import ThumbsPicture from "./ThumbsPicture";
import ThumbsDocument from "./ThumbsDocument";
export default function GridView() {
  return (
    <SevkConsumer>
      {(value) => {
        const { pictures, documents } = value;
        return (
          <div>
            {RenderPicture(pictures)}
            {RenderDocument(documents)}
          </div>
        );
      }}
    </SevkConsumer>
  );
}
function RenderPicture(pictures) {
  return pictures.length === 0 ? null : (
    <div>
      <h2 className="padd0 col-xs-12">Resimler</h2>
      {pictures.map((File) => (
        <ThumbsPicture key={File.id} File={File} />
      ))}
    </div>
  );
}
function RenderDocument(documents) {
  return documents.length === 0 ? null : (
    <div>
      <h2 className="padd0 col-xs-12">Belgeler</h2>
      {documents.map((File) => (
        <ThumbsDocument key={File.id}  File={File} />
      ))}
    </div>
  );
}
