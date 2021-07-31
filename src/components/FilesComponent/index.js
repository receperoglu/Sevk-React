import React, { useState } from "react";
import HeadSection from "../Layout/HeadSection";
import MenuItem from "../Layout/MenuItem";
import SevkConsumer from "../../store/context";
import ThumbsDocument from "./ThumbsDocument";
import ThumbsPicture from "./ThumbsPicture";
import ListImage from "./ListImage";
import Download from "./Download";
export default function index() {
  const [FilesVisible, setFilesVisible] = useState(true);
  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const { Files, pictures, documents, Vtype, dispatch } = value;
          const toggleVtype = () => {
            dispatch({ type: "toggleVtype", payload: null });
          };
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
          return (
            <div className="col-xs-12 col-md-12">
              <HeadSection
                click={toggleView}
                text="Dökümanlar"
                isVisible={FilesVisible}
              />
              <div className={FilesVisible ? "effect" : "hide"}>
                <div className="col-md-12 text-center">
                  <div className="col-md-12 text-center">
                    {Files.length === 0 ? (
                      " Dosya Eklenmemiş"
                    ) : (
                      <MenuItem
                        click={toggleVtype}
                        icon="FullScreen"
                        text=""
                        symbol=""
                        iconclassname="icon-144s"
                      />
                    )}
                  </div>
                </div>
                {Vtype ? (
                  <div>
                    {pictures.length === 0 ? null : (
                      <div>
                        <h2 className="padd0 col-xs-12">Resimler</h2>
                        {pictures.map((File) => (
                          <ThumbsPicture
                            File={File}
                            showPicturePreview={showPicturePreview}
                          />
                        ))}
                      </div>
                    )}
                    {document.length === 0 ? null : (
                      <div>
                        <h2 className="padd0 col-xs-12">Belgeler</h2>
                        {documents.map((File) => (
                          <ThumbsDocument
                            File={File}
                            showDocumentPreview={showDocumentPreview}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="od-ItemContent-list">
                    {Files.length === 0 ? null : ListViewHeader()}
                    {Files.map((File) => (
                      <div key={File.id} className="effect   ms-DetailsRow">
                        <div className="displayflex">
                          <div className="flex_half">
                            <ListImage
                              File={File}
                              showPicturePreview={showPicturePreview}
                              showDocumentPreview={showDocumentPreview}
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
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </SevkConsumer>
    </div>
  );
}
function ListViewHeader() {
  return (
    <div className="css-53 ms-DetailsHeader root-76">
      <div className="root-109 cellName-112 flex_half"></div>
      <div className="root-109 cellName-112 flex_fold">Dosya Adı</div>
      <div className="root-109 cellName-112 flex_one">Tarih</div>
      <div className="root-109 cellName-112 flex_half">İndir</div>
    </div>
  );
}