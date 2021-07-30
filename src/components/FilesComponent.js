import React, { useState } from "react";
import HeadSection from "./Layout/HeadSection";
import MenuItem from "./Layout/MenuItem";
import SevkConsumer, { BaseUrl, ThumbUrl, icoUrl } from "../store/context";
export default function FilesComponent() {
  const [FilesVisible, setFilesVisible] = useState(true);
  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  const showPicturePreview = (dispatch, File) => {
    dispatch({
      type: "showPicturePreview",
      payload: File,
    });
  };
  const showDocumentPreview = (dispatch, File) => {
    console.log(File);
    dispatch({
      type: "showDocumentPreview",
      payload: File,
    });
  };
  const toggleVtype = (dispatch) => {
    dispatch({ type: "toggleVtype", payload: null });
  };
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const { Files, pictures, documents, Vtype, dispatch } = value;
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
                        click={toggleVtype.bind(this, dispatch)}
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
                        <h2 className="padd0 col-xs-12"> Resimler</h2>
                        {pictures.map((f) => (
                          <div
                            key={f.id}
                            className="DocumentContainerDiv effect col-md-2 col-xs-4"
                          >
                            <div className="FileBorder">
                              <div
                                onClick={showPicturePreview.bind(
                                  this,
                                  dispatch,
                                  f
                                )}
                                style={{
                                  backgroundImage: `url(${ThumbUrl + f.Path})`,
                                }}
                                className="PictureDiv"
                              ></div>
                              <a href={BaseUrl + f.Path} target="blank">
                                <i
                                  data-icon-name="Download"
                                  className="FabricMDL2Icons"
                                >
                                  
                                </i>
                              </a>
                              <span className="FileLink ">
                                {f.FileName.substring(0, 12)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {document.length === 0 ? null : (
                      <div>
                        <h2 className="padd0 col-xs-12">Belgeler</h2>
                        {documents.map((f) => (
                          <div
                            key={f.id}
                            className="DocumentContainerDiv effect col-md-2 col-xs-4"
                          >
                            <div className="FileBorder">
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    icoUrl + f.ext.substring(1)
                                  }.png)`,
                                }}
                                className="padd0 filepreview "
                              >
                                <a href={BaseUrl + f.Path} target="blank">
                                  <i
                                    data-icon-name="Download"
                                    className="FabricMDL2Icons"
                                  >
                                    
                                  </i>
                                </a>
                                <span
                                  className="FileLink "
                                  onClick={showDocumentPreview.bind(
                                    this,
                                    dispatch,
                                    f
                                  )}
                                >
                                  {f.FileName.substring(0, 12)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="od-ItemContent-list">
                    {Files.length === 0 ? null : ListViewHeader()}
                    {Files.map((file) => (
                      <div key={file.id} className="effect   ms-DetailsRow">
                        <div className="displayflex">
                          <div className="flex_half">
                            <img
                              className="FileTypeIcon-icon"
                              alt=""
                              onClick={
                                file.FileType === "Picture"
                                  ? showPicturePreview.bind(
                                      this,
                                      dispatch,
                                      file
                                    )
                                  : showDocumentPreview.bind(
                                      this,
                                      dispatch,
                                      file
                                    )
                              }
                              src={
                                file.FileType === "Picture"
                                  ? `${icoUrl}/photo.png`
                                  : `${icoUrl + file.ext.substring(1)}.png`
                              }
                            />
                          </div>
                          <div className="flex_fold">
                            <span className="flex1">{file.FileName}</span>
                          </div>
                          <div className="flex1">{file.CreatedDate}</div>
                          <div className="flex_half text-right">
                            <a href={BaseUrl + file.Path} target="blank">
                              <i
                                data-icon-name="Download"
                                className="FabricMDL2Icons"
                              >
                                
                              </i>
                            </a>
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
