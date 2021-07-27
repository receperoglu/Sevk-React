import React, { useEffect, useState } from "react";
import HeadSection from "./Layout/HeadSection";
import MenuItem from "./Layout/MenuItem";

export const BaseUrl = "https://recep.space/abi/dosyalar/";
export const ThumbUrl = "https://recep.space/thumbs/";
export const icoUrl =
  "https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201207.001/assets/item-types/64/";

export default function FilesComponent({
  Files,
  showPicturePreview,
  showDocumentPreview,
  toggleVtype,
  Vtype,
}) {
  const [FilesVisible, setFilesVisible] = useState(true);
  const [documents, setdocuments] = useState([]);
  const [pictures, setpictures] = useState([]);

  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  useEffect(() => {
    setdocuments(Files.filter((f) => f.FileType === "Document"));
    setpictures(Files.filter((f) => f.FileType === "Picture"));
  }, [Files]);
  return (
    <div className={Files.length === 0 ? "hide" : "col-xs-12 col-md-12"}>
      <HeadSection
        click={toggleView}
        text="Dökümanlar"
        isVisible={FilesVisible}
      />
      {Vtype
        ? GridView(
            documents,
            pictures,
            showPicturePreview,
            toggleView,
            FilesVisible,
            showDocumentPreview,
            toggleVtype
          )
        : ListView(
            Files,
            showPicturePreview,
            FilesVisible,
            BaseUrl,
            toggleView,
            icoUrl,
            showDocumentPreview,
            toggleVtype
          )}
    </div>
  );
}
function ListView(
  Files,
  showPicturePreview,
  FilesVisible,
  BaseUrl,
  toggleView,
  icoUrl,
  showDocumentPreview,
  toggleVtype
) {
  return (
    <div>
      <div className={FilesVisible ? "effect" : "hide"}>
        {ChangeView(toggleVtype)}
        <div className="od-FolderItemContent-list od-ItemContent-list">
          <div className="ms-FocusZone css-53 ms-DetailsHeader root-76">
            <div className="ms-DetailsHeader-cell is-actionable od-DetailsHeader-cell--Name od-DetailsHeader-cell root-109 flex_half">
              <span className="ms-DetailsHeader-cellName cellName-112"></span>
            </div>
            <div className="ms-DetailsHeader-cell is-actionable od-DetailsHeader-cell--Name od-DetailsHeader-cell root-109 flex_fold">
              <span className="ms-DetailsHeader-cellName cellName-112">
                Dosya Adı
              </span>
            </div>
            <div className="ms-DetailsHeader-cell is-actionable od-DetailsHeader-cell--FileSize od-DetailsHeader-cell root-109">
              <span className="ms-DetailsHeader-cellName cellName-112">
                Tarih
              </span>
            </div>
            <div className="ms-DetailsHeader-cell is-actionable od-DetailsHeader-cell--FileSize od-DetailsHeader-cell root-109 flex_half">
              <span className="ms-DetailsHeader-cellName cellName-112">
                İndir
              </span>
            </div>
          </div>
          {ListViewRender(
            Files,
            showPicturePreview,
            showDocumentPreview,
            BaseUrl,
            icoUrl
          )}
        </div>
      </div>
    </div>
  );
}
function ListViewRender(
  Files,
  showPicturePreview,
  showDocumentPreview,
  BaseUrl,
  icoUrl
) {
  return Files.map((file) => (
    <div key={file.id} className="effect   ms-DetailsRow">
      <div className="displayflex">
        <div className="flex_half">
          <div className="FileTypeIcon text-left">
            <img
              className="FileTypeIcon-icon"
              alt=""
              onClick={() => {
                file.FileType === "Picture"
                  ? showPicturePreview(BaseUrl + file.Path, file.Path)
                  : showDocumentPreview(file);
              }}
              src={
                file.FileType === "Picture"
                  ? `${icoUrl}/photo.png`
                  : `${icoUrl + file.ext.substring(1)}.png`
              }
            />
          </div>
        </div>
        <div className="flex_fold">
          <span className="flex1">{file.FileName}</span>
        </div>
        <div className="flex1">{file.CreatedDate}</div>
        <div className="flex_half">
          <a href={BaseUrl + file.Path} target="blank">
            <i data-icon-name="Download" className="FabricMDL2Icons">
              
            </i>
          </a>
        </div>
      </div>
    </div>
  ));
}
function GridView(
  documents,
  pictures,
  showPicturePreview,
  toggleView,
  FilesVisible,
  showDocumentPreview,
  toggleVtype
) {
  return (
    <div>
      <div className={FilesVisible ? "effect" : "hide"}>
        {ChangeView(toggleVtype)}
        {Pictures(pictures, showPicturePreview)}
        {Documents(documents, showDocumentPreview)}
      </div>
    </div>
  );
}
function Documents(documents, showDocumentPreview) {
  return document.length === 0 ? null : (
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
                backgroundImage: `url(${icoUrl + f.ext.substring(1)}.png)`,
              }}
              className="padd0 filepreview "
            >
              <span
                className="FileLink "
                onClick={() => {
                  showDocumentPreview(f);
                }}
              >
                {f.FileName.substring(0, 12)}
              </span>
              <a className="DownloadBtn" href={BaseUrl + f.Path} target="blank">
                <i data-icon-name="Download" className="FabricMDL2Icons">
                  
                </i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function Pictures(pictures, showPicturePreview) {
  return pictures.length === 0 ? null : (
    <div>
      <h2 className="padd0 col-xs-12"> Resimler</h2>
      {pictures.map((f) => (
        <div
          key={f.id}
          className="DocumentContainerDiv effect col-md-2 col-xs-4"
        >
          <div className="FileBorder">
            <div
              onClick={() => {
                showPicturePreview(BaseUrl + f.Path, f.Path);
              }}
              style={{
                backgroundImage: `url(${ThumbUrl + f.Path})`,
              }}
              className="PictureDiv"
            ></div>
            <a href={BaseUrl + f.Path} target="blank">
              {f.FileName.substring(0, 12)}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
function ChangeView(toggleVtype) {
  return (
    <div className="fright">
      <MenuItem
        click={toggleVtype}
        icon="FullScreen"
        text=""
        symbol=""
        iconclassname="icon-144s"
      />
    </div>
  );
}
