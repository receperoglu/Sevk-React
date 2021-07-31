import React from "react";
import SevkConsumer from "../../store/context";
import ThumbsPicture from "./ThumbsPicture";
import ThumbsDocument from "./ThumbsDocument";
export default function GridView() {
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const { pictures, documents } = value;
          return (
            <div>
              {pictures.length === 0 ? null : (
                <div>
                  <h2 className="padd0 col-xs-12">Resimler</h2>
                  {pictures.map((File) => (
                    <ThumbsPicture File={File} />
                  ))}
                </div>
              )}
              {document.length === 0 ? null : (
                <div>
                  <h2 className="padd0 col-xs-12">Belgeler</h2>
                  {documents.map((File) => (
                    <ThumbsDocument File={File} />
                  ))}
                </div>
              )}
            </div>
          );
        }}
      </SevkConsumer>
    </div>
  );
}
