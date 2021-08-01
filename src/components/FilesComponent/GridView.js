import React, { Fragment } from "react";
import SevkConsumer, { ThumbUrl, icoUrl } from "../../store/context";
import Download from "./Download";

export default function GridView() {
  return (
    <SevkConsumer>
      {(value) => {
        const { pictures, documents, dispatch } = value;
        const showPreview = (File, type) => {
          dispatch({
            type: "show" + type + "Preview",
            payload: File,
          });
        };
        return (
          <Fragment>
            <h2 className="padd0 col-xs-12">Resimler</h2>
            {pictures.map((File) => (
              <div
                key={File.id}
                className="DocumentContainerDiv effect col-md-2 col-xs-4"
              >
                <div className="FileBorder">
                  <div
                    onClick={() => showPreview(File, "Picture")}
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
            ))}
            <h2 className="padd0 col-xs-12">Belgeler</h2>
            {documents.map((File) => (
              <div
                key={File.id}
                className="DocumentContainerDiv effect col-md-2 col-xs-4"
              >
                <div className="FileBorder">
                  <div
                    className="padd0 filepreview"
                    style={{
                      backgroundImage: `url(${
                        icoUrl + File.ext.substring(1)
                      }.png)`,
                    }}
                  >
                    <Download File={File} />
                    <span
                      className="FileLink "
                      onClick={() => showPreview(File, "Document")}
                    >
                      {File.FileName.substring(0, 12)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        );
      }}
    </SevkConsumer>
  );
}
